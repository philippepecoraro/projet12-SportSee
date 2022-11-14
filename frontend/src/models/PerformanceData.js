import PerformanceDataData from "./PerformanceDataData";

/**
 * Class PerformanceData data modeling.
 */

export default class PerformanceData {
    /**
     * 
     * @param {object} performance - The data value.   
     */
    constructor(performance) {
        this._userId = performance.userId;
        this._kind = performance.kind;
        this._data = performance.data.map((item) =>
            new PerformanceDataData(item));
    }

    /**
     * Get the userId value.
     *  @return {number} The _userId value.
     */
    get userId() {
        return this._userId;
    }

    /**
     * Get the kind value.
     * @return {object} The _kind value.
     */
    get kind() {
        return this._kind;
    }

    /**
     * Get the data value.
     * @return {array} The _data value.
     */
    get data() {
        return this._data;
    }
}