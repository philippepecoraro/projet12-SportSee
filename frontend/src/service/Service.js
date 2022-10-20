
export const Service = () => {
    const getUser = async (id) => {
        try {
            const response = await fetch(`/user/${id}`);
            if (!response.ok) {
                throw new Error
                    (response.status)
            } else {
                const allData = await response.json();
                console.log('allData:', allData)
                console.log('allData.data:', allData.data)
                return allData.data;
            }
        } catch (error) {
            console.log('error', error)
        }
    }

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
