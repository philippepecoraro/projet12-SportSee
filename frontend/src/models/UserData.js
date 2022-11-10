/**
 * Class UserData
 */

export default class UserData {
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

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get score() {
        const dataScore = this._score * 100;
        return dataScore;
    }

    get todayScore() {
        const dataTodayScore = this._todayScore * 100;
        return dataTodayScore;
    }

    get calorieCount() {
        const dataCaloriesCount = this._calorieCount.toLocaleString('en-US')
            + 'kCal';
        return dataCaloriesCount;
    }

    get proteinCount() {
        const dataProteinCount = this._proteinCount + 'g';
        return dataProteinCount;
    }

    get carbohydrateCount() {
        const dataCarbohydrateCount = this._carbohydrateCount + 'g';
        return dataCarbohydrateCount;
    }

    get lipidCount() {
        const dataLipidCount = this._lipidCount + 'g';
        return dataLipidCount;
    }

}
