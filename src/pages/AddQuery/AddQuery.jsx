import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';
const AddQuery = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,

    } = useForm();

    const onSubmit = data => {
        console.log(data);
        // const newTourist = data;
        // console.log(newTourist);
        // const { } = data;
        // const { email } = user;
        // console.log(email)
        // const time = Date.now()
        // console.log(time)
        // const newPost = {}

        // send data
        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newTourist)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             swal({
        //                 icon: "success",
        //                 title: "Tourist Spot saved successfully",
        //             });
        //         }
        //     })

    }

    return (
        <div>
            <h1 className='text-center text-xl text-blue-400 font-bold mb-6'>Add Your Query Here</h1>


            <div>

                <form onSubmit={handleSubmit(onSubmit)} className=" ">
                    <div className=" grid gap-3 w-full justify-center mb-3">
                        <div className="form-control ">
                            <label className="input input-bordered flex items-center gap-2">
                                Product Image URL                      <input type="text" name="productImageURL" className="grow w-full" placeholder="Product Image URL" {...register("productImageURL")} />
                            </label>
                        </div>
                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Product Name
                                    <input type="text" name="productName" className="grow w-full" placeholder="product Name" {...register("productName")} />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Product Brand
                                    <input type="text" name="productBrand" className="grow w-full" placeholder="product Brand" {...register("productBrand")} />
                                </label>
                            </div>
                        </div>
                        <div className="grid lg:flex gap-3 w-full">
                            <div className="form-control lg:w-1/2 ">
                                <label className="input input-bordered flex items-center gap-2">
                                    Query Title
                                    <input type="text" name="queryTitle" className="grow w-full" placeholder="Query Title" {...register("queryTitle")} />
                                </label>
                            </div>
                            <div className="form-control lg:w-1/2">
                                <label className="input input-bordered flex items-center gap-2">
                                    Boycotting Reason Details
                                    <input type="text" name="boycottingReasonDetails" className="grow w-full" placeholder="Boycotting Reason Details" {...register("boycottingReasonDetails")} />
                                </label>
                            </div>
                        </div>




                    </div>
                    <div className=" flex justify-center w-full">
                        <input type="submit" value="Add Query" className="btn  w-1/2  text-white bg-orange-400 " />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddQuery;