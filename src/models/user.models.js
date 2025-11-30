import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            enum: ["Customer", "Admin"],
            default: "Customer",
        },

        isVerified: {
            type: Boolean,
            default: false,
        },

        otp: {
            type: String,
        },

        otpExpiry: {
            type: Date,
        },

        smsOtp: {
            type: String,
        },

        smsOtpExpiry: {
            type: Date,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User