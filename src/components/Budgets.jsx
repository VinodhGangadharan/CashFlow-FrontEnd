import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { selectEmail, selectPassword, setEmail, setPassword } from "../features/auth/loginSlice";
import { selectCategory, selectLimit, setCategory, setLimit } from "../features/budget/budgetSlice";
import authServices from "../services/authServices";
import { TbPigMoney } from "react-icons/tb";
import { useEffect } from "react";
//import expensecategoryLoader from "../loaders/expensecategoryLoader";
import budgetcombinedLoader from "../loaders/budgetcombinedLoader";
import budgetServices from "../services/budgetServices";
import { RiDeleteBin6Line } from "react-icons/ri";

const Budgets = () => {

  const { user, expensecategory, budget } = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);
  //console.log(budget);

  const category = useSelector(selectCategory);
  const limit = useSelector(selectLimit);


  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  //const navigate = useNavigate();

  //const user = useLoaderData();



  // const handleCancel = () => {
  //    window.history.back();
  // }

  const handleBudget = (e) => {
    //e.preventDefault();

    // handle user registration
    budgetServices.createBudgets({ category, limit })
      .then(response => {
        alert(response.data.message);

        // clear the form
        dispatch(setCategory(''));
        dispatch(setLimit(''));


        // redirect to login page
        // setTimeout(() => {
        // navigate('/login');
        // }, 500);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  }

  const columns = [
    { Header: 'Category', accessor: 'category' },
    { Header: 'Limit', accessor: 'limit' },
    { Header: 'Action', accessor: 'action' },
  ];

  const removeData = (id) => {
    //console.log(id);

    budgetServices.deleteBudgets(id)
      .then(response => {

        alert(response.data.message);

      })
      .catch(error => {
        alert(error.response.data.message);
      });
    window.location.reload();
  }


  return (
    <div className="container mx-auto">

      <div className="grid grid-cols-2 gap-2">

        <div >

          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              < TbPigMoney className="mx-auto mt-8 h-10 w-auto" size={48} style={{ color: "blue" }} />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Set Budget
              </h2>
              <h2 className="mt-5 text-center text-l font-bold leading-9 tracking-tight text-gray-900">
                Monthly
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleBudget} className="space-y-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                    Category
                  </label>
                  <div className="mt-2">

                    <select value={category}
                      onChange={(e) => dispatch(setCategory(e.target.value))} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option value="">Select Budget</option>
                      {/* Mapping through each fruit object in our fruits array
                and returning an option element with the appropriate attributes / values.
               */}
                      {expensecategory.map((expense) => <option key={expense._id} value={expense.category}>{expense.category}</option>)}
                    </select>

                    {/* <input
                        id="income"
                        name="income"
                        type="number"
                        required
                        autoComplete="income"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={email}
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                      />*/}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Limit
                    </label>
                    {/*<div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>*/}
                  </div>
                  <div className="mt-2">
                    <input
                      id="limit"
                      name="limit"
                      type="number"
                      required
                      autoComplete="limit"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={limit}
                      onChange={(e) => dispatch(setLimit(e.target.value))}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Budget

                  </button>
                </div>
              </form>

              {/*<p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Register
            </Link>
          </p>*/}
            </div>
          </div>
        </div>
        <div className="container mt-16 mx-auto p-4 border-dashed border-l-4 border-green-300">
          <h5 className="text-xl font-bold mb-4 flex justify-center items-center">Budgets</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.accessor}
                      className="py-2 px-4 border-b border-gray-200 text-left text-gray-600"
                    >
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>

                {budget.map((row) => (
                  //const formatLocalDate = date.toLocaleDateString();
                  <tr className="even:bg-gray-50" key={row._id} >
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.category}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.limit}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800"><button type="button" onClick={() => removeData(row._id)}><RiDeleteBin6Line style={{ color: "red" }} /></button></td>

                  </tr>
                ))}

                {/*{income.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="py-2 px-4 border-b border-gray-200 text-gray-800"
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}*/}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Budgets;