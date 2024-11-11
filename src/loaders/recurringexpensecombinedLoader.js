import recurringexpensecategoryLoader from "./recurringexpensecategoryLoader"
import recurringexpenseLoader from "./recurringexpenseLoader";

const recurringexpensecombinedLoader = async () => {
    const recurringexpensecategory = await recurringexpensecategoryLoader();
    const recurringexpense = await recurringexpenseLoader();

    return { recurringexpensecategory, recurringexpense };
}

export default recurringexpensecombinedLoader;