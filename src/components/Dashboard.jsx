import { useLoaderData } from "react-router-dom";
import userdashboardLoader from "../loaders/userdashboardLoader";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import { FaCircleArrowDown } from "react-icons/fa6";



const Dashboard = () => {


   let USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
   });
   // console.log('Dollars: ' + USDollar.format(price));

   let rupee = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
   });

   let pounds = Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
   });

   let euro = Intl.NumberFormat('en-DE', {
      style: 'currency',
      currency: 'EUR',
   });

   // const { companies, jobs } = useLoaderData();
   const { income, expense, investment, goal, user } = useLoaderData();
   console.log(income);
   console.log(expense);
   console.log(investment);
   console.log(goal);

   const currency = user.currency;


   let incometotal = income.reduce((accumulator, current) => accumulator + current.amount, 0);
   //console.log(total);

   let expensetotal = expense.reduce((accumulator, current) => accumulator + current.amount, 0);
   //console.log(total1);


   let investmenttotal = investment.reduce((accumulator, current) => accumulator + current.currentvalue, 0);

   let goaltotal = goal.reduce((accumulator, current) => accumulator + current.targetamount, 0);

   let availablebalance = incometotal - expensetotal;
   //console.log(balance);

   const data = {
      labels: ['Income', 'Expense', 'Balance'],
      datasets: [
         {
            label: 'Amount',
            //data: [300, 50, 100],
            data: [incometotal, expensetotal, availablebalance],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverOffset: 4,
         },
      ],
   };


   return (



      <div className="mt-4 ml-4 mr-4 grid grid-cols-1 gap-1" style={{ color: "white" }}>


         <table className="table-auto">
            {/*<thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>*/}
            <tbody>
               <tr>
                  <td style={{ width: "65%" }}>
                     <div className="rounded-lg" style={{ backgroundColor: "#000814", color: "silver" }}>
                        <h4 className="my-3 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
                           Income
                        </h4>


                        <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight ">
                           {/*{USDollar.format(incometotal)}*/}

                           {currency === "INR" && (
                              rupee.format(incometotal)
                           )}

                           {currency === "USD" && (
                              USDollar.format(incometotal)
                           )}

                           {currency === "GBP" && (
                              pounds.format(incometotal)
                           )}
                           {currency === "EUR" && (
                              euro.format(incometotal)
                           )}

                           {/*{currency==="INR" ?  USDollar.format(incometotal) : rupee.format(incometotal)  }*/}
                           {/*{incometotal}*/}

                        </h2>
                     </div>
                     <div className="rounded-lg" style={{ backgroundColor: "#000814", color: "silver" }}>
                        <h4 className="my-3 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
                           Expense
                        </h4>
                        <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
                           {currency === "INR" && (
                              rupee.format(expensetotal)
                           )}

                           {currency === "USD" && (
                              USDollar.format(expensetotal)
                           )}
                           {currency === "GBP" && (
                              pounds.format(expensetotal)
                           )}
                           {currency === "EUR" && (
                              euro.format(expensetotal)
                           )}
                        </h2>
                     </div>
                     <div className="rounded-lg" style={{ backgroundColor: "#000814", color: "silver" }}>
                        <h2 className="my-3 text-center text-2xl font-bold leading-9 tracking-tight ">
                           Available Balance
                        </h2>
                        <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight ">
                           {currency === "INR" && (
                              rupee.format(availablebalance)
                           )}

                           {currency === "USD" && (
                              USDollar.format(availablebalance)
                           )}
                           {currency === "GBP" && (
                              pounds.format(availablebalance)
                           )}
                           {currency === "EUR" && (
                              euro.format(availablebalance)
                           )}
                        </h2>
                     </div>


                     <div className="rounded-lg" style={{ backgroundColor: "#000814", color: "silver" }}>
                        <h2 className="my-3 text-center text-2xl font-bold leading-9 tracking-tight ">
                           Investments
                        </h2>
                        <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight ">
                           {currency === "INR" && (
                              rupee.format(investmenttotal)
                           )}

                           {currency === "USD" && (
                              USDollar.format(investmenttotal)
                           )}
                           {currency === "GBP" && (
                              pounds.format(investmenttotal)
                           )}
                           {currency === "EUR" && (
                              euro.format(investmenttotal)
                           )}
                        </h2>
                     </div>
                     <div className="rounded-lg" style={{ backgroundColor: "#000814", color: "silver" }}>
                        <h2 className="my-3 text-center text-2xl font-bold leading-9 tracking-tight ">
                           Goals
                        </h2>
                        <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight ">
                           {currency === "INR" && (
                              rupee.format(goaltotal)
                           )}

                           {currency === "USD" && (
                              USDollar.format(goaltotal)
                           )}
                           {currency === "GBP" && (
                              pounds.format(goaltotal)
                           )}
                           {currency === "EUR" && (
                              euro.format(goaltotal)
                           )}
                        </h2>
                     </div>
                  </td>
                  <td style={{ width: "35%" }}>
                     <Pie data={data} />
                  </td>

               </tr>
            </tbody>
         </table>









         {/* <div className="...">05</div>
  <div className="...">06</div>
  <div className="col-span-2 ...">
07
  </div>*/}
      </div>


      /*<div className="mt-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Companies
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{companies.length}</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Jobs
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{jobs.length}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/
   )
}

export default Dashboard;