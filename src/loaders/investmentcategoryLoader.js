import investmentcategoryServices from '../services/investmentcategoryServices';

const investmentcategoryLoader = async () => {
    try {
        const response = await investmentcategoryServices.getInvestmentCategories();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default investmentcategoryLoader;