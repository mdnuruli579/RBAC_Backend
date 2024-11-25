import mongoose from "mongoose"
import {MONGO_URI} from "./constant.js";
const connetDB= async()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log('DataBase Connected Successfully');

    } catch (error) {
        console.log('DataBase Connection Failed');
        console.log(error);
    }
}
export default connetDB;