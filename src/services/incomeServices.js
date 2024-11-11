import instance from "./instance";

const incomeServices = {
    createIncomes: async (data) => {
        return await instance.post('/incomes', data);
    },
    getIncomes: async (data) => {
        return await instance.get('/incomes', data);
    },
    deleteIncomes: async (id) =>
    {
        return await instance.delete(`/incomes/${id}`);
    },
 
}

export default incomeServices;