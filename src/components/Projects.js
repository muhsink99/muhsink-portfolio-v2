import * as React from "react"
import { DiSqllite, DiHtml5, DiDjango, DiCss3, DiBootstrap } from "react-icons/di";
import { FaLink, FaGithub } from "react-icons/fa";

//TODO: add images for projects 

const Projects = () => {
    return (
        <div className="flex min-h-screen">
            <section className="mx-auto container w-4/5">
                <h1 className="uppercase font-bold text-4xl mb-10">
                    projects
                </h1>
                <div className="container grid lg:grid-cols-2 md:grid-cols-1 gap-8 mx-auto mb-5">
                    <div>
                        <h2 className="font-bold text-blue-400 text-2xl mb-2">Backlog Tracker</h2>
                        <div className="flex mb-3">
                            <div className="technology-card"><DiSqllite className="w-4 h-4 mr-1" /><span className="text-xs">SQLlite</span></div>
                            <div className="technology-card"><DiHtml5 className="w-4 h-4 mr-1" /><span className="text-xs">HTML5</span></div>
                            <div className="technology-card"><DiDjango className="w-4 h-4 mr-1" /><span className="text-xs">Django</span></div>
                            <div className="technology-card"><DiCss3 className="w-4 h-4 mr-1" /><span className="text-xs">CSS3</span></div>
                            <div className="technology-card"><DiBootstrap className="w-4 h-4 mr-1" /><span className="text-xs">Bootstrap</span></div>
                        </div>
                        <p className="text-lg mb-3">Built to help its user keep track of various shows from various streaming services</p>
                        <div id="project-buttons" className="flex">
                            <a href="https://muhsink99.pythonanywhere.com/" className="flex btn-primary mr-3"><FaLink className="mr-3" />Live Link</a>
                            <a href="https://github.com/muhsink99/backlog_tracker" className="flex btn-primary mr-3"><FaGithub className="mr-3" />Github</a>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Projects;

