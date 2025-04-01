import dotenv from "dotenv"; 
dotenv.config();

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../db.js";

import { NextResponse } from "next/server.js";



export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        console.log("Received Data:", name, email, password); 

        
        const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userExists.rows.length > 0) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        
        const hashedPassword = await bcrypt.hash(password, 10);
        
      
        await pool.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
            [name, email, hashedPassword]
        );

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

    } catch (error) {
        console.error("Registration Error:", error);  
        return NextResponse.json({ message: "Some error occurred", error: error.message }, { status: 500 });
    }
}
