import instance from "./instance";

const recurringexpensecategoryServices = {
  
    getRecurringExpenseCategories: async () => {
        return await instance.get('/recurringexpensecategories');
    }
   
}

export default recurringexpensecategoryServices;