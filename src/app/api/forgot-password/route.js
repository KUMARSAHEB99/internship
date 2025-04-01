import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../db.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import crypto from "crypto";
import { NextResponse } from "next/server.js";
import { log } from "console";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

export async function POST(req){
    try {
        const { email } = await req.json();
    
       
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) {
            return NextResponse.json({ message: "not found" },{status:400});
        }
    
        
        const newPassword = crypto.randomBytes(8).toString("hex"); 
        console.log(newPassword);
        
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
    
        return NextResponse.json({ message: "A new mail has sent to your mail" });
      } catch (error) {
        return NextResponse.json({ message: "Some Error" },{status:500});
      }
}