import { useLoaderData } from "react-router-dom";

const Applications = () => {

    const applications = useLoaderData();

    console.log(applications);

    return (
        <div className="container mt-5">
            <h1>Applications</h1>
            {
                applications ? applications.map(application => (
                    <div key={application._id} className="card my-3">
                        <div className="card-body">
                            <h5 className="card-title">{application.description}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{application.companyId.name}</h6>
                            <p className="card-text">Location: {application.location}</p>
                            <p className="card-text">Salary: {application.salary}</p>
                            <p className="card-text">Skills: {application.skills && application.skills.join(", ")}</p>
                            <p className="card-text">Type: {application.type}</p>
                            <p className="card-text">Status: { }</p>
                        </div>
                    </div>
                )) : <p>No applications found</p>
            }
        </div>
    )
}

export default Applications;