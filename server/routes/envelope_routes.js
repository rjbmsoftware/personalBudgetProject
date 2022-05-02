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

envelopeRouter.post('/transfer/:fromId/:toId', (req, res) => {
    // get both envelopes
    const fromEnvelope = envelopeManager.getEnvelopeById(req.params.fromId);
    const toEnvelope = envelopeManager.getEnvelopeById(req.params.toId);
    
    // check transfer is possible
    const envelopesExist = fromEnvelope && toEnvelope;
    if (!envelopesExist) {
        return res.status(404).send();
    }

    const transferAmount = req.body.amount;
    const validTransfer = transferAmount >= 0 && fromEnvelope.amount >= transferAmount;
    if (!validTransfer) {
        return res.status(400).send(`Cannot transfer ${transferAmount}`);
    }

    fromEnvelope.amount -= transferAmount;
    toEnvelope.amount += transferAmount;
    res.send();
});


module.exports = envelopeRouter;
