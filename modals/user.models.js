import mongoose from "mongoose";
const userSchemma=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    role: { type: String, default: "User", enum: ["Admin", "Moderator", "User"] },
    isAccVarified:{
        type:Boolean,
        default:false
    },
},{timestamps:true});
export const User=mongoose.model('User',userSchemma);
