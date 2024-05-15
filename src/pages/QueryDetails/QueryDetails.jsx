import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const QueryDetails = () => {
    const { id } = useParams();
    const [recommendations, setRecommendations] = useState([]);

    const [queries, setQueries] = useState({});
    const { _id: queryId, productImageURL, boycottingReasonDetails, productBrand, productName, queryTitle, email: queryUserEmail, displayName: queryUserName, photoURL: queryUserPhoto, postedTimestamp, recommmendationCount } = queries;
    // console.log(queries)

    useEffect(() => {
        fetch(`http://localhost:5000/queries/${id}`)
            .then(res => res.json())
            .then(data => setQueries(data)
            )

    }, [id]);
    useEffect(() => {
        fetch('http://localhost:5000/recommendation')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const filterRec = data.filter(recommendation => recommendation.queryId === id);
                setRecommendations(filterRec)
            }
            )

    }, []);



    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,

    } = useForm();

    const onSubmit = data => {

        const { recommendedProductImageURL, recommendationReason, recommendedProductName, recommendationTitle } = data;

        const { email, displayName, photoURL } = user;

        const postedTimestamp = new Date().toLocaleString("en-Us", {
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
        const newPost = { queryId, queryUserEmail, queryUserName, recommendedProductImageURL, recommendationTitle, recommendationReason, recommendedProductName, queryUserPhoto, queryTitle, postedTimestamp, email, displayName, photoURL, recommmendationCount: 0 };
        console.log(newPost)

        // send data
        fetch('http://localhost:5000/recommendation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal({
                        icon: "success",
                        title: "Your Recommendation saved successfully",
                    });
                }
            })

    }
    return (
        <div>
            <div>
                <h1 className='lg:text-4xl font-bold text-center text-blue-400  animate__animated animate__backInUp'>Query Details and Add a Recommendation</h1>
            </div>
            {/* query info */}
            <article className="max-w-2xl px-6 py-10 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
                <div className="w-full mx-auto space-y-1 text-center">
                    <p className="text-xs font-semibold tracking-wider uppercase">{queryTitle}</p>
                    <img src={productImageURL} alt="" />
                    <p className="text-sm dark:text-gray-600">
                        {productName} from {productBrand}
                    </p>
                </div>
                <div className="dark:text-gray-800 text-center">
                    <p><span className='font-bold'>Reason of boycotting:</span> {boycottingReasonDetails}</p>
                </div>
                <div className="pt-2 border-t dark:border-gray-300">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                        <img src={queryUserPhoto} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold">Posted By: {queryUserName} <br /> Posted on: {postedTimestamp}</h4>
                            <p className="dark:text-gray-600">Email: {queryUserEmail}</p>
                            <hr />
                            <hr />
                            <p className="dark:text-gray-600">Recommmendation Count: {recommmendationCount}</p>
                        </div>
                    </div>

                </div>
            </article>

            {/* Add A Recommendation form */}
            <div>
                <h1 className='text-center text-xl text-blue-400 font-bold mb-6 animate__animated animate__backInUp'>Add A Recommendation</h1>
                <form onSubmit={handleSubmit(onSubmit)} className=" ">
                    <div className=" grid gap-3 w-full justify-center mb-3">
                        <div className="form-control ">
                            <label className="input input-bordered flex items-center gap-2">
                                Recommended Product Image                     <input required type="text" name="recommendedProductImageURL" className="grow w-full" placeholder="Recommended Product Image URL" {...register("recommendedProductImageURL")} />
                            </label>
                        </div>
                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Recommended Product Name
                                    <input required type="text" name="recommendedProductName" className="grow w-full" placeholder="Recommended product Name" {...register("recommendedProductName")} />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/2 ">
                                <label className="input input-bordered flex items-center gap-2">
                                    Recommendation Title
                                    <input required type="text" name="recommendationTitle" className="grow w-full" placeholder="Recommendation Title" {...register("recommendationTitle")} />
                                </label>
                            </div>

                        </div>
                        <div className="grid lg:flex gap-3 w-full">

                            <div className="form-control w-full">
                                <label className="input input-bordered flex items-center gap-2">
                                    Recommendation Reason
                                    <input required type="text" name=" recommendationReason " className="grow w-full" placeholder=" Recommendation Reason " {...register("recommendationReason")} />
                                </label>
                            </div>
                        </div>




                    </div>
                    <div className=" flex justify-center w-full">
                        <input type="submit" value="Add Recommendation" className="btn  w-1/2  text-white bg-orange-400 " />
                    </div>
                </form>

            </div>


            {/* All recommendation */}
            <div className='mt-5'>
                <h1 className='text-center text-xl text-blue-400 font-bold mb-6 animate__animated animate__backInUp'>All Recommendations</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 '>
                    {
                        recommendations.map(recommendation => <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt='' src={recommendation.photoURL} />
                                </div>
                            </div>
                            <div className="chat-header">
                                {recommendation.displayName},  
                                <time className="text-xs opacity-50">{recommendation.postedTimestamp}</time>
                            </div>
                            <div className="chat-bubble">{recommendation.recommendedProductName}, <br />
                                <span className='font-bold'> Reason: </span>{recommendation.recommendationReason}
                                <img src={recommendation.recommendedProductImageURL} alt="" />
                                {recommendation.recommendationTitle}
                            </div>
                            <div className="chat-footer opacity-50">
                                Delivered
                            </div>
                        </div>)
                    }

                </div>



            </div>
        </div>
    );
};

export default QueryDetails;