import recurringexpensecategoryServices from '../services/recurringexpensecategoryServices';

const recurringexpensecategoryLoader = async () => {
    try {
        const response = await recurringexpensecategoryServices.getRecurringExpenseCategories();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default recurringexpensecategoryLoader;