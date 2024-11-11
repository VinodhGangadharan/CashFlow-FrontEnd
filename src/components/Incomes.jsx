import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import { LiaMoneyBillSolid } from "react-icons/lia";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { selectEmail, selectPassword, setEmail, setPassword } from "../features/auth/loginSlice";
import { selectCategory, selectAmount, selectDate, setCategory, setAmount, setDate } from "../features/income/incomeSlice";
//import incomecategoryLoader from "../loaders/incomecategoryLoader";
import incomecombinedLoader from "../loaders/incomecombinedLoader";
import incomeServices from "../services/incomeServices";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import { CSVLink } from "react-csv";
import { FaFileCsv } from "react-icons/fa6";

//import authServices from "../services/authServices";
//import { useEffect } from "react";

//second part

//second part



const Incomes = () => {

  /*useEffect(() => {
    if (localStorage.getItem('token'))
       {
      const token = localStorage.getItem('token');
      console.log(token);
      if (isTokenExpired(token)) 
        {
          navigate('/login');      
      } 
    } 
    else {
      
    }
  }, []);*/




  // const incomecategory= useLoaderData();
  // console.log(incomecategory);


  const { incomecategory, income } = useLoaderData();

  const category = useSelector(selectCategory);
  const amount = useSelector(selectAmount);
  const date = useSelector(selectDate);

  console.log(income);



  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [inc, setInc] = useState([]);
  //const [, updateState] = useState();


  //useEffect(() => {
  //fetch("/some-data.json")
  //.then((response) => response.json())
  //.then((data) => {
  // setInc(income);
  //  })
  //},[income])

  //console.log(inc);

  /*const user = useLoaderData();*/

  /* useEffect(() => {
       if (user) {
           navigate('/dashboard');
       }
   }, [user]);*/

  /*const handleCancel = () => {
      window.history.back();
  }*/
  //let [category, setCategory] = useState("Select")

  //let handleCategoryChange = (e) => {
  //  setCategory(e.target.value)
  //}

  const handleIncome = (e) => {
    // e.preventDefault();

    // handle user registration
    incomeServices.createIncomes({ category, amount, date })
      .then(response => {
        alert(response.data.message);

        // clear the form
        dispatch(setCategory(''));
        dispatch(setAmount(''));
        dispatch(setDate(''));

        // redirect to login page
        // setTimeout(() => {
        // navigate('/login');
        // }, 500);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  }



  //second part start


  const columns = [
    { Header: 'Category', accessor: 'category' },
    { Header: 'Date', accessor: 'date' },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Action', accessor: 'action' },
  ];

  /*const data = [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { name: 'Mike Johnson', age: 45, email: 'mike@example.com' },
  ];*/

  //const [key, setKey] = useState(0);


  const removeData = (id) => {
    //console.log(id);

    incomeServices.deleteIncomes(id)
      .then(response => {

        alert(response.data.message);

      })
      .catch(error => {
        alert(error.response.data.message);
      });
    window.location.reload();
  }

  //chart 

  /*const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });
  
  const updateChartData = () => {
    const newData = chartData.datasets[0].data.map(() => Math.floor(Math.random() * 100));
    setChartData({
      ...chartData,
      datasets: [{ ...chartData.datasets[0], data: newData }],
    });
  };*/

  //chart

  const headers = [
    { label: "Category", key: "category" },
    { label: "Date", key: "date" },
    { label: "Amount", key: "amount" }
  ];
  //second part end

  return (
    <div className="container mx-auto">

      <div className="grid grid-cols-2 gap-2">

        <div >

          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">

              <LiaMoneyBillSolid className="mx-auto mt-8 h-10 w-auto" size={48} style={{ color: "blue" }} />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Add Income
              </h2>
              {/*<img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto mt-8 h-10 w-auto"
          />*/}


            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleIncome} className="space-y-6">

                <div>
                  <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                    Category
                  </label>
                  <div className="mt-2">

                    <select value={category}
                      onChange={(e) => dispatch(setCategory(e.target.value))} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option value="">Select Income</option>
                      {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
                      {incomecategory.map((income) => <option key={income._id} value={income.category}>{income.category}</option>)}
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
                    Amount
                  </label>
                  <div className="mt-2">
                    <input
                      id="income"
                      name="income"
                      type="number"
                      required
                      autoComplete="income"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={amount}
                      onChange={(e) => dispatch(setAmount(e.target.value))}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Date
                    </label>
                    {/*<div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>*/}
                  </div>
                  <div className="mt-2">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      autoComplete="date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={date}
                      onChange={(e) => dispatch(setDate(e.target.value))}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Income
                  </button>
                </div>
              </form>

              {/*  <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Register
            </Link>
          </p>*/}
            </div>
          </div>
        </div>


        {/*second part*/}
        {/*<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">*/}
        <div className="container mt-16 mx-auto p-4 border-dashed border-l-4 border-green-300">
          <h5 className="text-xl font-bold mb-4 flex justify-center items-center">Income Transactions</h5>
          <h5 style={{ display: 'flex', justifyContent: 'center' }} className="text-xl font-bold mb-4">
            <CSVLink data={income} headers={headers}
              filename={"income_transactions.csv"}
            >

              <h5> <FaFileCsv size={32} style={{ color: "#3b82f6" }} /> </h5>
            </CSVLink>
          </h5>
          {/*<div>
      <button onClick={updateChartData}>Update Data</button>
      <Bar data={chartData} />
    </div>*/}
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

                {income.map((row) => (
                  //const formatLocalDate = date.toLocaleDateString();
                  <tr className="even:bg-gray-50" key={row._id} >
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.category}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.date.slice(0, 10)}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.amount}</td>
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

export default Incomes;