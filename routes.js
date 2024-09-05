const express = require('express');
const router = express.Router();

let users = [
    { id: 1, username: 'alice', password: 'password123' },
    { id: 2, username: 'bob', password: 'password456' },
    { id: 3, username: 'charlie', password: 'password789' }
];

router.get('/api/users', (req, res) => {
    res.json(users);
});

router.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    const newUser = { username, password }; // In a real app, password should be hashed
    users.push(newUser);
    res.status(201).json(newUser);
});

router.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: `Welcome back, ${username}!` });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

module.exports = router;