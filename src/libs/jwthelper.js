import jwt from 'jsonwebtoken';
import app from '../index';

exports.decrypt = string => string;
exports.sign = (user) => {
    let secret = app.get('superSecret');
    let token = jwt.sign(user, secret, {
        expiresIn: 86400
    });
    return token;
}