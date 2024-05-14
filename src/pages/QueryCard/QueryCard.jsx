import React from 'react';

const QueryCard = ({ query }) => {
    const { _id, productImageURL, boycottingReasonDetails, productBrand, productName, queryTitle, postedTimestamp, displayName, email, photoURL } = query;
    // console.log(query)
    return (
        <div>
            <div className="rounded-md shadow-md h-full  dark:bg-gray-50 dark:text-gray-800">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={photoURL} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">{displayName}</h2>
                            <span className="inline-block text-xs leading-none dark:text-gray-600">{email}</span>
                        </div>
                    </div>
                    <h3>{postedTimestamp}</h3>
                </div>
                <div className="grid items-center justify-between">

                    <p className='text-center font-bold'>{productName}, <span className='font-thin'>From: </span> {productBrand}</p>
                </div>
                <img src={productImageURL} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                <div className="p-3">

                    <div className="grid items-center pt-3 pb-1">
                        <h1 className='text-xl font-bold mb-3'>{queryTitle}</h1>
                        <p>Reason:  {boycottingReasonDetails}</p>
                    </div>
                    <div className="space-y-3  ">
                        <div className='lg:flex grid justify-center gap-2'>
                            <button className='btn'>View Details</button>
                            <button className='btn text-white  bg-orange-400'>Update Query</button>
                            <button className='btn'>Delete</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;