import goalcategoryServices from '../services/goalcategoryServices';

const goalcategoryLoader = async () => {
    try {
        const response = await goalcategoryServices.getGoalCategories();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default goalcategoryLoader;