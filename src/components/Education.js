import * as React from "react"

const Education = () => {
    return (
        <div id="education">
            <section className="my-5 mb-10 mx-auto container w-4/5">
                <h1 className="text-center font-bold text-4xl mb-3">
                    Education
                </h1>
                <div className="flex mb-5">
                    <img
                        className="w-12 h-12 rounded"
                        src="https://upload.wikimedia.org/wikipedia/commons/1/14/King%27s_College_London_logo.svg" alt="kcl"></img>
                    <span className="mx-5 my-3 text-extrabold">King's College London</span>
                </div>
                <div className="container grid lg:grid-cols-3 md:grid-cols-1 gap-8 mx-auto mb-5">
                    <div className="relative pt-1 lg:col-span-3">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-s font-extrabold inline-block uppercase text-red-600 bg-white-200">
                                    BSc Computer Science (Software Engineering) - First Class Honours
                                 </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-red-600">
                                    79%
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                            <div style={{ width: "79%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-s font-extrabold inline-block uppercase text-red-600 bg-white-200">
                                    Individual project - Year 3
                                 </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-red-600">
                                    80%
                                </span>
                            </div>
                        </div>
                        <div className=" overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                            <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-s font-extrabold inline-block uppercase text-red-600 bg-white-200">
                                    Final Year Project - Year 2
                                 </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-red-600">
                                    96%
                                </span>
                            </div>
                        </div>
                        <div className=" overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                            <div style={{ width: "96%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-s font-extrabold inline-block uppercase text-red-600 bg-white-200">
                                    Software Architecture and Design - Year 3
                                 </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-red-600">
                                    86%
                                </span>
                            </div>
                        </div>
                        <div className=" overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                            <div style={{ width: "86%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                        </div>
                    </div>
                </div>

                <div className="flex mb-5">
                    <img
                        className="w-12 h-12 rounded"
                        src="https://www.edarabia.com/wp-content/uploads/2018/04/harris-city-academy-crystal-palace-croydon-london.jpg" alt="harris" />
                    <span className="mx-5 my-3 text-extrabold">Harris City Academy Crystal Palace</span>
                </div>
                <div className="container grid lg:grid-cols-3 md:grid-cols-1 gap-8 mx-auto mb-5">
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between ">
                            <div>
                                <span className="text-s font-extrabold inline-block uppercase text-green-600 bg-white-200">
                                    A-Levels: Mathematics (A*), Further Mathematics (B), Economics (B)
                                 </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                            <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                        </div>
                    </div>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between ">
                            <div>
                                <span className="text-s font-extrabold inline-block uppercase text-green-600 bg-white-200">
                                    GCSES: 11 A*-C including Mathematics (A*) and English Language (B)
                                 </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                            <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Education;