import jobServices from '../services/jobServices';

const applicationsLoader = async () => {
    try {
        const response = await jobServices.getAppliedJobs();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default applicationsLoader;