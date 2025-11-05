module.exports = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ message: 'Name is required and must be a valid string.' });
  }
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Email is required and must be valid.' });
  }
  next();
};