import { version } from '../../package.json';
import { Router } from 'express';
import candidates from './candidates';

export default ({ config, db }) => {
	let api = Router();
	// mount the candidates resource
	api.use('/candidates', candidates({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}