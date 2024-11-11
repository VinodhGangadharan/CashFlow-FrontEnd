import { useLoaderData, useNavigate } from "react-router-dom"
import jobServices from "../services/jobServices";

const Application = () => {

    const { user, job } = useLoaderData();

    const navigate = useNavigate();

    const handleApply = () => {
        // get the confirmation from the user
        const confirmation = window.confirm("Are you sure you want to apply?");
        if (confirmation) {
            // send the request to the server
            jobServices.applyJob(job._id)
                .then(response => {
                    alert(response.data.message);

                    window.setTimeout(() => {
                        navigate('/dashboard/jobs');
                    }, 500);
                })
                // if the request is not successful, show an error message
                .catch(error => {
                    alert(error.response.data.message);
                });
        }
    }

    return (
        <div>
            <h1>{job.title}</h1>
            <h2>{job.company}</h2>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            <p>{job.description}</p>
            <p>Skills: {job.skills && job.skills.join(", ")}</p>
            <p>Type: {job.type}</p>
            {
                job.applicants && job.applicants.includes(user._id) ?
                    <button className="btn btn-primary" disabled>Applied</button> :
                    <button className="btn btn-primary" onClick={handleApply}>Apply</button>
            }
            <button className="btn btn-secondary mx-5"
                onClick={() => window.history.back()}
            >Cancel</button>
        </div>
    )
}

export default Application