import expensecategoryServices from '../services/expensecategoryServices';

const expensecategoryLoader = async () => {
    try {
        const response = await expensecategoryServices.getExpenseCategories();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default expensecategoryLoader;