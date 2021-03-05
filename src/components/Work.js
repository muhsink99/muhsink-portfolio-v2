import * as React from "react"
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

//                 <a href="mailto:kumbaymuhsin@gmail.com" className="flex justify-center btn-primary text-center mb-3"><FaEnvelope className="btn-icon" />E-Mail (kumbaymuhsin@gmail.com)</a>
const Work = () => {
    return (
        <div id="work" className="container mx-auto w-4/5">
            <section className="my-10">
                <h1 className="text-center font-bold text-4xl mb-5">
                    Work
                </h1>
                <div className="flex justify-between flex-col">
                    <div className="flex flex-col md:flex-row justify-between gap-x-10 gap-y-5">
                        <img className="w-24 h-24 rounded self-center" src={require("/src/images/open-reply.jpeg")}></img>
                        <div className="self-center mx-auto lg:w-3/5">
                            <h2 className="text-center">Open Reply - Graduate Full-Stack Web Developer</h2>
                            <p className="text-center">
                                Currently work as a full-stack web developer at Open Reply UK, a consultancy focused on the digital experience & e-commerce. Primarily work with PHP.
                            </p>
                        </div>
                        <em className="self-center">Mar 2021 - Present</em>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Work