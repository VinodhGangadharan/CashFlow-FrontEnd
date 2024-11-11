import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PiUserCircleGearFill } from "react-icons/pi";
import { selectName, selectEmail, selectCurrency, setName, setEmail, setCurrency } from "../features/auth/userSlice";
//import budgetcombinedLoader from "../loaders/budgetcombinedLoader";
//import budgetServices from "../services/budgetServices";
//import budgetcombinedLoader from "../loaders/budgetcombinedLoader";
import authLoader from "../loaders/authLoader";
//import { useEffect } from "react";
import authServices from "../services/authServices";
import userServices from "../services/userServices";


const UserProfile = () => {


  const user = useLoaderData();



  // console.log(user);
  // const {expensecategory,budget} = useLoaderData();
  //console.log(budget);
  // selectName="vinodh";

  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const currency = useSelector(selectCurrency);

  /*const name = user.name;
  const email = user.email;
  const currency = useSelector(user.currency);*/


  /*const category = useSelector(selectCategory);
  const limit = useSelector(selectLimit);*/




  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  //console.log(user);
  // console.log(user._id);
  //console.log(user.name);
  //console.log(user.email);
  // console.log(user.role);
  //console.log(user.currency);

  const dispatch = useDispatch();
  const navigate = useNavigate();




  const handleUser = (e) => {
    e.preventDefault();
    console.log({ currency });

    if (currency !== "") {

      userServices.updateUser({ currency })
        .then(response => {
          alert(response.data.message);
          //dispatch(setCurrency(''));             
        })
        .catch(error => {
          alert(error.response.data.message);
        });
    }
    else {
      alert('Select a Currency');
    }
  }

  return (
    <div className="container mx-auto">

      <div className="grid grid-cols-1 gap-2">

        <div >

          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <PiUserCircleGearFill className="mx-auto mt-8 h-10 w-auto" size={48} style={{ color: "blue" }} />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                User Details
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleUser} className="space-y-6">




                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      User Name
                    </label>
                    {/*<div className="text-sm">
                          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                          </a>
                        </div>*/}
                  </div>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      disabled
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={user.name}
                      onChange={(e) => dispatch(setName(e.target.value))} style={{ backgroundColor: "lightgrey" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    {/*<div className="text-sm">
                          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                          </a>
                        </div>*/}
                  </div>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      disabled
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={user.email}
                      onChange={(e) => dispatch(setEmail(e.target.value))} style={{ backgroundColor: "lightgrey" }}
                    />
                  </div>
                </div>




                <div>
                  <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                    Currency
                  </label>
                  <div className="mt-2">

                    <select value={currency}
                      onChange={(e) => dispatch(setCurrency(e.target.value))} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option value="">Select Currency</option>
                      <option value="INR">INR</option>
                      <option value="USD">USD</option>
                      <option value="GBP">GBP</option>
                      <option value="EUR">EUR</option>
                      {/* Mapping through each fruit object in our fruits array
                        and returning an option element with the appropriate attributes / values.
                       */}
                      {/*{user.currency.map((users) => <option key={users._id} value={users.currency}>{users.currency}</option>)}*/}
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
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Update User Details
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



      </div>
    </div>

  )
}

export default UserProfile;