const express = require("express");
const router = express.Router();
const {otpGenerator, otpVerify} = require("@monaal16/otp-handler");

router.get("/generate", async (req, res) => {
  // Logic to generate OTP
  try{
    const otp = otpGenerator(6); // Generate a 6-digit OTP
    res.status(200).json({ otp });
   } catch (error) {
    res.status(500).json({ error: "Failed to generate OTP" });
  }
});

router.post("/verify", async (req, res) => {
  // Logic to verify OTP
  try{
    const{otp} = req.body;
    const isValid = otpVerify(otp); // Verify the OTP
    if (isMatched){
      return res.status(200).json({ message: "OTP is valid" });
    }
    throw new Error("Invalid OTP");
  } catch (error) {
    res.status(500).json({ error: "Failed to verify OTP" });
  }
});

module.exports = router;