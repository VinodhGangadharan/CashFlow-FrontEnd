import instance from "./instance";

const budgetServices = {
    createBudgets: async (data) => {
        return await instance.post('/budgets', data);
    },
    getBudgets: async (data) => {
        return await instance.get('/budgets', data);
    },
    deleteBudgets: async (id) =>
        {
            return await instance.delete(`/budgets/${id}`);
        },
 
}

export default budgetServices;