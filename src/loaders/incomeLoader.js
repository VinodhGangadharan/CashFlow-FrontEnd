import incomeServices from '../services/incomeServices';

const incomeLoader = async () => {
    try {
        const response = await incomeServices.getIncomes();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default incomeLoader;