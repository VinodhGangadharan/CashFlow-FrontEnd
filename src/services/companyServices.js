import instance from "./instance";

const companyServices = {
    getCompanies: async () => {
        return await instance.get('/companies');
    },
    getCompany: async (id) => {
        return await instance.get(`/companies/${id}`);
    },
}

export default companyServices;