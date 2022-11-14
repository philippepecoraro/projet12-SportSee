
/**
 * Class PerformanceDataData data modeling.
 */

export default class PerformanceDataData {
    /**
     * 
     * @param {object} data - The data value.
     */
    constructor(data) {
        this._value = data.value;
        this._kind = data.kind;
    }

    /**
     * Get the value value.
     * @return {number} The _value value.
     */
    get value() {
        return this._value;
    }

    /**
     * Get the kind value.
     * @return {number} The _kind value.
     */
    get kind() {
        return this._kind;
    }
}