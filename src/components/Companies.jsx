import { Link, useLoaderData } from "react-router-dom";

const Companies = () => {

    const companies = useLoaderData();

    console.log(companies);

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    companies.map((company, index) => (
                        <div className="col-4 mb-3" key={index}>
                            <Link to={`/dashboard/companies/${company._id}`} className="text-decoration-none">
                                <div className="card">
                                    <div className="card-header">
                                        {company.name}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{company.location}</h5>
                                        <p>Email: {company.email}</p>
                                        <p>Phone: {company.phone}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Companies;