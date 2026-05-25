const Joi = require('joi');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require("../models/user.model.js");

const handleRefreshToken = (req, res) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.sendStatus(401);
        }

        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {

                if (err) {
                    return res.sendStatus(403);
                }

                const accessToken = jwt.sign(
                    { id: decoded.id },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '15m' }
                );

                res.json({ accessToken });
            }
        );
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



module.exports = {
    handleRefreshToken
};