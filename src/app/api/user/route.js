import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../db.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

export async function POST(req){
    try{
        const users=await pool.query("SELECT * FROM users");
        res.json(users.rows);
      }
      catch(err){
        res.sendStatus(500).json({error:err.message});
      }
}