import resource from 'resource-router-middleware';
import users from '../../models/users';

export default ({ config }) => resource({
    id: 'profile',

    index({ user }, res) {
        let respUser = user;
        delete respUser.dataValues.password;
        res.status(200).json(respUser);
    },

    update({ user, body }, res) {

    }
});