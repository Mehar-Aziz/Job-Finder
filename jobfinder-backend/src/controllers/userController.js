import User from "../models/userModel.js";

//get all users
export const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//create a new user
export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({
        name,
        email,
        password,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


