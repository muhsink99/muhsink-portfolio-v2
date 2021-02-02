import * as React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="flex items-center min-h-screen">
            <section className="mx-auto container w-4/5">
                <h1 className="uppercase font-black text-lg">
                    Hi, my name is
                </h1>
                <h2 className="font-black text-5xl text-blue-500 mb-2">Muhsin Kumbay</h2>
                <div id="socials" className="mb-2 flex flex-row">
                    <a href="https://github.com/muhsink99"><FaGithub className="icon-social" /></a>
                    <a href="https://www.linkedin.com/in/muhsin-kumbay/"><FaLinkedin className="icon-social" /></a>
                </div>
                <p className="text-2xl w-3/5 mb-4">I'm a Computer Scientist based in London, UK specialising in building incredible web and mobile solutions</p>
                <a href="#about" className="btn-primary">Find out more</a>
            </section>
        </div>
    );
}

export default Hero;