
/**
 * Class ActivitySessions data modeling.
 */

export default class ActivitySessions {
    /**
     * 
     * @param {object} data - The data value.
     */
    constructor(data) {
        this._day = data.day;
        this._kilogram = data.kilogram;
        this._calories = data.calories;
    }

    /**
     * Get the day value.
     * @return {string} The _day value.
     */
    get day() {
        return this._day;
    }

    /**
     * Get the kilogram value.
     * @return {number} the _kilogram value.
     */
    get kilogram() {
        return this._kilogram;
    }

    /**
     * Get the calories value.
     * @return {number} the _calories value.
     */
    get calories() {
        return this._calories;
    }
}