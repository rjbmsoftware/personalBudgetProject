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

/**
 * Updates evelope and returns it if id is valid otherwise undefined 
 * @param number id 
 * @param string name 
 * @param string amount 
 * @param string description 
 * @returns 
 */
function updateEnvelope(id, name, amount, description) {
    let envelope = getEnvelopeById(id);
    if (envelope) {
        envelope.name = name;
        envelope.amount = amount;
        envelope.description = description;
    } 

    return envelope;
}

function deleteEnvelope(id) { 
    const index = envelopes.findIndex(e => e.id == id);
    if (index === -1) {
        return false;
    }

    envelopes.splice(index, 1);
    return true;
}

module.exports = { getEnvelopes, addEnvelope, getEnvelopeById, updateEnvelope, deleteEnvelope };
