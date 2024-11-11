import incomecategoryLoader from "./incomecategoryLoader"
import incomeLoader from "./incomeLoader";

const incomecombinedLoader = async () => {
    const incomecategory = await incomecategoryLoader();
    const income = await incomeLoader();

    return { incomecategory, income };
}

export default incomecombinedLoader;