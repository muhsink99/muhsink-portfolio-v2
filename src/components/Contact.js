import * as React from "react"
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="container mx-auto w-4/5">
            <section className="my-10">
                <h1 className="uppercase font-bold text-4xl mb-3">
                    Contact
                </h1>
                <p className="text-left lg:text-center mb-5">Interested? Feel free to contact me via the following:</p>
                <a href="https://www.linkedin.com/in/muhsin-kumbay/" class="flex justify-center btn-primary text-center mb-3"><FaLinkedin className="mr-3 my-auto" />LinkedIn</a>
                <a href="mailto:kumbaymuhsin@gmail.com" class="flex justify-center btn-primary text-center mb-3"><FaEnvelope className="mr-3 my-auto" />E-Mail (kumbaymuhsin@gmail.com)</a>
            </section>
        </div>
    );
}

export default Contact;