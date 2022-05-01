class Envelope {
    constructor(id, name, amount, description = "") {
        this._id = id;
        this.name = name;
        this.amount = amount;
        this.description = description;
    }

    get id() {
        return this._id;
    }
}

module.exports = Envelope;
