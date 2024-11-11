import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { selectEmail, selectPassword, setEmail, setPassword } from "../features/auth/loginSlice";
import { selectCategory, selectAmount, selectDate, selectDescription, setCategory, setAmount, setDate, setDescription } from "../features/expense/expenseSlice";
import authServices from "../services/authServices";
import { GiPayMoney } from "react-icons/gi";
//import expensecategoryLoader from "../loaders/expensecategoryLoader";
import expensecombinedLoader from "../loaders/expensecombinedLoader.js";
import expenseServices from "../services/expenseServices";
//import recurringexpensecombinedLoader from  "../loaders/recurringexpensecombinedLoader.js";
import { useEffect } from "react";
import { useState } from "react";
import { LiaEthereum } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useRef } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
//import { Parser } from 'json2csv';
import { CSVLink } from "react-csv";
import { FaFileCsv } from "react-icons/fa6";

const Expenses = () => {

  //pdfMake.vfs = pdfFonts.pdfMake.vfs;


  //const contentRef = useRef(null);


  const { expensecategory, expense, recurringexpensecategory, recurringexpense, budget, goal } = useLoaderData();

  //console.log(budget);

  /*const generatePdf = () => 
    {
    const content = expense;
 
    const documentDefinition = 
    {
      content: content,
    };
 
    pdfMake.createPdf(documentDefinition).download('GeneratedPDF.pdf');
  };*/

  //console.log(expensecategory);
  //console.log(expense);

  const category = useSelector(selectCategory);
  const amount = useSelector(selectAmount);
  const date = useSelector(selectDate);
  const description = useSelector(selectDescription);


  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const events = expense.filter(e => {
    var [year, month] = e.date.split('-');
    return (currentMonth === +month) && (currentYear == year);
  });

  //console.log(events);


  const [selected, setSelected] = useState("");
  const [blimit, setBlimit] = useState(0);
  const [bspent, setSpent] = useState(0);
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  const expenses = expensecategory;
  // const recurringexpenses = recurringexpensecategory;
  //const language = ["C++", "Java", "Python", "C#"];  
  let type = null;
  let options = null;
  if (selected === "Expense") {
    type = expenses;
  } else if (selected === "Recurring Expense") {
    type = recurringexpense;
  }
  if (type) {
    if (selected === "Expense") {
      options = type.map((el) => <option key={el._id}>{el.category}</option>);
    }
    if (selected === "Recurring Expense") {

      options = type.map((el) => <option key={el._id}>{el.category}</option>);
    }
  }


  // const user = useLoaderData();

  // useEffect(() => {
  //    if (user) {
  //      navigate('/dashboard');
  //}
  //}, [user]);

  // const handleCancel = () => {
  //    window.history.back();
  //}
  //let budgetlimit =0;

  const handlevalues = (e) => {

    const spent = events.filter(event => event.category === e.target.value);
    //console.log(`spent: ${spent}`);
    const budgettotal = spent.reduce((accumulator, current) => accumulator + current.amount, 0);
    console.log(`budget total: ${budgettotal}`);
    setSpent(budgettotal);

    const budgets = budget.filter(budge => budge.category === e.target.value);
    let budgetlimit = budgets.reduce((accumulator, current) => accumulator + current.limit, 0);
    console.log(`budget limit: ${budgetlimit}`);
    setBlimit(budgetlimit);


    //let budget = events.find(({ category }) => category === e.target.value);
    //console.log(budget);
    //let budgettotal = budget.reduce((accumulator, current) => accumulator + current.amount, 0);
    //console.log(budgettotal);



    dispatch(setCategory(e.target.value));
    //e.preventDefault();
    //console.log(e.target.value);
    const result = recurringexpense.find(({ category }) => category === e.target.value);
    //console.log(result);
    //console.log(result.amount);
    //console.log(result.description);

    if (typeof result === "undefined") {
      dispatch(setAmount(''));
      dispatch(setDescription(''));
    }

    else if (result !== undefined) {
      dispatch(setAmount(result.amount));
      dispatch(setDescription(result.description));
    }



    // setAmount(result.amount);
    //setDescription(result.description);

  }


  const handleExpense = (e) => {
    //e.preventDefault();

    // handle user registration
    expenseServices.createExpenses({ category, amount, date, description })
      .then(response => {
        alert(response.data.message);

        // clear the form
        dispatch(setCategory(''));
        dispatch(setAmount(''));
        dispatch(setDate(''));
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
    { Header: 'Date', accessor: 'date' },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Description', accessor: 'description' },
    { Header: 'Action', accessor: 'action' },
  ];

  const headers = [
    { label: "Category", key: "category" },
    { label: "Date", key: "date" },
    { label: "Amount", key: "amount" },
    { label: "Description", key: "description" }
  ];

  const removeData = (id) => {
    //console.log(id);

    expenseServices.deleteExpenses(id)
      .then(response => {

        alert(response.data.message);

      })
      .catch(error => {
        alert(error.response.data.message);
      });
    window.location.reload();
  }

  /*const jsonData = expense;

  const downloadCSV = () => {
    const parser = new Parser();
    const csv = parser.parse(jsonData);
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
  
    link.setAttribute('href', url);
    link.setAttribute('download', 'data.csv');
    link.style.visibility = 'hidden';
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };*/

  return (
    <div className="container mx-auto">

      <div className="grid grid-cols-2 gap-2">

        <div >

          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <GiPayMoney className="mx-auto mt-8 h-10 w-auto" size={48} style={{ color: "blue" }} />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Add Expense
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleExpense} className="space-y-6">



                <div>

                  <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                    Expense Type
                  </label>
                  <div className="mt-2">
                    <select onChange={changeSelectOptionHandler} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option>Select Type</option>
                      <option>Expense</option>
                      <option>Recurring Expense</option>

                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                    Category
                  </label>
                  <div className="mt-2">
                    <select onChange={handlevalues} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <option value="">Select Expense</option>
                      {

                        options
                      }
                    </select>
                  </div>
                </div>



                {/*  <div>
                    <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                      Category
                    </label>
                    <div className="mt-2">
      
                    <select   value={category} required
                        onChange={(e) => dispatch(setCategory(e.target.value))} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"> 
            <option value="">Select Expense</option>
               
            {expensecategory.map((expense) => <option key={expense._id} value={expense.category}>{expense.category}</option>)}
          </select>
                    </div>
                  </div>*/}








                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Amount
                  </label>
                  <label className="block text-sm font-medium leading-6 text-blue-900">
                    Monthly Budget - Limit : {blimit} | Spent : {bspent}
                  </label >
                  <div className="mt-2">
                    <input
                      id="expense"
                      name="expense"
                      type="number"
                      required
                      autoComplete="expense"
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
                    Add Expense
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
          <h5 className="text-xl font-bold mb-4 flex justify-center items-center">Expense Transactions</h5>
          <h5 style={{ display: 'flex', justifyContent: 'center' }} className="text-xl font-bold mb-4">
            <CSVLink data={expense} headers={headers}
              filename={"expense_transactions.csv"}
            >
              <h5 ><FaFileCsv size={32} style={{ color: "blue" }} /> </h5>
            </CSVLink>
          </h5>

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

                {expense.map((row) => (
                  //const formatLocalDate = date.toLocaleDateString();
                  <tr className="even:bg-gray-50" key={row._id} >
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.category}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.date.slice(0, 10)}</td>
                    <td className="py-2 px-4 border-b border-gray-200 text-gray-800">{row.amount}</td>
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

export default Expenses;