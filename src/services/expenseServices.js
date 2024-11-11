import instance from "./instance";

const expenseServices = {
    createExpenses: async (data) => {
        return await instance.post('/expenses', data);
    },
    getExpenses: async (data) => {
        return await instance.get('/expenses', data);
    },
    deleteExpenses: async (id) =>
        {
            return await instance.delete(`/expenses/${id}`);
        },
 
}

export default expenseServices;