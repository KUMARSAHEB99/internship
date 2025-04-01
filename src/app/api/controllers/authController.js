import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../db.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;


export const register = async (req, res) => {
  try {
    const { username, email, password } = req.json();
    
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    await pool.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", 
                     [username, email, hashedPassword]);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.json();
    
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.rows[0].id }, SECRET_KEY, { expiresIn: "1h" });

    return res.status(201).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


 

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.json();

   
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (user.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    
    const newPassword = crypto.randomBytes(8).toString("hex"); 

    
    const hashedPassword = await bcrypt.hash(newPassword, 10);

   
    await pool.query("UPDATE users SET password = $1 WHERE email = $2", [hashedPassword, email]);

    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASSWORD },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Your New Password",
      text: `Your new password is: ${newPassword}\n\nPlease log in and change it immediately.`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "A new password has been sent to your email" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req,res)=>{
  try{
    const users=await pool.query("SELECT * FROM users");
    res.json(users.rows);
  }
  catch(err){
    res.sendStatus(500).json({error:err.message});
  }
}
