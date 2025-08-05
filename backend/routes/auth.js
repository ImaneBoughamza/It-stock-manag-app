const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/signup', (req, res) => {
  console.log('[ROUTE] /signup hit');
  registerUser(req, res);
});

router.post('/login', (req, res) => {
  console.log('[ROUTE] /login hit');
  loginUser(req, res);
});

module.exports = router;
