import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';
const Update = () => {
    const { id } = useParams();
    // console.log(id);
    const [queries, setQueries] = useState({});
    const { _id, productImageURL, boycottingReasonDetails, productBrand, productName, queryTitle } = queries;
    // console.log(queries)

    useEffect(() => {
        fetch(`https://informatica-server.vercel.app/queries/${id}`)
            .then(res => res.json())
            .then(data => setQueries(data)
            )
        reset(queries)
    }, [id]);


    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit, reset

    } = useForm();

    const onSubmit = data => {

        const { productImageURL, boycottingReasonDetails, productBrand, productName, queryTitle } = data;
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
        const newPost = { productImageURL, boycottingReasonDetails, productBrand, productName, queryTitle, postedTimestamp, email, displayName, photoURL, recommmendationCount: 0 };
        console.log(newPost)

        // update data
        fetch(`https://informatica-server.vercel.app/queries/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal({
                        icon: "success",
                        title: "Query Updated successfully",
                    });
                }
            })

    }



    return (
        <div>
            <h1 className='text-center text-xl text-blue-400 font-bold mb-6 animate__animated animate__backInUp'>Update Your Query Here</h1>


            <div>

                <form onSubmit={handleSubmit(onSubmit)} className=" ">
                    <div className=" grid gap-3 w-full justify-center mb-3">
                        <div className="form-control ">
                            <label className="input input-bordered flex items-center gap-2">
                                Product Image URL                      <input required defaultValue={productImageURL} type="text" name="productImageURL" className="grow w-full" placeholder="Product Image URL" {...register("productImageURL")} />
                            </label>
                        </div>
                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Product Name
                                    <input required defaultValue={productName} type="text" name="productName" className="grow w-full" placeholder="product Name" {...register("productName")} />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Product Brand
                                    <input required defaultValue={productBrand} type="text" name="productBrand" className="grow w-full" placeholder="product Brand" {...register("productBrand")} />
                                </label>
                            </div>
                        </div>
                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/2 ">
                                <label className="input input-bordered flex items-center gap-2">
                                    Query Title
                                    <input required defaultValue={queryTitle} type="text" name="queryTitle" className="grow w-full" placeholder="Query Title" {...register("queryTitle")} />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Boycotting Reason Details
                                    <input required defaultValue={boycottingReasonDetails} type="text" name="boycottingReasonDetails" className="grow w-full" placeholder="Boycotting Reason Details" {...register("boycottingReasonDetails")} />
                                </label>
                            </div>
                        </div>




                    </div>
                    <div className=" flex justify-center w-full">
                        <input type="submit" value="Update Query" className="btn  w-1/2  text-white bg-orange-400 " />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Update;