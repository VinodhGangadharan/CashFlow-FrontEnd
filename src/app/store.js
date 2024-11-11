import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice";
import loginReducer from "../features/auth/loginSlice";
import incomeReducer from "../features/income/incomeSlice";
import expenseReducer from "../features/expense/expenseSlice";
import budgetReducer from "../features/budget/budgetSlice";
import goalReducer from "../features/goal/goalSlice";
import recurringexpenseReducer from "../features/recurringexpense/recurringexpenseSlice";
import investmentReducer from "../features/investment/investmentSlice";
import userReducer from "../features/auth/userSlice";

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        income: incomeReducer,
        expense: expenseReducer,
        budget: budgetReducer,
        goal: goalReducer,
        recurringexpense: recurringexpenseReducer,
        investment: investmentReducer,
        user: userReducer,
    }
});

export default store;