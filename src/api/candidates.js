import resource from 'resource-router-middleware';
import candidates from '../models/candidate';

export default ({ config, db }) => resource({
    /** Property name to store preloaded entity on `request` */
    id: 'candidate',

    /** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
    load(req, id, callback) {
        let tempCandidate = candidates.find(cand => cand.id === id),
            err = tempCandidate ? null : 'Not found';
        callback(err, tempCandidate);
    },

    /** GET / - List all entities */
    index({ params }, res) {
        res.json(candidates);
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

});