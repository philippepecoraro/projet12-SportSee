import data from '../mocks/data.json'


/**
 * Function MockedDataService - 
 */
const MockedDataService = () => {
    /**
     * Function getUser - get user data.    
     * @param {string} id - The id value.
     */
    const getUser = (id) => {
        const dataFilter = data.user.filter(item => item.id.toString() === id)
        if (dataFilter.length < 1) {
            return dataFilter
        }
        return data.user
    }

    /**
     * Function getUserActivity - get user activity. 
     * @param {string} id - The id value.    
    */
    const getUserActivity = (id) => {
        const dataFilter = data.user.filter(item => item.id.toString() === id)
        if (dataFilter.length < 1) {
            return dataFilter
        }
        return data.activity
    }

    /**
     * Function getAverageSessions - get data of average sessions.  
     *  @param {string} id - The id value.  
     */
    const getUserAverageSessions = (id) => {
        const dataFilter = data.user.filter(item => item.id.toString() === id)
        if (dataFilter.length < 1) {
            return dataFilter
        }
        return data.average
    }

    /**
     * Function getUserPerformance - get user performance.   
     *  @param {string} id - The id value. 
     */
    const getUserPerformance = (id) => {
        const dataFilter = data.user.filter(item => item.id.toString() === id)
        if (dataFilter.length < 1) {
            return dataFilter
        }
        return data.performance
    }

    return { getUser, getUserActivity, getUserAverageSessions, getUserPerformance }
}

export { MockedDataService }