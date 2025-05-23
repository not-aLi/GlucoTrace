import express from 'express';
import { forgotPassword, forgotPasswordOtpVerification, resendVerificationEmail, resetPassword, sendOtp,verifyEmail } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/send-otp",sendOtp)

router.post("/verify-email", verifyEmail)

router.post("/resend-verify-email", resendVerificationEmail)

router.post("/forgot-password",forgotPassword)

router.post("/verify-reset-password",forgotPasswordOtpVerification)

router.post("/reset-password",resetPassword)




export default router