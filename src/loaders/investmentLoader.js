import investmentServices from '../services/investmentServices';

const investmentLoader = async () => {
    try {
        const response = await investmentServices.getInvestments();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default investmentLoader;