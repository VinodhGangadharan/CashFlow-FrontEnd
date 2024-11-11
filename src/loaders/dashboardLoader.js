import companiesLoader from "./companiesLoader"
import jobsLoader from "./jobsLoader";

const dashboardLoader = async () => {
    const companies = await companiesLoader();
    const jobs = await jobsLoader();

    return { companies, jobs };
}

export default dashboardLoader;