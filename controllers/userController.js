import User from '../models/userModel.js';

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
      const user = await User.findOne({id:req.params.id});
      res.json(user);
    } 
    catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createUser: async (req, res) => {
    const newUser = new User(req.body);
   
    try {
      newUser.password = await User.hashPassword(newUser.password);
      await newUser.save();
      console.log('User saved successfully.');
      res.status(201).json(newUser);
    } 
    catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateUserById: async (req, res) => {
    try {
      const existingUser = await User.findOne({ id: req.params.id });
      if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (req.body.password) {
        req.body.password = await User.hashPassword(req.body.password);
      }
      const updatedUser = await User.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const deletedUser = await User.findOneAndDelete( {id:req.params.id});
      res.json(deletedUser);
    }
     catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default userController;
