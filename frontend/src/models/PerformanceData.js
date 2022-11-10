/**
 * Class PerformanceData
 */

export default class PerformanceData {
    constructor(performance) {
        const { userId, kind, data } = performance;
        console.log('data:', data)
        console.log('kind:', kind)
        this._userId = userId;
        this._kind = kind;
        this._data = data;
    }
}