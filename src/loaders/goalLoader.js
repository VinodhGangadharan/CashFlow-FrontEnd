import goalServices from '../services/goalServices';

const goalLoader = async () => {
    try {
        const response = await goalServices.getGoals();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default goalLoader;