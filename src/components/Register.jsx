import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { selectEmail, selectName, selectPassword, setEmail, setName, setPassword } from "../features/auth/registerSlice"
import authServices from "../services/authServices";

const Register = () => {

  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCancel = () => {
    window.history.back()
  }

  const handleRegister = (e) => {
    e.preventDefault();

    // handle user registration
    authServices.register({ name, email, password })
      .then(response => {
        alert(response.data.message);

        // clear the form
        dispatch(setName(''));
        dispatch(setEmail(''));
        dispatch(setPassword(''));

        // redirect to login page
        setTimeout(() => {
          navigate('/login');
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
            src="https://img.icons8.com/?size=100&id=vmh2S1LmKGeB&format=png&color=000000"
            className="mx-auto mt-8 h-10 w-auto"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleRegister} className="space-y-6">


            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={name}
                  onChange={(e) => dispatch(setName(e.target.value))}
                />
              </div>
            </div>



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
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>


    /*<div className="container mt-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h1>Register</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name"
                                    value={name}
                                    onChange={(e) => dispatch(setName(e.target.value))}
                                />
                            </div>
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
                            <button type="submit" className="btn btn-primary">Register</button>
                            <button type="button" className="btn btn-secondary mx-5" onClick={handleCancel}>Cancel</button>
                            <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>*/
  )
}

export default Register