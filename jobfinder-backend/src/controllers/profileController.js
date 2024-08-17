import Profile from "../models/profileSchema";

export const getUserProfile = async (req, res) => {
    try {
      const user = await Profile.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
  };
  

  export const updateUserProfile = async (req, res) => {
    try {
      const updatedUser = await Profile.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
  };
