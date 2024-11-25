import express from 'express';
import cors from 'cors';
import userRoute from './router/user.route.js';
import authRoute from './router/auth.route.js';
import dotenv from 'dotenv'
import connetDB from './utils/db.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { PORT, SERECT_KEY } from './utils/constant.js';
dotenv.config({});
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const corsOption={
    origin:"*",
    Credentials:true
};
app.use(cors(corsOption));
app.use(cookieParser());
app.use(session({ secret: SERECT_KEY, resave: false, saveUninitialized: false }));
const port=PORT || 8000;
app.use("/api/auth",authRoute);
app.use("/api",userRoute)
app.listen(port,()=>{
    connetDB();
    console.log(`server is running on port ${port}`);
});