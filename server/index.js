import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

dotenv.config();

app.listen(3001, () => {
  console.log("Backend server is running!");
});