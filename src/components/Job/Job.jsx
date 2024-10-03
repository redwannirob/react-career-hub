import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const { company_name, id, job_description, job_title, job_type, location, remote_or_onsite, salary, logo } = job;
    
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto border p-4 m-6 border-blue-400">
            <figure>
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex">
                    <h2 className="mr-2 border font-semibold p-2 border-blue-400 ">{remote_or_onsite}</h2>
                    <h2 className="ml-2 border font-semibold p-2 border-blue-400">{job_type}</h2>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`job/${id}`}><button className="btn btn-primary ">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;