
/**
 * Class SessionsSessions data modeling.
 */

export default class SessionsSessions {
    /**
     * 
     * @param {object} data - The data value. 
     */
    constructor(data) {
        this._day = data.day;
        this._sessionLength = data.sessionLength;
    }

    /**
     * Get the day value.
     * @return {number} The _day value.
     */
    get day() {
        return this._day;
    }

    /**
     * Get the sessionLength value.
     * @return {number} The _sessionLength value.
     */
    get sessionLength() {
        return this._sessionLength;
    }
}