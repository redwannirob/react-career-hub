

const CategoryList = () => {
    return (
        <div className="mt-8">
            <div>
                <h1 className="text-center text-4xl"> Job Category List</h1>
                <p className="text-center mt-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="mt-6 flex gap-8 justify-center ">
                <div>
                    <img className="mx-auto" src="../../../public/icons/accounts.png" alt="" />
                    <br />
                    <p className="text-bold">Accounts & Finance</p>
                </div>

                <div>
                    <img className="mx-auto" src="../../../public/icons/creative.png" alt="" />
                    <br />
                    <p className="text-bold">Creative Design</p>
                </div>

                <div>
                    <img className="mx-auto" src="../../../public/icons/marketing.png" alt="" />
                    <br />
                    <p className="text-bold">Marketting</p>
                </div>

                <div>
                    <img className="mx-auto" src="../../../public/icons/chip.png" alt="" />
                    <br />
                    <p className="text-bold">Engineering</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;