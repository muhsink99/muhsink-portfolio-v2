import * as React from "react"
import { Link } from 'gatsby';
import { FaLinkedin } from "react-icons/fa";

import { initials } from '../../config';

const Contact = () => {
    return (
        <div id="contact" className="container mx-auto w-4/5">
            <div className="my-10">
                <section>
                    <h1 className="uppercase font-bold text-4xl mb-3">
                        Contact
                    </h1>
                    <div className="text-xl flex flex-col mx-auto">
                        <p className="text-left lg:text-center mb-5">Interested? Feel free to contact me via the following:</p>
                        <a href="linkedin.com/muhsin-kumbay" class="btn-primary flex-shrink min-w-64 max-w-128 text-center mb-3">LinkedIn</a>
                        <a href="linkedin.com/muhsin-kumbay" class="btn-primary flex-shrink min-w-64 max-w-128 text-center mb-3">E-Mail (kumbaymuhsin@gmail.com)</a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;