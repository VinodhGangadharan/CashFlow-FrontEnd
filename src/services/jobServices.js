import instance from "./instance";

const jobServices = {
    getJobs: async () => {
        return await instance.get('/jobs');
    },
    getJob: async (id) => {
        return await instance.get(`/jobs/${id}`);
    },
    applyJob: async (id) => {
        return await instance.post(`/jobs/${id}/apply`);
    },
    getAppliedJobs: async () => {
        return await instance.get('/jobs/applied');
    }
}

export default jobServices;