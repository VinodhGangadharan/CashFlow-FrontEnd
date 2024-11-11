import recurringexpenseServices from '../services/recurringexpenseServices';

const recurringexpenseLoader = async () => {
    try {
        const response = await recurringexpenseServices.getRecurringExpenses();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default recurringexpenseLoader;