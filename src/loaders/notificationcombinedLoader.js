import recurringexpenseLoader from "./recurringexpenseLoader";
import goalLoader from "./goalLoader";
import investmentLoader from "./investmentLoader";
import authLoader from "./authLoader";
import incomeLoader from "./incomeLoader";
import expenseLoader from "./expenseLoader";

const notificationcombinedLoader = async () => {

    const recurringexpense = await recurringexpenseLoader();
    const goal = await goalLoader();
    const investment = await investmentLoader();
    const user = await authLoader();
    const income = await incomeLoader();
    const expense = await expenseLoader();

    return {  recurringexpense, goal, investment,user,income,expense };
}

export default notificationcombinedLoader;