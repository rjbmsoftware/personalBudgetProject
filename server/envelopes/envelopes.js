const Envelope = require('./envelope');

const envelopes = [];
let nextId = 0;

function getEnvelopes() {
    return [...envelopes];
}

function addEnvelope(name, amount, description = "") {
    let newEnvelope = new Envelope(nextId, name, amount, description);
    envelopes.push(newEnvelope);
    nextId++;
    return newEnvelope;
}

module.exports = { getEnvelopes, addEnvelope };
