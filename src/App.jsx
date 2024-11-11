import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import UserDashboardNav from "./wrappers/UserDashboardNav";
import authLoader from "./loaders/authLoader";
import Logout from "./components/Logout";
import DashboardWrapper from "./wrappers/DashboardWrapper";
import Dashboard from "./components/Dashboard";
import dashboardLoader from "./loaders/dashboardLoader";
import companiesLoader from "./loaders/companiesLoader";
import Companies from "./components/Companies";
import jobsLoader from "./loaders/jobsLoader";
import Jobs from "./components/Jobs";
import Company from "./components/Company";
import companyLoader from "./loaders/companyLoader";
import Application from "./components/Application";
import jobLoader from "./loaders/jobLoader";
import Applications from "./components/Applications.jsx";
import applicationsLoader from "./loaders/applicationsLoader";
import applicationLoader from "./loaders/applicationLoader";

import Incomes from "./components/Incomes.jsx";
import Expenses from "./components/Expenses.jsx";
import RecurringExpenses from "./components/RecurringExpenses.jsx";
import Budgets from "./components/Budgets.jsx";
import Goals from "./components/Goals.jsx";
import Investments from "./components/Investments.jsx";
import UserProfile from "./components/UserProfile.jsx";
import UserNotifications from "./components/UserNotifications.jsx";

import incomecategoryLoader from "./loaders/incomecategoryLoader";
import expensecategoryLoader from "./loaders/expensecategoryLoader";
import goalcategoryLoader from "./loaders/goalcategoryLoader";
import recurringexpensecategoryLoader from "./loaders/recurringexpensecategoryLoader";

import incomecombinedLoader from "./loaders/incomecombinedLoader";
import expensecombinedLoader from "./loaders/expensecombinedLoader.js";
import budgetcombinedLoader from "./loaders/budgetcombinedLoader.js";
import userdashboardLoader from "./loaders/userdashboardLoader";
import goalcombinedLoader from "./loaders/goalcombinedLoader.js";
import recurringexpensecombinedLoader from "./loaders/recurringexpensecombinedLoader.js";
import investmentcombinedLoader from "./loaders/investmentcombinedLoader.js";
import notificationcombinedLoader from "./loaders/notificationcombinedLoader.js";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />,
        loader: authLoader
      }
    ]
  },
  {
    path: "dashboard",
    element: <UserDashboardNav />,
    loader: authLoader,
    children: [
      {
        path: "",
        element: <DashboardWrapper />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: userdashboardLoader
          },

          {
            path: "incomes",
            element: <Incomes />,
           loader: incomecombinedLoader
          },
          {
            path: "expenses",
            element: <Expenses />,
            loader: expensecombinedLoader
          },
          {
            path: "recurringexpenses",
            element: <RecurringExpenses />,
            loader: recurringexpensecombinedLoader
          },
          {
            path: "budgets",
            element: <Budgets />,
           loader: budgetcombinedLoader
          },
          {
            path: "goals",
            element: <Goals />,
            loader: goalcombinedLoader
          },
          {
            path: "investments",
            element: <Investments />,
            loader: investmentcombinedLoader
          },
          {
            path: "userprofile",
            element: <UserProfile />,
           loader: authLoader
          },
          {
            path: "usernotifications",
            element: <UserNotifications />,
            loader: notificationcombinedLoader
           
          },

          {
            path: "companies",
            element: <Companies />,
            loader: companiesLoader
          },
          {
            path: "jobs",
            element: <Jobs />,
            loader: jobsLoader,
            children: [
              {
                path: ":id",
                element: <Application />,
                loader: applicationLoader
              }
            ]
          },
          {
            path: "companies/:id",
            element: <Company />,
            loader: companyLoader
          },
          {
            path: "applications",
            element: <Applications />,
            loader: applicationsLoader
          }
        ]
      }
    ]
  },
  {
    path: "logout",
    element: <Logout />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;