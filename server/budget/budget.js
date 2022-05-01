class Budget {
    static _instance = null;

    constructor(totalAmount) {
        if (Budget._instance != null) {
            return Budget._instance;
        }

        this.totalAmount = totalAmount;
        Budget._instance = this;
    }
}

module.exports = Budget;
