import companyServices from '../services/companyServices';

const companiesLoader = async () => {
    try {
        const response = await companyServices.getCompanies();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default companiesLoader;