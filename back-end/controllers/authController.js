const User = require("../models/User");

module.exports.register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json({
            status: 'success',
            data: { user }
        })
    } catch (error) {
        res.json(error);
    }
}

module.exports.login = (req, res, next) => {
    res.json('User loginn');
}