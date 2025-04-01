import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../db.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import crypto from "crypto";
import { NextResponse } from "next/server.js";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

export async function POST(req){
    try {
        const { email, password } =await req.json();
        
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) {
            return NextResponse.json({ message: "No User" },{status:400});
        }
    
        const isMatch = await bcrypt.compare(password, user.rows[0].password);
        if (!isMatch) {
            return NextResponse.json({ message: "Invalid Credentials" },{status:400});
        }
    
        const token = jwt.sign({ userId: user.rows[0].id }, SECRET_KEY, { expiresIn: "1h" });
    
        return NextResponse.json({ message: "Login successfully" },{status:201},token);
      } catch (error) {
        return NextResponse.json({ message: "Some Error" },{status:500});
      }
}