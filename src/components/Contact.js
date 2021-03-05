import * as React from "react"
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

//                 <a href="mailto:kumbaymuhsin@gmail.com" className="flex justify-center btn-primary text-center mb-3"><FaEnvelope className="btn-icon" />E-Mail (kumbaymuhsin@gmail.com)</a>
const Contact = () => {
    return (
        <div id="contact" className="container mx-auto w-4/5">
            <section className="my-10">
                <h1 className="text-center font-bold text-4xl mb-3">
                    Contact
                </h1>
                <p className="text-lg text-center mb-5"><em className="font-bold">I'm no longer seeking opportunities</em>, but if you want to contact me, feel free via the following:</p>
                <div id="socials" className="flex flex-row justify-center">
                    <a className="p-5 bg-white rounded-full border mx-3 transition duration-300 ease-in-out hover:text-white hover:bg-blue-500" href="https://www.linkedin.com/in/muhsin-kumbay/" target=" _blank"><FaLinkedin /></a>
                    <a className="p-5 bg-white rounded-full border mx-3 transition duration-300 ease-in-out hover:text-white hover:bg-yellow-500" href="mailto:kumbaymuhsin@gmail.com" target=" _blank"><FaEnvelope /></a>
                    <a className="p-5 bg-white rounded-full border mx-3 transition duration-300 ease-in-out hover:text-white hover:bg-gray-500" href="https://github.com/muhsink99" target=" _blank"><FaGithub /></a>
                </div>
            </section>
        </div >
    );
}

export default Contact;