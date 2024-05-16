import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Queries = () => {
    const [queries, setQueries] = useState([]);
    const [search, setSearch] = useState("");
    const [filterQuery, setFilterQuery] = useState(queries)
    // const { user } = useContext(AuthContext);
    // console.log(queries)
    useEffect(() => {
        fetch('https://informatica-server.vercel.app/queries')
            .then(res => res.json())
            .then(data => {
                setQueries(data)
                setFilterQuery(data)
            })
    }, []);

    const handleSearch = () => {
        const filtered = queries.filter(query => query.productName.toLowerCase().includes(search.toLowerCase()));
        setFilterQuery(filtered)
    }
    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }
    return (
        <div>
            <h1 className='mt-5 text-center text-xl text-blue-400 font-bold mb-10'>All Queries
            </h1>
            <div className='join'>
                <div>
                    <input className='input input-bordered join-item'
                        placeholder='Search product name'
                        value={search}
                        onChange={handleSearchChange} />

                </div>
                <div className='indicator'>
                    <button className='btn bg-blue-400 join-item' onClick={handleSearch}>Search</button>
                </div>

            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 '>


                {

                    
                    filterQuery.map(query => <div className="rounded-md shadow-md h-full  dark:bg-gray-50 dark:text-gray-800">
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