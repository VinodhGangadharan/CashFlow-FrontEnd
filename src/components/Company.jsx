import { useLoaderData } from "react-router-dom"

const Company = () => {

    const company = useLoaderData();

    return (
        <div className="container mt-5">
            <h1>{company.name}</h1>
            <p>{company.location}</p>

            <h2>Jobs</h2>
            {
                company.jobs.length > 0 ?
                    <ul>
                        {
                            company.jobs.map((job, index) => (
                                <div className="card" key={index}>
                                    <div className="card-header">
                                        {job.title}
                                    </div>
                                    <div className="card-body">
                                        <p>{job.description}</p>
                                        <p>Salary: {job.salary}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </ul> : <p>No jobs found</p>
            }
        </div>
    )
}

export default Company