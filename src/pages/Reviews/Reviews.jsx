import React from 'react';
import 'animate.css';

const Reviews = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">

                            <h2 className="text-4xl font-bold animate__animated animate__backInLeft text-blue-400">Reviews -- given by the users</h2>

                            <p className="dark:text-gray-600">Just ask the question (properly) and don't mind the douches.</p>
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="transform p-6 rounded shadow-md dark:bg-gray-50 transition duration-300 hover:translate-x-4">
                                        <p>"Informatica helped us to connect e-commerce and retail stores seamlessly."</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="transform p-6 rounded shadow-md dark:bg-gray-50 transition duration-300 hover:translate-x-4">
                                        <p>Informatica is my go-to for searching alternative products! it's like having a round the clock mentor
                                            s. highly recommended.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="transform p-6 rounded shadow-md dark:bg-gray-50 transition duration-300 hover:translate-x-4">
                                        <p> I use Informatica whenever I need. I benefit from the site all the time. Yes, newcomers might find the site intimidating and some might find that their questions are unanswered or even downvoted. This is because Informatica is powered by its users and the site users can choose to answer or ignore questions. </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="transform p-6 rounded shadow-md dark:bg-gray-50 transition duration-300 hover:translate-x-4">
                                        <p>Nowadays whenever I have a question they are the first place I go. Often I find an answer instantly because the same question has been asked and answered before. If not, I ask my question in a clear and focused way and usually get an answer in a few hours to a few days.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                            <div>
                                                <p className="text-lg font-semibold">Leroy Jenkins</p>
                                                <p className="text-sm dark:text-gray-600">CTO of Company Co.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;