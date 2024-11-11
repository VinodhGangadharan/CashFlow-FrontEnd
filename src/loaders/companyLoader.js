import companyServices from '../services/companyServices';

const companyLoader = async ({ params }) => {
    try {
        const response = await companyServices.getCompany(params.id);

        return response.data;
    } catch (error) {
        return null;
    }
}

export default companyLoader;