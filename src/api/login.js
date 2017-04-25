import resource from 'resource-router-middleware';
import models from '../models';
import jwt from 'jsonwebtoken';
import jwthelper from '../libs/jwthelper';
import _ from 'lodash';

export default ({ config }) => resource({
    id: 'login',
    /**
     * Loginning
     */
    create({ body }, res) {
        if (_.isEmpty(body)) {
            res.status(400).json({ 'error': 'Incorrect params.' });
        } else {
            models.Users.findOne({
                where: {
                    email: body.login.toString().toLowerCase()
                }
            }).then(user => {
                if (!user || !models.Users.isPassword(user.password, body.password)) {
                    res.status(400).json({ 'error': 'Username or password is incorrect.' });
                } else if(!user.isActive) {
                    res.status(400).json({ 'error': 'Your account is not activated. Please activate your account!' })
                } else {
                    let token = jwthelper.sign(user.dataValues);
                    res.status(200).json({
                        token,
                        isActive: user.isActive
                    });
                }
            });
        }
    }
});