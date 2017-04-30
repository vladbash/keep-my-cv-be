import resource from 'resource-router-middleware';
import users from '../../models/users';

export default ({ config }) => resource({
    id: 'users',

    load(req, id, callback) {
        users.findById(id, {
            attributes: ['id', 'name', 'email']
        }).then(res => {
            callback(null, JSON.parse(res));
        }).catch(err => {
            callback(err, null);
        });
    },

    /** GET / - List all entities */
    index({ params }, res) {
        res.json({test: params});
    },

    /** POST / - Create a new entity */
    create({ body }, res) {
        body.id = candidates.length.toString(36);
        candidates.push(body);
        res.json(body);
    },

    /** GET /:id - Return a given entity */
    read({ candidate }, res) {
        res.json(candidate);
    },

    /** PUT /:id - Update a given entity */
    update({ candidate, body }, res) {
        for (let key in body) {
            if (key !== 'id') {
                candidate[key] = body[key];
            }
        }
        res.sendStatus(204);
    },

    /** DELETE /:id - Delete a given entity */
    delete({ candidate }, res) {
        candidates.splice(candidates.indexOf(candidate), 1);
        res.sendStatus(204);
    }

})