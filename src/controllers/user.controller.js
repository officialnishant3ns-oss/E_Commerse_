import User from "../models/user.models"
import apirerror from "../utils/apierror"
import apiresponse from "../utils/apiresponse"
import asyncHandler from "../utils/asynchander"

const registeruser = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body

    if (!username || !email || !password) {
        throw new apirerror(400, "All fields are required")
    }
    const existinguser = await User.findOne({ email })
    if (existinguser) {
        throw new apirerror(409, "User already exists , please login")
    }
    const user = await User.create({
        username,
        email,
        password,
        role
    })
    return res.status(201).json(
       new apiresponse(true, "User registered successfully", user)
    )
}
)

export { registeruser }