import expensecategoryLoader from "./expensecategoryLoader"
import budgetLoader from "./budgetLoader";
import authLoader from "./authLoader"

const budgetcombinedLoader = async () => {
    const user = await authLoader();
    const expensecategory = await expensecategoryLoader();
    const budget = await budgetLoader();
   

    return { user,expensecategory, budget};
}

export default budgetcombinedLoader;