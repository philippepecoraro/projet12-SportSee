import SessionsSessions from "./SessionsSessions";

/**
 * Class SessionData data modeling.
 */

export default class SessionsData {
    /**
     * 
     * @param {object} data - The data value.
     */
    constructor(data) {
        this._userId = data.userId;
        this._sessions = data.sessions.map((item) =>
            new SessionsSessions(item))
    }

    /**
     * Get the userId value.
     * @return {number} The _userId value.
     */
    get userId() {
        return this._userId;
    }

    /**
     * Get the sessions value.
     * @return {array} The _sessions value.
     */
    get sessions() {
        return this._sessions;
    }
}