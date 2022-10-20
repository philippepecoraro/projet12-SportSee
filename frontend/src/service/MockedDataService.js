
const MockedDataService = () => {
    const getUser = async (id) => {
        try {
            const response = await fetch('/mock/data.json');
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const allData = await response.json();
                console.log('allData:', allData)
                console.log('allData.user:', allData.user)
                return allData.user;
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const getUserActivity = async (id) => {
        try {
            const response = await fetch('/mock/data.json');
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const allData = await response.json();
                console.log('allData:', allData)
                console.log('allData.activity:', allData.activity)
                return allData.activity;
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const getUserAverageSessions = async (id) => {
        try {
            const response = await fetch('/mock/data.json');
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const allData = await response.json();
                console.log('allData:', allData)
                console.log('allData.average:', allData.average)
                return allData.average;
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const getUserPerformance = async (id) => {
        try {
            const response = await fetch('/mock/data.json');
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const allData = await response.json();
                console.log('allData:', allData)
                console.log('allData.performance:', allData.performance)
                return allData.performance;
            }
        } catch (error) {
            console.log('error', error)
        }
    }
    return { getUser, getUserActivity, getUserAverageSessions, getUserPerformance }


}

export { MockedDataService }