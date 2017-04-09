import { version } from '../../package.json';
import { Router } from 'express';
import users from './users';
import login from './login';
import registration from './registration';
import Authorize from '../libs/autorizate';

export default ({ config }) => {
	let api = Router();

	/**
	 * custom routes
	 */
	api.use('/login', login({ config }));
	api.use('/registration', registration({ config }));
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	
	api.use(Authorize);
	api.use('/users', users({ config }));

	return api;
}