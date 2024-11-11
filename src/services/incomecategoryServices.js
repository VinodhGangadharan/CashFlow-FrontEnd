import instance from "./instance";

const incomecategoryServices = {
  
    getIncomeCategories: async () => {
        return await instance.get('/incomecategories');
    }
   
}

export default incomecategoryServices;