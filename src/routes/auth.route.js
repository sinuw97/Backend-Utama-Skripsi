import express from 'express';
import { registerController, loginController } from '../controllers/auth.controller.js';

const authRoute = express.Router();

// Register
authRoute.post('/register', registerController);
// Login
authRoute.post("/login", loginController);

export default authRoute;