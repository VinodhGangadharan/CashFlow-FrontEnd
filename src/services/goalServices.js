import instance from "./instance";

const goalServices = {
    createGoals: async (data) => {
        return await instance.post('/goals', data);
    },
    getGoals: async (data) => {
        return await instance.get('/goals', data);
    },
    deleteGoals: async (id) =>
        {
            return await instance.delete(`/goals/${id}`);
        },
 
}

export default goalServices;