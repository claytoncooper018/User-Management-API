const { v4: uuidv4 } = require('uuid');

let users = [
  { id: uuidv4(), name: "Alice", email: "alice@example.com" },
  { id: uuidv4(), name: "Bob", email: "bob@example.com" }
];

// ✅ Get all users
exports.getUsers = (req, res) => {
  res.json(users);
};

// ✅ Get user by ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// ✅ Create new user
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: uuidv4(), name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// ✅ Update user
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  const { name, email } = req.body;
  users[index] = { ...users[index], name, email };
  res.json(users[index]);
};

// ✅ Delete user
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const existingUser = users.find(u => u.id === id);
  if (!existingUser) return res.status(404).json({ message: 'User not found' });

  users = users.filter(u => u.id !== id);
  res.status(204).send();
};