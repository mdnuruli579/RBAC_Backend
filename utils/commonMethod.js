
import nodemailer from "nodemailer";
import { APP_PASS, CU_MAIL, SERVER } from "./constant.js";

export const validatePassword=(password)=>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*_?&])[A-Za-z\d@$!%*_?&]{8,}$/;
    return passwordRegex.test(password);
}

export const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());
  };

export const sendMail=async(user,token)=>{
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: CU_MAIL,
            pass: APP_PASS
        }
    });

    const mailOptions = {
        from: CU_MAIL,
        to: user.email,
        subject: 'Verify Your Email for Testing Platform',
        text: `Please verify your email by clicking the link: ${SERVER}/api/auth/verify?token=${token}`
    };

    await transporter.sendMail(mailOptions);
}