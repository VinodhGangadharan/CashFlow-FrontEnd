import instance from "./instance";

const investmentcategoryServices = {
  
    getInvestmentCategories: async () => {
        return await instance.get('/investmentcategories');
    }
   
}

export default investmentcategoryServices;