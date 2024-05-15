import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Queries = () => {
    const [queries, setQueries] = useState([]);

    // const { user } = useContext(AuthContext);
    // console.log(user)
    useEffect(() => {
        fetch('http://localhost:5000/queries')
            .then(res => res.json())
            .then(data => {
                setQueries(data)
            })
    }, []);
    return (
        <div>
            <h1 className='mt-5 text-center text-xl text-blue-400 font-bold'>All Queries
            </h1>


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 '>



                {
                    queries.length === 0 ?

                        <div className=' grid justify-center   '>
                            <p className="mb-5 animate__animated animate__backInDown font-bold ">No Query Found <br />Go and ask your query</p>
                            <Link to='/addQuery'><button className="btn lg:text-xl text-white  bg-orange-400 ">Add Query</button></Link></div>

                        :
                        queries.map(query => <div className="rounded-md shadow-md h-full  dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex items-center justify-between p-3">
                                <div className="flex items-center space-x-2">
                                    <img src={query.photoURL} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                                    <div className="-space-y-1">
                                        <h2 className="text-sm font-semibold leading-none">{query.displayName}</h2>
                                        <span className="inline-block text-xs leading-none dark:text-gray-600">{query.email}</span>
                                    </div>
                                </div>
                                <h3>{query.postedTimestamp}</h3>
                            </div>
                            <div className="grid items-center justify-between">

                                <p className='text-center font-bold'>{query.productName}, <span className='font-thin'>From: </span> {query.productBrand}</p>
                            </div>
                            <img src={query.productImageURL} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                            <div className="p-5 ">

                                <div className="grid items-center pt-3 pb-1">
                                    <h1 className='text-xl font-bold mb-3'>{query.queryTitle}</h1>
                                    <p>Reason:  {query.boycottingReasonDetails}</p>
                                    <p>Total Recommendations: {query.recommmendationCount} </p>
                                </div>

                                <Link to={`/queryDetails/${query._id}`}>  <button className='btn border text-white  bg-orange-400'>
                                    Recommend Now </button></Link>

                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Queries;