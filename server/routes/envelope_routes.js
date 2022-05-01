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

envelopeRouter.get('/:id', (req, res) => {
    let envelope = envelopeManager.getEnvelopeById(req.params.id);
    if (envelope) {
        res.send(envelope);
    } else {
        res.status(404).send();
    }
});


module.exports = envelopeRouter;
