import resource from 'resource-router-middleware';
import { Router } from 'express';
import models from '../models';

export default ({ config }) => resource({
    id: 'registaration',

    create({ body }, res) {
        body.email = body.email.toString().toLowerCase();
        models.Users.findOne({
            where: {
                email: body.email
            }
        }).then(user => {
            console.log(user)
            if(!user || user === null) {
                models.Users.create(body)
                    .then(data => {
                        res.status(200).json({
                            'message': 'Congrats! The email with activation link has been sent to your email!',
                            'user': data
                        });
                    }, error => {
                        res.status(403).json(error);
                    });
            } else {
                res.status(409).json({'error': 'This email has already used by someone in the system'});
            }
        });
    }
});