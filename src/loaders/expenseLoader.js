import expenseServices from '../services/expenseServices';

const expenseLoader = async () => {
    try {
        const response = await expenseServices.getExpenses();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default expenseLoader;