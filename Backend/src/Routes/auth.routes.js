import express from "express";
import { signup, logout, login, updateProfile, checkAuth } from "../Controllers/auth.controller.js";
import { protectRoute } from "../Middleware/auth.middleware.js";

const router = express.Router();

// Auth Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Protected Routes
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth);

export default router;
