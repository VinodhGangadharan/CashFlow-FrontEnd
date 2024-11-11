import { Link, Outlet, useLoaderData } from "react-router-dom";

const Jobs = () => {

    const jobs = useLoaderData();

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    jobs.map((job, index) => (
                        <div className="col-4 mb-3" key={index}>
                            <Link to={`/dashboard/jobs/${job._id}`} className="text-decoration-none">
                                <div className="card">
                                    <div className="card-header">
                                        {job.title}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{job.company}</h5>
                                        <p>Location: {job.location}</p>
                                        <p>Salary: {job.salary}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Jobs;