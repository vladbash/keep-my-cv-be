import resource from 'resource-router-middleware';
import { Router } from 'express';
import models from '../models';

export default ({ config }) => resource({
    id: 'registaration',

    create(req, res) {
        models.Users.create(req.body)
            .then(data => {
                res.json(data);
            });
    }
});