import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PiCompassToolDuotone, PiUserCircleGearFill } from "react-icons/pi";
import { selectName, selectEmail, selectCurrency, setName, setEmail, setCurrency } from "../features/auth/userSlice";
//import budgetcombinedLoader from "../loaders/budgetcombinedLoader";
//import budgetServices from "../services/budgetServices";
//import budgetcombinedLoader from "../loaders/budgetcombinedLoader";
import authLoader from "../loaders/authLoader";
//import { useEffect } from "react";
import authServices from "../services/authServices";
import userServices from "../services/userServices";
import { BiMessageDetail } from "react-icons/bi";
import recurringexpensecategoryLoader from "../loaders/recurringexpensecategoryLoader";
import recurringexpensecombinedLoader from "../loaders/recurringexpensecombinedLoader.js";
import recurringexpenseServices from "../services/recurringexpenseServices"
import notificationcombinedLoader from "../loaders/notificationcombinedLoader.js";


const UserNotifications = () => {




  //const user = useLoaderData();

  const { recurringexpense, goal, investment, user, income, expense } = useLoaderData();
  console.log(recurringexpense);
  console.log(goal);
  console.log(investment);
  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);

  let incometotal = income.reduce((accumulator, current) => accumulator + current.amount, 0);
  //console.log(total);

  let expensetotal = expense.reduce((accumulator, current) => accumulator + current.amount, 0);
  //console.log(total1);

  let goaltotal = goal.reduce((accumulator, current) => accumulator + current.targetamount, 0);

  let availablebalance = incometotal - expensetotal;








  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recurringexp = recurringexpense.map((myList) => {
    return <li className="divide-y divide-slate-200 list-square " key={myList._id}>
      <p className="mt-4 mb-4 border-b-4 border-slate-300">
        {myList.category} - {myList.amount} - {myList.period}
        - <b style={{ color: "violet" }}>Date: {myList.expensedate.split('T')[0].slice(8, 10)} </b>
      </p>
    </li>;
  });


  const goallist = goal.map((myList) => {
    return <li className="divide-y divide-slate-200 list-square " key={myList._id}>
      <p className="mt-4 mb-4 border-b-4 border-slate-300">
        {myList.category} - {myList.targetamount} - {myList.deadline.split('T')[0]}

        {myList.targetamount > availablebalance &&
          <p style={{ color: "#FF004F" }}>
            <b> Yet to achieve.</b>
          </p>
        }
        {myList.targetamount < availablebalance &&
          <p style={{ color: "yellowgreen" }}>
            <b> Achieveable.</b>
          </p>
        }

        {/*<p>
    {goal.targetamount > availablebalance ? <b> Achieved </b>: 
    <b>  Yet to be Achieved</b>}
  </p>*/}
      </p>
    </li>;
  });

  const investmentlist = investment.map((myList) => {
    return <li className="divide-y divide-slate-200 list-square " key={myList._id}>
      <p className="mt-4 mb-4 border-b-4 border-slate-300">
        {myList.category} - {myList.currentvalue} - {myList.performance}%
        <p>
          <p>
            Next year Projection:
          </p>
          <b style={{ color: "yellow" }}>{(myList.currentvalue * myList.performance) / 100 + myList.currentvalue}</b>
        </p>
      </p>
    </li>;
  });




  return (

    <div className="mt-10 mr-2 ml-2">

      <div className="grid grid-cols-3 gap-4">

        <div className="max-w-sm rounded overflow-hidden shadow-lg" style={{ backgroundColor: "black", color: "lightgrey" }}>
          {/*<img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />*/}
          <div className="px-6 py-4">
            <div className="inline-block flex justify-center items-center bg-indigo-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-900 mr-2 mb-2">Recurring Expense</div>
            <p>
              (Based on Occurence Date)
            </p>
            {/*<p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>*/}
            <ul> {recurringexp} </ul>
          </div>
          {/* <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>*/}
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg" style={{ backgroundColor: "black", color: "lightgrey" }}>
          {/*<img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />*/}
          <div className="px-6 py-4">
            <div className="inline-block flex justify-center items-center bg-indigo-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-900 mr-2 mb-2">Goal </div>
            <p>
              (Based on Available balance)
            </p>
            {/*<p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>*/}
            <ul> {goallist} </ul>
          </div>
          {/*<div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>*/}
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg" style={{ backgroundColor: "black", color: "lightgrey" }}>
          {/*<img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />*/}
          <div className="px-6 py-4">
            <div className="inline-block flex justify-center items-center bg-indigo-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-900 mr-2 mb-2">Investment</div>
            <p>
              (Based on Performance)
            </p>
            {/*<p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>*/}
            <ul> {investmentlist} </ul>
          </div>
          {/*<div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>*/}
        </div>

      </div>

    </div>


  )
}

export default UserNotifications;