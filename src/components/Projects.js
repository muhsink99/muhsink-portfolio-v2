import * as React from "react"
import {
    DiSqllite, DiHtml5, DiDjango, DiCss3, DiBootstrap, DiReact, DiFirebase, DiDart,
    DiSass, DiJavascript, DiPython
} from "react-icons/di";
import { FaLink, FaGithub, FaTimesCircle } from "react-icons/fa";

const Projects = () => {
    return (
        <div id="projects" className="min-h-screen">
            <section className="mx-auto w-5/5 md:w-4/5 my-5 mb-10 px-5g">
                <h1 className="text-center font-bold text-4xl mb-5">
                    Projects
                </h1>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mx-auto mb-5">
                    <div className="mx-auto text-center">
                        <h2 className="font-bold text-blue-400 text-2xl mb-2">Backlog Tracker</h2>
                        <div className="flex mb-3 justify-center">
                            <div className="technology-card"><DiSqllite className="icon-standard" /><span className="text-xs">SQLlite</span></div>
                            <div className="technology-card"><DiHtml5 className="icon-standard" /><span className="text-xs">HTML5</span></div>
                            <div className="technology-card"><DiPython className="icon-standard" /><span className="text-xs">Python</span></div>
                            <div className="technology-card"><DiDjango className="icon-standard" /><span className="text-xs">Django</span></div>
                            <div className="technology-card"><DiCss3 className="icon-standard" /><span className="text-xs">CSS3</span></div>
                            <div className="technology-card"><DiBootstrap className="icon-standard" /><span className="text-xs">Bootstrap</span></div>
                        </div>
                        <p className="text-lg mb-3">Built to help its user keep track of various shows from various streaming services</p>
                        <div id="project-buttons" className="flex justify-center">
                            <a href="https://muhsink99.pythonanywhere.com/" className="flex btn-primary mr-3"><FaLink className="btn-icon" />Live Link</a>
                            <a href="https://github.com/muhsink99/backlog_tracker" className="flex btn-primary mr-3"><FaGithub className="btn-icon" />Github</a>
                        </div>
                        <div className="mt-5">
                            <img className="rounded mx-auto w-400 h-400" src={require("/src/images/Projects/project-1-1.png")}></img>
                        </div>
                    </div>

                    <div className="mx-auto text-center">
                        <h2 className="font-bold text-blue-400 text-2xl mb-2">Recipe Book</h2>
                        <div className="flex flex-wrap mb-3 justify-center">
                            <div className="technology-card"><DiReact className="icon-standard" /><span className="text-xs">React</span></div>
                            <div className="technology-card"><DiHtml5 className="icon-standard" /><span className="text-xs">HTML5</span></div>
                            <div className="technology-card"><DiCss3 className="icon-standard" /><span className="text-xs">CSS3</span></div>
                            <div className="technology-card"><DiSass className="icon-standard" /><span className="text-xs">Sass</span></div>
                            <div className="technology-card"><DiBootstrap className="icon-standard" /><span className="text-xs">Bootstrap</span></div>
                            <div className="technology-card"><DiFirebase className="icon-standard" /><span className="text-xs">Firebase</span></div>
                            <div className="technology-card"><DiJavascript className="icon-standard" /><span className="text-xs">Javascript</span></div>
                            <div className="technology-card"><DiJavascript className="icon-standard" /><span className="text-xs">Javascript</span></div>
                        </div>
                        <p className="text-lg mb-3">Allows its user to compile a list of recipes in one contained place. </p>
                        <div id="project-buttons" className="flex justify-center">
                            <a href="https://github.com/muhsink99/recipe-book" className="flex btn-primary mr-3"><FaGithub className="btn-icon" />Github</a>
                        </div>
                        <div className="mt-5">
                            <img className="rounded mx-auto" src={require("/src/images/Projects/project-2-1.png")}></img>
                        </div>
                    </div>

                    <div className="mx-auto text-center">
                        <h2 className="font-bold text-blue-400 text-2xl mb-2">Remote Healthcare Tracker</h2>
                        <div className="flex mb-3 justify-center">
                            <div className="technology-card"><DiDart className="icon-standard" /><span className="text-xs">Dart</span></div>
                            <div className="technology-card"><DiFirebase className="icon-standard" /><span className="text-xs">Firebase</span></div>
                        </div>
                        <p className="text-lg mb-3">A cross-platform healthcare app to allow clinicians to keep track of opt-in patients for vital sign recordings + more. Made with the goal to help reduce cardivascular disease risk </p>
                        <div id="project-buttons" className="flex justify-center">
                            <span className="flex btn-gray mr-3"><FaTimesCircle className="btn-icon" />Closed Source</span>
                        </div>
                        <div className="mt-5">
                            <img className="rounded mx-auto w-64 h-128" src={require("/src/images/Projects/project-3-1.png")} ></img>
                        </div>
                    </div>

                    <div className="mx-auto text-center">
                        <h2 className="font-bold text-blue-400 text-2xl mb-2">Portfolio Website</h2>
                        <div className="flex mb-3 justify-center">
                            <div className="technology-card"><DiHtml5 className="icon-standard" /><span className="text-xs">HTML5</span></div>
                            <div className="technology-card"><DiCss3 className="icon-standard" /><span className="text-xs">CSS3</span></div>
                            <div className="technology-card"><DiSass className="icon-standard" /><span className="text-xs">Sass</span></div>
                            <div className="technology-card"><DiReact className="icon-standard" /><span className="text-xs">React</span></div>
                            <div className="technology-card"><DiJavascript className="icon-standard" /><span className="text-xs">Javascript</span></div>
                        </div>
                        <p className="text-lg mb-3">A website to show my various projects and skills</p>
                        <div id="project-buttons" className="flex justify-center">
                            <a href="https://github.com/muhsink99/muhsink-portfolio-v2" className="flex btn-primary mr-3"><FaGithub className="btn-icon" />Github</a>
                        </div>
                        <div className="my-auto">
                            <img className="rounded mx-auto w-400 h-400" src={require("/src/images/Projects/project-4-1.png")} ></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;

