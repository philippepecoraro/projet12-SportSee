

/**
 * Function Service - Send custom request using fetch api.
 */
export const Service = () => {
    /**
     * Function getUser - get user data.
     * @param {string} id - The id value.  
     * @return {promise}   
    */

    const getUser = async (id) => {
        try {
            const response = await fetch(`/user/${id}`);
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const allData = await response.json();
                return allData.data;
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    /**
     * Function getUserActivity - get user activity.
     * @param {string} id - The id value.  
     * @return {promise}    
     */
    const getUserActivity = async (id) => {
        try {
            const response = await fetch(`/user/${id}/activity`);
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const allDataActivity = await response.json();
                return allDataActivity.data;
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    /**
     * Function getAverageSessions - get data of average sessions.
     * @param {string} id - The id value.    
     * @return {promise} 
     */
    const getUserAverageSessions = async (id) => {
        try {
            const response = await fetch(`/user/${id}/average-sessions`);
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const allDataSessions = await response.json();
                return allDataSessions.data;
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    /**
     * Function getUserPerformance - get user performance. 
     * @param {string} id - The id value.   
     * @return {promise}   
     */
    const getUserPerformance = async (id) => {
        try {
            const response = await fetch(`/user/${id}/performance`);
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const allDataPerformance = await response.json();
                return allDataPerformance.data;
            }
        }

        catch (error) {
            console.log('error', error)
        }
    }
    return { getUser, getUserActivity, getUserAverageSessions, getUserPerformance }
}
