/**
 * Class SessionData 
 */

export default class SessionsData {
    constructor(data) {
        console.log('data:', data)
        const { userId, sessions } = data;
        this._userId = userId;
        this._sessions = sessions;
    }
}