import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/Users';  
import { generateToken } from '../utils/generateToken';
import { sendWelcomeEmail } from '../utils/sendMail';

export const signup = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
  
      await sendWelcomeEmail(email, username); // <== send mail
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
      res.status(201).json({ message: 'User created', token });
    } catch (error) {
      res.status(500).json({ message: 'Signup failed' });
    }
  };

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ token: generateToken(user._id.toString()) });
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'User not found' });

  // In real implementation, send reset link via email
  res.json({ message: 'Password reset link (mock) sent to email' });
};

export const getUsers = async (_req: Request, res: Response) => {
    try {
      const users = await User.find().select('-password'); // Don't send password
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  };
