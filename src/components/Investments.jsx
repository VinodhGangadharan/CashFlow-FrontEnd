import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { selectEmail, selectPassword, setEmail, setPassword } from "../features/auth/loginSlice";
import { selectCategory, selectPurchasePrice, selectCurrentValue, selectPerformance, selectDescription, setCategory, setPurchasePrice, setCurrentValue, setPerformance, setDescription } from "../features/investment/investmentSlice";
import authServices from "../services/authServices";
import { GiCash } from "react-icons/gi";
//import investmentcategoryLoader from "../loaders/investmentcategoryLoader";
import investmentcombinedLoader from "../loaders/investmentcombinedLoader.js";
import investmentServices from "../services/investmentServices";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect } from "react";

const Investments = () => {

  const { investmentcategory, investment } = useLoaderData();
  console.log(investment);

  const category = useSelector(selectCategory);
  const purchaseprice = useSelector(selectPurchasePrice);
  const currentvalue = useSelector(selectCurrentValue);
  const performance = useSelector(selectPerformance);
  const description = useSelector(selectDescription);



  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const user = useLoaderData();

  // useEffect(() => {
  //  if (user) {
  //     navigate('/dashboard');
  // }
  // }, [user]);

  // const handleCancel = () => {
  //    window.history.back();
  //}


  const handleInvestment = (e) => {
    // e.preventDefault();

    // handle user registration
    investmentServices.createInvestments({ category, purchaseprice, currentvalue, performance, description })
      .then(response => {
        alert(response.data.message);

        // clear the form
        dispatch(setCategory(''));
        dispatch(setPurchasePrice(''));
        dispatch(setCurrentValue(''));
        dispatch(setPerformance(''));
        dispatch(setDescription(''));

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
    { Header: 'PurchasePrice', accessor: 'purchaseprice' },
    { Header: 'CurrentValue', accessor: 'currentvalue' },
    { Header: 'Performance', accessor: 'Performance' },
    { Header: 'Description', accessor: 'description' },
    { Header: 'Action', accessor: 'action' },
  ];

  const removeData = (id) => {
    //console.log(id);

    investmentServices.deleteInvestments(id)
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
              < GiCash className="mx-auto mt-8 h-10 w-auto" size={48} style={{ color: "blue" }} />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Add Investment
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleInvestment} className="space-y-6">

                <div>
                  <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                    Category
                  </label>
                  <div className="mt-2">

                    <select value={category}
                      onChange={(e) => dispatch(setCategory(e.target.value))} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option value="">Select Investment</option>
                      {/* Mapping through each fruit object in our fruits array
                and returning an option element with the appropriate attributes / values.
               */}
                      {investmentcategory.map((investment) => <option key={investment._id} value={investment.category}>{investment.category}</option>)}
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
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Purchase Price
                  </label>
                  <div className="mt-2">
                    <input
                      id="purchaseprice"
                      name="purchaseprice"
                      type="number"
                      required
                      autoComplete="purchaseprice"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={purchaseprice}
                      onChange={(e) => dispatch(setPurchasePrice(e.target.value))}
                    />
                  </div>
                </div>


                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Current Value
                  </label>
                  <div className="mt-2">
                    <input
                      id="currentvalue"
                      name="currentvalue"
                      type="number"
                      required
                      autoComplete="currentvalue"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={currentvalue}
                      onChange={(e) => dispatch(setCurrentValue(e.target.value))}
                    />
                  </div>
                </div>


                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Performance (%)
                  </label>
                  <div className="mt-2">
                    <input
                      id="performance"
                      name="performance"
                      type="number"
                      required
                      autoComplete="performance"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={performance}
                      onChange={(e) => dispatch(setPerformance(e.target.value))}
                    />
                  </div>
                </div>




                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Description
                    </label>
                    {/*<div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                          Forgot password?
                        </a>
                      </div>*/}
                  </div>
                  <div className="mt-2">
                    <input
                      id="description"
                      name="description"
                      type="text"
                      required
                      autoComplete="description"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={description}
                      onChange={(e) => dispatch(setDescription(e.target.value))}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Investments
                  </button>
                </div>
              </form>

              {/* <p className="mt-10 text-center text-sm text-gray-500">
                Don't have an account?{' '}
                  <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Register
                  </Link>
                </p>*/}
            </div>
          </div>
        </div>


        {/*second part*/}
        <div className="container mt-16 mx-auto p-4 border-dashed border-l-4 border-green-300">
          <h5 className="text-xl font-bold mb-4 flex justify-center items-center">Investments</h5>
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

                {investment.map((row) => (
                  //const formatLocalDate = date.toLocaleDateString();
                  <tr className="even:bg-gray-50" key={row._id} >
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.category}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.purchaseprice}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.currentvalue}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.performance}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.description}</td>
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
        {/* second part end*/}

      </div>

    </div>
  )
}

export default Investments;