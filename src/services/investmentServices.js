import instance from "./instance";

const investmentServices = {
    createInvestments: async (data) => {
        return await instance.post('/investments', data);
    },
    getInvestments: async (data) => {
        return await instance.get('/investments', data);
    },
    deleteInvestments: async (id) =>
        {
            return await instance.delete(`/investments/${id}`);
        },
 
}

export default investmentServices;