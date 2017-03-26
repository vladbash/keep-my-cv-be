import resource from 'resource-router-middleware';
import users from '../models/users';

export default ({ config }) => resource({
    id: 'login',
    /**
     * Loginning
     */
    create({ body }, res) { 
        res.json({auth: true})
    }
});