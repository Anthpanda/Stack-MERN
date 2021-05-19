import User from '../models/User'

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

export const createUsers = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json({
        message: 'User - created'
    });
}

export const deleteUser = async (req, res) => {
    await User.findOneAndDelete({_id:req.params.id})
    res.json({
        message: 'User - Deleted'
    });
}
