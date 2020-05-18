class Beverage {
    constructor(description = 'Unknown beverage') {
        this._description = description;
    }

    getDescription() {
        return this._description;
    }

    cost() {
        throw new Error("This method must be implemented");
    }
}

export default Beverage;