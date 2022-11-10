/**
 * Class ActivityData
 */

export default class ActivityData {
    constructor(data) {
        const { userId, sessions } = data;
        console.log('sessions:', sessions)
        console.log('data:', sessions.day)
        console.log(data.userId)
        this._userId = userId;
        this._sessions = sessions;
    }
}