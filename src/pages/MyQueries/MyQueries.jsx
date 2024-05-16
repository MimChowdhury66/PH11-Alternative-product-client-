import React, { useContext, useEffect, useState } from 'react';
import query from '../../../public/query.jpg'
import { Link } from 'react-router-dom';
import QueryCard from '../QueryCard/QueryCard';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const MyQueries = () => {
    const [queries, setQueries] = useState([]);
    const { user } = useContext(AuthContext);
    // console.log(user)
    useEffect(() => {
        fetch(`https://informatica-server.vercel.app/queries?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setQueries(data)
            })
    }, []);


    const handleDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://informatica-server.vercel.app/queries/${id}`, {
                        method: 'DELETE',

                    })

                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    {
                                        icon: "success",
                                        title: "Query deleted",
                                    }
                                )
                                const remaining = queries.filter(query => query._id !== id);
                                setQueries(remaining)
                            }
                        })
                }
            })

    }
    return (

        <div >

            <div className="hero min-h-screen rounded-lg w-full" style={{ backgroundImage: `url(${query})` }}>
                <div className="ml-5 lg:w-full md:w-1/2 grid justify-start text-start">

                    <h1 className="mb-5 lg:text-5xl font-bold animate__animated animate__backInDown">Looking for something <br />
                        Alternative?
                    </h1>
                    <p className="mb-5 animate__animated animate__backInDown font-bold">Go and ask the alternative product <br /> what you are looking for...</p>
                    <Link to='/addQuery'><button className="btn lg:text-xl text-white  bg-blue-400 ">Add Query</button></Link>

                </div>

            </div>

            {/* my query section */}
            <div >
                <h1 className='mt-5 text-center text-xl text-blue-400 font-bold'>My Queries
                </h1>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 '>



                    {
                        queries.length === 0 ?

                            <div className=' grid justify-center   '>
                                <p className="mb-5 animate__animated animate__backInDown font-bold ">No Query Found <br />Go and ask your query</p>
                                <Link to='/addQuery'><button className="btn lg:text-xl text-white  bg-orange-400 ">Add Query</button></Link></div>

                            :
                            queries.map(query => <QueryCard query={query} handleDelete={handleDelete}></QueryCard>)
                    }

                </div>
            </div>



        </div>
    );
};

export default MyQueries;