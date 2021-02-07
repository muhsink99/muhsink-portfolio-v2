import * as React from "react"
import { Link } from 'gatsby';
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { initials } from '../../config';

const Footer = () => {
    return (
        <>
            <hr className="bg-blue-500" />
            <footer
                className="flex items-center justify-between py-6 px-12">
                <Link to="/" aria-label="home">
                    <h1 className="text-3xl font-bold">
                        {initials}
                        <span className="text-blue-500"> .</span>
                    </h1>
                </Link>
                <p>
                    <a href="https://icons8.com/icon/53562/database">Icons provided by Icons8</a>,
                    © Muhsin Kumbay, 2021
                 </p>
                <div id="socials" className="mb-2 flex flex-row">
                    <a href="https://github.com/muhsink99"><FaGithub className="icon-social" /></a>
                    <a href="https://www.linkedin.com/in/muhsin-kumbay/"><FaLinkedin className="icon-social" /></a>
                </div>
            </footer>
        </>
    );
}

export default Footer;