import candidates from '../../models/candidates';
import resource from 'resource-router-middleware';

export default ({ config }) => resource({
    id: 'candidates'
});