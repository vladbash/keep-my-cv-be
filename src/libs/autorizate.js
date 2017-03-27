import models from '../models';
import jwt from 'jsonwebtoken';
import app from '../index';

const Authorize = (req, res, next) => {
    let token = req.headers.authorization;

    jwt.verify(token, app.get('superSecret'), (err, data) => {
        if (err) {
            res.status(401).json({ error: err });
        } else {
            models.Users.findOne({
                where: {
                    email: data.email,
                    isActive: true
                }
            })
                .then((user) => {
                    if (user == null)
                        res.status(401).json({ error: "User does not exist or unactive." })
                    else {
                        req.user = user;
                        next();
                    }
                })
                .catch(err => {
                    res.status(401).json({ error: err.stack })
                });
        }
    });
};

module.exports = Authorize;