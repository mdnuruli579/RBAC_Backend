import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import getUsers from "../controller/user.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
const router=express.Router();
router.get("/users", isAuthenticated, roleMiddleware(["Admin"]), getUsers);
export default router;