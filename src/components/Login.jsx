import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { selectEmail, selectPassword, setEmail, setPassword } from "../features/auth/loginSlice";
import authServices from "../services/authServices";
import { useEffect } from "react";

const Login = () => {

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useLoaderData();

 /* useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user]);*/

  const handleCancel = () => {
    window.history.back();
  }

  const handleLogin = (e) => {
    e.preventDefault();

    // handle user login
    authServices.login({ email, password })
      .then(response => {
        alert(response.data.message);

        // clear the form
        dispatch(setEmail(''));
        dispatch(setPassword(''));

        // redirect to home page
        setTimeout(() => {
          navigate('/dashboard');
        }, 500);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  }

  return (

    <div className="container mx-auto">

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://img.icons8.com/?size=100&id=48303&format=png&color=000000"
            className="mx-auto mt-8 h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/*<div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>*/}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member yet?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>


    /*  <div className="container mt-5">
          <div className="row">
              <div className="col-md-6 offset-md-3">
                  <div className="card">
                      <div className="card-header">
                          <h1>Login</h1>
                      </div>
                      <div className="card-body">
                          <form onSubmit={handleLogin}>
                              <div className="mb-3">
                                  <label htmlFor="email" className="form-label">Email</label>
                                  <input type="email" className="form-control" id="email"
                                      value={email}
                                      onChange={(e) => dispatch(setEmail(e.target.value))}
                                  />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="password" className="form-label">Password</label>
                                  <input type="password" className="form-control" id="password"
                                      value={password}
                                      onChange={(e) => dispatch(setPassword(e.target.value))}
                                  />
                              </div>
                              <button type="submit" className="btn btn-primary">Login</button>
                              <button type="button" className="btn btn-secondary mx-5" onClick={handleCancel}>Cancel</button>
                              <p className="mt-3">Don't have an account? <Link to="/register">Register</Link></p>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>*/
  )
}

export default Login