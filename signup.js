let USERS = [];

export default function handler(req, res) {
  const { username, password } = req.body;
  const exists = USERS.find(u => u.username === username);
  if (exists) {
    res.status(400).json({ success: false, message: 'User already exists' });
  } else {
    USERS.push({ username, password });
    res.status(200).json({ success: true, message: 'Signup successful!' });
  }
}