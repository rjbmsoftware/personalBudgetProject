const Envelope = require('./envelope');

const envelopes = [];
let nextId = 0;

function getEnvelopes() {
    return [...envelopes];
}

/**
 * Returns envelope with matching id if found otherwise undefined
 * @param number id 
 */
function getEnvelopeById(id) {
    return envelopes.find(e => e.id == id);
}

function addEnvelope(name, amount, description = "") {
    let newEnvelope = new Envelope(nextId, name, amount, description);
    envelopes.push(newEnvelope);
    nextId++;
    return newEnvelope;
}

module.exports = { getEnvelopes, addEnvelope, getEnvelopeById };
