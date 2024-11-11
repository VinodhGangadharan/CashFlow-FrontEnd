import { Link } from "react-router-dom";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { GoGoal } from "react-icons/go";
import { TbPigMoney } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiCash } from "react-icons/gi";
import { PiUserCircleGearFill } from "react-icons/pi";
import { LiaMoneyBillSolid } from "react-icons/lia";


const Sidebar = () => {




  return (

    <div className="my-20" >


      <ul role="list" className="px-2 py-3 font-medium " style={{ color: "white" }}>

        <li className="flex items-center">
          {/* <li className="flex items-center">  */}
          <RxDashboard size={32} style={{ color: "#0FFCBE" }} />
          <div >
            <Link to="/dashboard" className="ml-3 mb-2 rounded block px-2 py-3 hover:bg-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-white">Dashboard</Link>
          </div>
        </li>
        <li className="flex items-center ">
          <LiaMoneyBillSolid size={32} style={{ color: "#0FFCBE" }} />
          <div>
            <Link to="/dashboard/incomes" className="ml-3 mb-2 rounded block px-2 py-3 hover:bg-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-white">Incomes</Link>
          </div>
        </li>
        <li className="flex items-center">
          <GiPayMoney size={32} style={{ color: "#0FFCBE" }} />
          <div>
            <Link to="/dashboard/expenses" className="ml-3 mb-2 rounded block px-2 py-3 hover:bg-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-white">Expenses</Link>
          </div>
        </li>
        <li className="flex items-center">
          <GiTakeMyMoney size={32} style={{ color: "#0FFCBE" }} />
          <div>
            <Link to="/dashboard/recurringexpenses" className="ml-3 mb-2  rounded block px-2 py-3 hover:bg-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-white">Recurring Expenses</Link>
          </div>
        </li>
        <li className="flex items-center">
          <TbPigMoney size={32} style={{ color: "#0FFCBE" }} />
          <div>
            <Link to="/dashboard/budgets" className="ml-3 mb-2 rounded block px-2 py-3 hover:bg-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-white">Budgets</Link>
          </div>
        </li>
        <li className="flex items-center">
          <GoGoal size={32} style={{ color: "#0FFCBE" }} />
          <div>
            <Link to="/dashboard/goals" className="ml-3 mb-2 rounded block px-2 py-3 hover:bg-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-white">Goals</Link>
          </div>
        </li>
        <li className="flex items-center">
          <GiCash size={32} style={{ color: "#0FFCBE" }} />
          <div>
            <Link to="/dashboard/investments" className="ml-3 mb-2 rounded block px-2 py-3 hover:bg-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-white">Investments</Link>
          </div>
        </li>
        <li className="flex items-center">
          <PiUserCircleGearFill size={32} style={{ color: "#0FFCBE" }} />
          <div>
            <Link to="/dashboard/userprofile" className="ml-3 mb-2  rounded block px-2 py-2 hover:bg-sky-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-white">Profile</Link>
          </div>
        </li>
      </ul>
    </div>


    /*  <table  style={{background: "rgb(15 23 42)", color:"white"}}>
<thead>
  <tr>
  <th className="border border-slate-300 ..."><RxDashboard  size={32} style={{color:"blue"}}/></th>
    <th className="border border-slate-300 ...">
    
    <Link to="/dashboard" >Dashboard</Link>
      </th>
  </tr>
</thead>
<tbody>
  <tr className="text-center">
    <td className="border border-slate-300 ..."><LiaMoneyBillSolid size={32} style={{ color:"blue"}} /></td>
    <td className="border border-slate-300 ...">
    <Link  to="/dashboard/incomes">Incomes</Link>
      </td>
  </tr>
  <tr className="text-center">
    <td className="border border-slate-300 ..."><GiPayMoney size={32} style={{color:"blue"}} /></td>
    <td className="border border-slate-300 ...">
    <Link to="/dashboard/expenses" className="list-group-item list-group-item-action bg-light">Expenses</Link>
      </td>
  </tr>
  <tr className="text-center">
    <td className="border border-slate-300 ..."><GiTakeMyMoney size={32} style={{color:"blue"}}  /></td>
    <td className="border border-slate-300 ...">
    <Link to="/dashboard/recurringexpenses" className="list-group-item list-group-item-action bg-light">Recurring Expenses</Link>
      </td>
  </tr>
  <tr className="text-center">
    <td className="border border-slate-300 ..."><TbPigMoney size={32} style={{color:"blue"}} /></td>
    <td className="border border-slate-300 ...">
    <Link to="/dashboard/budgets" className="list-group-item list-group-item-action bg-light">Budgets</Link>
      </td>
  </tr>
  <tr className="text-center">
    <td className="border border-slate-300 ..."><GoGoal size={32} style={{color:"blue"}} /></td>
    <td className="border border-slate-300 ...">
    <Link to="/dashboard/goals" className="list-group-item list-group-item-action bg-light">Goals</Link>
      </td>
  </tr>
  <tr className="text-center">
    <td className="border border-slate-300 ..."><GiCash size={32} style={{color:"blue"}} /></td>
    <td className="border border-slate-300 ...">
    <Link to="/dashboard/investments" className="list-group-item list-group-item-action bg-light">Investments</Link>
      </td>
  </tr>
  <tr className="text-center">
    <td className="border border-slate-300 ..."><PiUserCircleGearFill size={32} style={{color:"blue"}} /></td>
    <td className="border border-slate-300 ...">
    <Link to="/dashboard/profile" className="list-group-item list-group-item-action bg-light">Profile</Link>
      </td>
  </tr>
</tbody>
</table>
</div>









   <div className=" bg-indigo-500 ...">
   
<div className="flex items-center">
<img src="path/to/image.jpg"/>
<div >
<Link to="/dashboard" >Dashboard</Link>
  
</div>
</div>
<div className="flex items-center">
<img src="path/to/image.jpg"/>
<div>
<Link to="/dashboard/incomes" className="underline decoration-sky-500">Incomes</Link>
  
</div>
</div>
<div className="flex items-center">
<img src="path/to/image.jpg"/>
<div>
<Link to="/dashboard/expenses" className="list-group-item list-group-item-action bg-light">Expenses</Link>
 
</div>
</div>
<div className="flex items-center">
<img src="path/to/image.jpg"/>
<div>
<Link to="/dashboard/recurringexpenses" className="list-group-item list-group-item-action bg-light">Recurring Expenses</Link>

</div>
</div>
<div className="flex items-center">
<img src="path/to/image.jpg"/>
<div>
<Link to="/dashboard/budgets" className="list-group-item list-group-item-action bg-light">Budgets</Link>
 
</div>
</div>
<div className="flex items-center">
<img src="path/to/image.jpg"/>
<div>
<Link to="/dashboard/goals" className="list-group-item list-group-item-action bg-light">Goals</Link>
 
</div>
</div>
<div className="flex items-center">
<img src="path/to/image.jpg"/>
<div>
<Link to="/dashboard/investments" className="list-group-item list-group-item-action bg-light">Investments</Link>

</div>
</div>
<div className="flex items-center">
<img src="path/to/image.jpg"/>
<div>
<Link to="/dashboard/profile" className="list-group-item list-group-item-action bg-light">Profile</Link>

</div>
</div>



</div>
      <div className="d-flex">
          <div className="bg-light border-right mt-5" id="sidebar-wrapper">

              <div className="list-group list-group-flush">
                  <Link to="/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>

                  <Link to="/dashboard/incomes" className="list-group-item list-group-item-action bg-light">Incomes</Link>
                  <Link to="/dashboard/expenses" className="list-group-item list-group-item-action bg-light">Expenses</Link>
                  <Link to="/dashboard/recurringexpenses" className="list-group-item list-group-item-action bg-light">Recurring Expenses</Link>
                  <Link to="/dashboard/budgets" className="list-group-item list-group-item-action bg-light">Budgets</Link>
                  <Link to="/dashboard/goals" className="list-group-item list-group-item-action bg-light">Goals</Link>
                  <Link to="/dashboard/investments" className="list-group-item list-group-item-action bg-light">Investments</Link>

                  <Link to="/dashboard/companies" className="list-group-item list-group-item-action bg-light">Companies</Link>
                  <Link to="/dashboard/jobs" className="list-group-item list-group-item-action bg-light">Jobs</Link>
                  <Link to="/dashboard/applications" className="list-group-item list-group-item-action bg-light">Applications</Link>
                  <Link to="/dashboard/profile" className="list-group-item list-group-item-action bg-light">Profile</Link>
              </div>
          </div>
      </div> */
  )
}

export default Sidebar;