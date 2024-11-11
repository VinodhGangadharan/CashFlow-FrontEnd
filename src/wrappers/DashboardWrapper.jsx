import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardWrapper = () => {
    return (

        <div className="flex flex-row" >
            <div className="basis-2/12" style={{ backgroundColor: "#106EBE" }} >
                <Sidebar />
            </div>
            <div className="basis-10/12"   >
                <Outlet />
            </div>
            {/*#0FFCBE   #106EBE*/}
        </div>

        /*  <div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <Sidebar />
                  </div>
                  <div className="col-md-9">
                      <Outlet />
                  </div>
              </div>
          </div>*/
    )
}

export default DashboardWrapper;