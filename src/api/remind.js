import resource from 'resource-router-middleware';
import models from '../models';
import password from 'generate-password';
import bcrypt from 'bcrypt';

export default ({ config }) => resource({
    id: 'remind',

    create({ body }, res) {
        let email = body.email.toString().toLowerCase();
        models.Users.findOne({
            where: {
                email
            }
        }).then(user => {
            if(!user) {
                res.status(400).json({ 'error': 'Incorrect email.' })
            } else {
                const salt = bcrypt.genSaltSync();
                let newPassword = generator.generate({
                    length: 10,
                    numbers: true
                });
                user.password = bcrypt.hashSync(newPassword, salt);
                user.save().then(() => {
                    res.status(200).json({ 'message': 'New password was sent to your email.' });
                });
            }
        })
    }
});