import * as React from "react"
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

//                 <a href="mailto:kumbaymuhsin@gmail.com" className="flex justify-center btn-primary text-center mb-3"><FaEnvelope className="btn-icon" />E-Mail (kumbaymuhsin@gmail.com)</a>
const Contact = () => {
    return (
        <div id="contact" className="container mx-auto w-4/5">
            <section className="my-10">
                <h1 className="text-center font-bold text-4xl mb-3">
                    Contact
                </h1>
                <p className="text-lg text-center mb-5">Interested? Feel free to contact me via the following:</p>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                    <div id="contact-form" className=" my-auto mx-10">
                        <h2 className="my-3">Send an e-mail to me: </h2>
                        <a href="mailto:kumbaymuhsin@gmail.com" className="flex justify-center btn-primary text-center mb-3">Send message</a>
                    </div>
                    <div id="socials" className="my-auto mx-10">
                        <h2 className="my-3">Socials:</h2>
                        <a href="https://www.linkedin.com/in/muhsin-kumbay/" className="flex justify-center btn-primary text-center mb-3" target="_blank"><FaLinkedin className="btn-icon" />LinkedIn</a>
                    </div>
                </div>

            </section>
        </div >
    );
}

export default Contact;