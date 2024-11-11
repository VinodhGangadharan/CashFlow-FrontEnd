import expensecategoryLoader from "./expensecategoryLoader"
import expenseLoader from "./expenseLoader";
import recurringexpensecategoryLoader from "./recurringexpensecategoryLoader";
import recurringexpenseLoader from "./recurringexpenseLoader";
//import goalcategoryLoader from "./goalcategoryLoader"
import goalLoader from "./goalLoader";
import budgetLoader from "./budgetLoader";

const expensecombinedLoader = async () => {
    const expensecategory = await expensecategoryLoader();
    const expense = await expenseLoader();
    const recurringexpensecategory = await recurringexpensecategoryLoader();
    const recurringexpense = await recurringexpenseLoader();
    //const goalcategory = await goalcategoryLoader();
    const goal = await goalLoader();
    const budget = await budgetLoader();

    return { expensecategory, expense, recurringexpensecategory,recurringexpense,budget,goal};
}

export default expensecombinedLoader;