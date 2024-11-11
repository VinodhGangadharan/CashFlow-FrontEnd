import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { HiCash } from "react-icons/hi";
import { HiOutlineChartPie } from "react-icons/hi";
import { GiPayMoney } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";
import { FaChartPie } from "react-icons/fa6";
import { FcPieChart } from "react-icons/fc";
import logotitle from "../logo_title.JPG";
import img from '../assets/Dashboard.png';
const Home = () => {

  const features = [
    {
      name: 'Track Income.',
      description:
        'Feature for income tracking.',
      icon: GiMoneyStack,
    },
    {
      name: 'Track Expense.',
      description: 'Feature for expense categorization.',
      icon: GiPayMoney,
    },
    {
      name: 'Financial Reporting.',
      description: 'Financial management tool and reporting.',
      icon: FcPieChart,
    },
  ]
  return (



    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto  max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 ">
            <div className="lg:max-w-lg bg-blue">

              {/*<img  src={logotitle} className="h-14 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"/>*/}

              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <img className="h-12 w-auto" src="https://img.icons8.com/?size=100&id=Wi3ZR2jCL3Fv&format=png&color=000000" />
                Cash Flow</p>
              <h2 className="mt-2 text-base font-semibold leading-7 text-indigo-600">Cash , does the job.</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Personal finance manager app to help users track their expenses, manage their budget, plan their finances.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            /*src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"*/
            src={img}

            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>





    /*<div>
         <div className="container mt-5">
             <div className="row">
                 <div className="col-md-6 offset-md-3">
                     <div className="card">
                         <div className="card-header">
                             <h1>Home</h1>
                         </div>
                         <div className="card-body">
                             <p>Welcome to Jobify</p>

                             <p>Jobify is a job board for developers. We have job listings for front-end developers, back-end developers, full-stack developers, and more.</p>

                             <p>Sign up for an account to apply for jobs, or post a job listing if you're looking to hire a developer.</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>*/
  )
}

export default Home;