import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="flex text-center">
            <div>
                <h1 className="text-6xl font-semi-bold">One Step</h1>
                <br />
                <h1 className="text-6xl font-semi-bold">Closer To Your</h1>
                <br />
                <h1 className="text-6xl text-purple-600 font-bold">Dream Job</h1>
                <div className="mt-4">
                    <p>Explore thousands of job opportunities with all the information you need.</p>
                    <p> Its your future. Come find it. Manage all your job application from start to finish.</p>
                </div>
                <div>
                    <Link className="btn btn-primary mt-8">Get Started</Link>
                </div>
            </div>
            <div className="">
                <img src="../../../public/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;