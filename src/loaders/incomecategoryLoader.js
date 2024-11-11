import incomecategoryServices from '../services/incomecategoryServices';

const incomecategoryLoader = async () => {
    try {
        const response = await incomecategoryServices.getIncomeCategories();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default incomecategoryLoader;