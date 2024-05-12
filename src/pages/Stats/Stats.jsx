import React from 'react';
import 'animate.css';

const Stats = () => {
    return (



        <div>
            <h1 className='lg:text-4xl font-bold text-center text-blue-400  animate__animated animate__backInUp'>Our products and tools enable people to ask, <br /> share at anywhere.</h1>
            <div>
                <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800 bg-gray-100">
                    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-default-600">

                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none text-center">58 million</p>
                                <p className="capitalize text-center">total questions and answers so far</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-default-600">

                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none text-center">15 years</p>
                                <p className="capitalize text-center">of trusted and high-quality information</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-default-600">

                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none text-center">14 seconds</p>
                                <p className="capitalize text-center">average time between new questions</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-default-600">

                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none text-center">51 billion</p>
                                <p className="capitalize text-center">times information has been reused</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Stats;