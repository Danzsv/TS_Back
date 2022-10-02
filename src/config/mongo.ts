import "dotenv/config";
import { Response } from "express";
import { connect, Error } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI;
  await connect(DB_URI);
}

export default dbConnect;
