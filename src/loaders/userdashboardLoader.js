import incomeLoader from "./incomeLoader"
import expenseLoader from "./expenseLoader";
import investmentLoader from "./investmentLoader";
import goalLoader from "./goalLoader";
import authLoader from "./authLoader";

const userdashboardLoader = async () => {
    const income = await incomeLoader();
    const expense = await expenseLoader();
    const investment = await investmentLoader();
    const goal = await goalLoader();
    const user = await authLoader();

    return { income, expense,investment,goal,user };
}

export default userdashboardLoader;