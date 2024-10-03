import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiTwotoneDollar } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utilities/localStorage";


const JobDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id)
    const jobs = useLoaderData();
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast("Applied successfully");

    };
    console.log(job)
    return (
        <div className="container mx-auto">
            <h1 className="text-6xl font-bold text-center mb-12">Job Details</h1>
            <br />
            <div className="flex ">
                <div className="w-2/3">
                    <h2 className="font-extrabold">Job description : <span className="font-semibold">{job.job_description}</span></h2>
                    <br />
                    <h2 className="font-extrabold">Job responsibility : <span className="font-semibold">{job.job_responsibility}</span></h2>
                    <br />
                    <h2 className="font-extrabold">Educational Requirments: <span className="font-semibold">{job.educational_requirements}</span></h2>
                    <br />
                    <h2 className="font-extrabold">Experiences: <span className="font-semibold">{job.experiences}</span></h2>
                </div>
                <div  className="w-1/3 ml-12">
                    <h2 className="text-center  font-bold">Job Details</h2>
                    <br />
                     <h2 className="font-semibold"> <i className="text-xl"><AiTwotoneDollar /></i> Salary : {job.salary}</h2>
                     <Link to='/applied'><button onClick={handleApplyJob} className="btn btn-success">Apply Now</button></Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;