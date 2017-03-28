import resource from 'resource-router-middleware';
import { Router } from 'express';
import models from '../models';

export default ({ config }) => resource({
    id: 'registaration',

    create({ body }, res) {
        models.Users.create(body)
            .then(data => {
                res.json(data);
            });
    }
});