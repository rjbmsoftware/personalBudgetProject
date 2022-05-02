const express = require('express');
const envelopeRouter = express.Router();
const envelopeManager = require('../envelopes/envelopes');

envelopeRouter.post('/', (req, res) => {
    let {name, amount, description} = req.body;
    const newEnvelope = envelopeManager.addEnvelope(name, amount, description);
    res.status(201).send(newEnvelope);
});

envelopeRouter.get('/', (req, res) => {
    res.send(envelopeManager.getEnvelopes());
});

envelopeRouter.param('id', (req, res, next, id) => {
    let envelope = envelopeManager.getEnvelopeById(id);
    if (envelope) {
        req.envelope = envelope;
        next();
    } else {
        res.status(404).send();
    }
});

envelopeRouter.get('/:id', (req, res) => {
    res.send(req.envelope);
});

envelopeRouter.put('/:id', (req, res) => {
    let {name, amount, description} = req.body;
    let id = req.params.id;
    let newEnvelope = envelopeManager.updateEnvelope(id, name, amount, description);
    res.send(newEnvelope);
});

envelopeRouter.delete('/:id', (req, res) => {
    envelopeManager.deleteEnvelope(req.params.id);
    res.status(204).send();
});


module.exports = envelopeRouter;
