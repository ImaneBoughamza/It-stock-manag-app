const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  console.log('[REGISTER] Incoming data:', req.body);

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log('[REGISTER] User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    // Use save() to make sure pre-save runs
    const newUser = new User({ firstName, lastName, email, password, role });
    const savedUser = await newUser.save();
    console.log('[REGISTER] User created:', savedUser);

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('[REGISTER] Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id, user.role);
    res.status(200).json({ token, role: user.role, message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
