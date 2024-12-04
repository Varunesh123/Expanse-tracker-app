import userModel from "../models/userModel.js";

const loginController = async(req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(404).send("email and password required");
    }

    try {
        const user = await userModel.findOne({email, password});
        if(!user)
            return res.status(404).send("User not found");

        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error,
        });
    }
}

const registerController = async(req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();

        res.status(201).json({
            success: true,
            newUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error,
        });
    }
}

export{
    loginController,
    registerController
}