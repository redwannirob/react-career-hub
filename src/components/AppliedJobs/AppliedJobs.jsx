import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const[displayJobs,setDispalyJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDispalyJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDispalyJobs(remoteJobs);
        }
        else if(filter === 'Onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDispalyJobs(onsiteJobs)
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied =  jobs.filter(job => storedJobIds.includes(job.id));
            // setAppliedJobs(jobsApplied);
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
            setDispalyJobs(jobsApplied)

        }
    }, [jobs])
    // console.log(jobs)
    return (
        <div>
            <h2 className="text-2xl font-semibold">Applied Jobs : {appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=> handleJobsFilter('Onsite')}><a>On site</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}> <span>{job.job_title} {job.company_name}</span> </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;