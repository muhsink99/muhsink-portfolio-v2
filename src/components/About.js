import * as React from "react"

import {
    DiSqllite, DiHtml5, DiDjango, DiCss3, DiBootstrap, DiReact, DiFirebase, DiDart,
    DiSass, DiJavascript, DiPython, DiNodejs, DiMongodb, DiMysql
} from "react-icons/di";

const About = () => {
    return (
        <div id="about" className="container grid sm:grid-cols-1 lg:grid-cols-1 w-4/5 mx-auto">
            <div className="mx-auto my-10">
                <section>
                    <h1 className="text-center font-bold text-4xl mb-3">
                        About
                    </h1>
                    <p className="text-2xl md:text-center w-4/5 mx-auto mb-10">
                        I'm a self-driven Computer Scientist specialising in web and mobile app development.
                        Work in both front-end and back-end development and always keen to learn new technologies.
                    </p>
                    <div className="container grid sm:grid-cols-1 lg:grid-cols-3 mx-auto">
                        <div className="flex flex-col mx-1 mb-5 rounded bg-white px-3 py-3 shadow-sm border">
                            <h2 className="text-center font-black text-2xl mb-3 text-blue-500">Front-End</h2>
                            <img src="https://img.icons8.com/ultraviolet/40/000000/media-queries.png" className="w-12 h-12 mb-2 mx-auto" />
                            <p className="text-lg text-center mb-2">Building responsive and performance-driven websites </p>
                            <div id="icons" className="flex flex-row mx-auto">
                                <DiHtml5 className="icon-medium"></DiHtml5>
                                <DiCss3 className="icon-medium"></DiCss3>
                                <DiBootstrap className="icon-medium"></DiBootstrap>
                                <DiSass className="icon-medium"></DiSass>
                                <DiReact className="icon-medium"></DiReact>
                                <DiDjango className="icon-medium"></DiDjango>
                            </div>
                        </div>
                        <div className="flex flex-col mx-1 mb-5 rounded bg-white px-3 py-3 shadow-sm border">
                            <h2 className="text-center font-black text-2xl mb-3 text-blue-500">Back-End</h2>
                            <img src="https://img.icons8.com/ultraviolet/40/000000/root-server.png" className="w-12 h-12 mb-2 mx-auto" />
                            <p className="text-lg text-center mb-2">Implement servers or use modern serverless technologies </p>
                            <div id="icons" className="flex flex-row mx-auto">
                                <DiJavascript className="icon-medium"></DiJavascript>
                                <DiFirebase className="icon-medium"></DiFirebase>
                                <DiPython className="icon-medium"></DiPython>
                                <DiNodejs className="icon-medium"></DiNodejs>
                                <DiDart className="icon-medium"></DiDart>
                            </div>
                        </div>
                        <div className="flex flex-col mx-1 mb-5 rounded bg-white px-3 py-3 shadow-sm border">
                            <h2 className="text-center font-black text-2xl mb-3 text-blue-500" >Databases</h2>
                            <img src="https://img.icons8.com/ultraviolet/40/000000/database.png" className="w-12 h-12 mb-2 mx-auto" />
                            <p className="text-lg text-center mb-2">Understanding the correct database technology to use in each project is vital </p>
                            <div id="icons" className="flex flex-row mx-auto">
                                <DiSqllite className="icon-medium"></DiSqllite>
                                <DiMongodb className="icon-medium"></DiMongodb>
                                <DiFirebase className="icon-medium"></DiFirebase>
                                <DiMysql className="icon-medium"></DiMysql>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;