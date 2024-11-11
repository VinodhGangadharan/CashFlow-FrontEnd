import authLoader from "./authLoader"
import jobLoader from "./jobLoader";

const applicationLoader = async ({ params }) => {
    const user = await authLoader();
    const job = await jobLoader({ params });

    return { user, job };
}

export default applicationLoader;