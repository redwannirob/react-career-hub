import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const[jobs,setJobs] = useState([]);
    useEffect(()=>{
        fetch('../../../public/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="mt-12">
            <div>
                <h2 className="text-5xl font-bold text-center">Featured Jobs : {jobs.length}</h2>
                <p className="text-center mt-12"> Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="mt-12 mx-auto ">
                    {
                        jobs.map(job => <Job key={job.id} job={job}></Job>)
                    }
            </div>
        </div>


    );
};

export default FeaturedJobs;