import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const MyRecommendation = () => {
    const [recommendations, setRecommendations] = useState([]);
    // const { queryId } = recommendations;
    const { user } = useContext(AuthContext);
    // console.log(user)
    useEffect(() => {
        fetch('http://localhost:5000/recommendation')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const filterRec = data.filter(recommendation => recommendation.email === user.email);
                setRecommendations(filterRec)
            }
            )

    }, []);

    const handleDelete = (id, queryId) => {
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
                    fetch(`http://localhost:5000/recommendation?id=${id}&queryId=${queryId} `, {
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
                                const remaining = recommendations.filter(recommendation => recommendation._id !== id);
                                console.log(remaining, id)
                            }
                        })
                }
            })
    }



    return (
        <div>
            <h1 className='text-center text-xl text-blue-400 font-bold mb-6 animate__animated animate__backInUp'>My Recommendations</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead >
                        <tr >
                            <th></th>
                            <th className="lg:text-xl font-bold">Recommended Product Name</th>
                            <th className="lg:text-xl font-bold">Recommendation Title</th>
                            <th className="lg:text-xl font-bold">Recommendation Reason</th>
                            <th className="lg:text-xl font-bold">Recommended Product Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            recommendations.map((recommendation, index) =>

                            (
                                <tr>

                                    <th>{index + 1}</th>
                                    <td>{recommendation.recommendedProductName}</td>
                                    <td>{recommendation.recommendationTitle} </td>
                                    <td>{recommendation.recommendationReason} </td>
                                    <td><img src={recommendation.recommendedProductImageURL} alt="" /></td>

                                    <td className="flex gap-2 m-2">

                                        <button onClick={() => handleDelete(recommendation._id, recommendation.queryId)}
                                            className="btn text-white  bg-black ">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }





                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyRecommendation;