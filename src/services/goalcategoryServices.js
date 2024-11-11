import instance from "./instance";

const goalcategoryServices = {
  
    getGoalCategories: async () => {
        return await instance.get('/goalcategories');
    }
   
}

export default goalcategoryServices;