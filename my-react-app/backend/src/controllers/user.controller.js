const User = require('../models/user.model'); // Assuming user.model.js exports the User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class UserController {
    welcomeMessage(req, res, next) {
        try {
            console.log(`
                call : ${req.originalUrl}
                `);
            next();
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // GET all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // GET user by ID
    async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // POST create a new user
    async createUser(req, res) {
        try {
            const { username, email, password, fullName, bio, age, gender, location, interests, role, avatarUrl } = req.body;

            if (!username || !email || !password) {
                res.status(400).json({ message: 'Username, email, and password are required.' });
                return;
            }

            const existingUser = await User.findOne({ $or: [{ username }, { email }] });
            if (existingUser) {
                res.status(400).json({ message: 'Username or email already exists.' });
                return;
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({
                username,
                email,
                password:hashedPassword,
                fullName,
                bio,
                age,
                gender,
                location,
                interests,
                role,
                avatarUrl,
                isActive: true,
                createdAt: new Date(),
                lastLogin: null,
            });

            await newUser.save();

            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    // PUT update user by ID
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedUser) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.json(updatedUser);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // DELETE user by ID
    async deleteUser(req, res) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            if (!deletedUser) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

// Export an instance of UserController
module.exports = new UserController();
