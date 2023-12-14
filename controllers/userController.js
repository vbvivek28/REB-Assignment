import User from '../models/userModel';

const userController = {

  getAllUsers: async (req, res) => {
   
    try {
      const users = await User.find();
      res.json(users);
    } 
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getUserById: async (req, res) => {
    
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } 
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createUser: async (req, res) => {
    const newUser = new User(req.body);
   
    try {
      await newUser.save();
      res.status(201).json(newUser);
    } 
    catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateUserById: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedUser);
    } 
    catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndRemove(req.params.id);
      res.json(deletedUser);
    }
     catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default userController;
