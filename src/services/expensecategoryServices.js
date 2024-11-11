import instance from "./instance";

const expensecategoryServices = {
  
    getExpenseCategories: async () => {
        return await instance.get('/expensecategories');
    }
   
}

export default expensecategoryServices;