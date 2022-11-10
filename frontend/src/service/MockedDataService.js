import data from '../mocks/data.json'


const MockedDataService = () => {
    const getUser = () => {
        return data.user
    }

    const getUserActivity = () => {
        return data.activity
    }

    const getUserAverageSessions = () => {
        return data.average
    }

    const getUserPerformance = () => {
        return data.performance
    }

    return { getUser, getUserActivity, getUserAverageSessions, getUserPerformance }
}

export { MockedDataService }