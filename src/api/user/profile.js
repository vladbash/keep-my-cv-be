import resource from 'resource-router-middleware';
import users from '../../models/users';

export default ({ config }) => resource({
    id: 'profile',

    index({ user }, res) {
        res.status(200).json(user);
    },

    update({ user, body }, res) {

    }
});