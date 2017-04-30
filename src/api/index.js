import { version } from '../../package.json';
import { Router } from 'express';
import users from './user/users';
import login from './authentification/login';
import registration from './authentification/registration';
import Authorize from '../libs/autorizate';
import remind from './authentification/remind';
import profile from './user/profile';


export default ({ config }) => {
	let api = Router();

	/**
	 * custom routes
	 */
	api.use('/login', login({ config }));
	api.use('/registration', registration({ config }));
	api.use('/remind', remind({ config }));
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});
	
	api.use(Authorize);
	api.use('/users', users({ config }));
	api.use('/profile', profile({ config }));

	return api;
}