import instance from "./instance";

const recurringexpenseServices = {
    createRecurringExpenses: async (data) => {
        return await instance.post('/recurringexpenses', data);
    },
    getRecurringExpenses: async (data) => {
        return await instance.get('/recurringexpenses', data);
    },
    deleteRecurringExpenses: async (id) =>
        {
            return await instance.delete(`/recurringexpenses/${id}`);
        },
 
}

export default recurringexpenseServices;