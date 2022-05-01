const express = require('express');
const envelopeRouter = express.Router();
const envelopeManager = require('../envelopes/envelopes');

envelopeRouter.post('/', (req, res) => {
    let {name, amount, description} = req.body;
    const newEnvelope = envelopeManager.addEnvelope(name, amount, description);
    res.status(201).send(newEnvelope);
});


module.exports = envelopeRouter;
