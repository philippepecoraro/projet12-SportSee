/**
 * Class UserData data modeling.
 */

export default class UserData {
    /**
     * 
     * @param {object} data - The data value.
     */
    constructor(data) {
        this._id = data.id;
        this._firstName = data.userInfos.firstName;
        this._lastName = data.userInfos.lastName;
        this._age = data.userInfos.age;
        this._score = data.score;
        this._todayScore = data.todayScore;
        this._calorieCount = data.keyData.calorieCount;
        this._proteinCount = data.keyData.proteinCount;
        this._carbohydrateCount = data.keyData.carbohydrateCount;
        this._lipidCount = data.keyData.lipidCount;
    }

    /**
     * Get the id value.
     * @return {number} The _id value.
     */
    get id() {
        return this._id;
    }

    /**
     * Get the firstName value.
     * @return {string} The _firstName value.
     */
    get firstName() {
        return this._firstName;
    }

    /**
     * Get the lastName value.
     * @return {string} The _lastName value.
     */
    get lastName() {
        return this._lastName;
    }

    /**
     * Get the age value.
     * @return {number} The _age value.
     */
    get age() {
        return this._age;
    }

    /**
     * Get the dataScore value.
     * @return {number} The dataScore value.
     */
    get score() {
        const dataScore = this._score * 100;
        return dataScore;
    }

    /**
     * Get the dataTodayScore value.
     * @return {number} The dataTodayScore value.
     */
    get todayScore() {
        const dataTodayScore = this._todayScore * 100;
        return dataTodayScore;
    }

    /**
     * Get the dataCaloriesCount value.
     * @return {number} The dataCaloriesCount value.
     */
    get calorieCount() {
        const dataCaloriesCount = this._calorieCount.toLocaleString('en-US')
            + 'kCal';
        return dataCaloriesCount;
    }

    /**
     * Get the dataProteinCount value.
     * @return {number} The dataProteinCount value.
     */
    get proteinCount() {
        const dataProteinCount = this._proteinCount + 'g';
        return dataProteinCount;
    }

    /**
     * Get the dataCarbohydrateCount value.
     * @return {number} The dataCarbohydrateCount value.
     */
    get carbohydrateCount() {
        const dataCarbohydrateCount = this._carbohydrateCount + 'g';
        return dataCarbohydrateCount;
    }

    /**
     * Get the dataLipidCount value.
     * @return {number} The dataLipidCount value.
     */
    get lipidCount() {
        const dataLipidCount = this._lipidCount + 'g';
        return dataLipidCount;
    }

}
