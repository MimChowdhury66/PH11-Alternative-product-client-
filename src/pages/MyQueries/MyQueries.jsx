import React from 'react';
import query from '../../../public/query.jpg'
import { Link } from 'react-router-dom';
const MyQueries = () => {
    return (
        <div>
            <div className="hero min-h-screen rounded-lg w-full" style={{ backgroundImage: `url(${query})` }}>
                <div className="ml-5 w-full grid justify-start text-start">

                    <h1 className="mb-5 lg:text-5xl font-bold animate__animated animate__backInDown">Looking for something <br />
                        Alternative?
                    </h1>
                    <p className="mb-5 animate__animated animate__backInDown font-bold">Go and ask the alternative product <br /> what you are looking for...</p>
                    <Link to='/addQuery'><button className="btn lg:text-xl text-white  bg-blue-400 ">Add Query</button></Link>

                </div>

            </div>

            {/* my query section */}
            <div className='mt-5 text-center text-xl text-blue-400 font-bold'>
                <h1>My All Query's </h1>
                <div>
                    
                </div>
            </div>



        </div>
    );
};

export default MyQueries;