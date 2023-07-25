import UserModel from "../models/user.js";

const UserController = {
    signUp: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await UserModel.create({ username, password });

            return res.status(201).json({ user });
        } catch {
            return res.status(500).json({ message: "Server error" });
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await UserModel.findOne({ username });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            if (password !== user.password) {
                return res.status(401).json({ message: "Wrong password" });
            }

            return res.status(200).json({ user });
        } catch {
            return res.status(500).json({ message: "Server error" });
        }
    },
};

export default UserController;
