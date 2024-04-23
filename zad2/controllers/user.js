// controllers/user.js

const User = require('../models/User');
const fs = require('fs');
const path = require('path');

const getSetUserSession = (req, res) => {
    const users = User.getAll();
    const loginContent = fs.readFileSync(path.resolve(__dirname, '../views/partials/login.ejs'), 'utf8');
    res.render('set-user-session', { title: 'Set User Session', users, loginContent });
};

const setUserSession = (req, res) => {
    req.session.userId = req.body.userId;
    res.redirect('/');
};

module.exports = { getSetUserSession, setUserSession };

