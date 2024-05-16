import React from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useContext, useEffect, useState } from 'react';

const RecomForMe = () => {


    const [recommendations, setRecommendations] = useState([]);

    const { user } = useContext(AuthContext);
    // console.log(user)
    useEffect(() => {
        fetch('https://informatica-server.vercel.app/recommendation')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const filterRec = data.filter(recommendation => recommendation.queryUserEmail === user.email);
                setRecommendations(filterRec)
            }
            )

    }, []);
    return (
        <div>
            <h1 className='text-center text-xl text-blue-400 font-bold mb-6 animate__animated animate__backInUp'>Recommendations For Me</h1>
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


                                </tr>
                            ))
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecomForMe;