import * as React from "react"
import { Link } from 'gatsby';
import { FaLinkedin, FaGithub } from "react-icons/fa";

import { navLinks, initials } from '../../config';

const Footer = () => {
    const { menu } = navLinks

    return (
        <>
            <footer
                className="flex flex-col  items-center mx-auto py-6 px-12">
                <Link to="/" aria-label="home" className="my-2">
                    <h1 className="text-3xl font-bold">
                        {initials}
                        <span className="text-blue-500"> .</span>
                    </h1>
                </Link>
                <nav className="flex items-center my-2">
                    {menu.map(({ name, url }, key) => {
                        console.log(url);
                        return (
                            <Link
                                className=" transition duration-300 ease-in-out text-md px-3 py-2 rounded hover:bg-blue-50"
                                key={key}
                                to={url}
                            >
                                {name}
                            </Link>
                        )
                    })}
                </nav>
                <p className="my-1 text-center">
                    <a href="https://icons8.com/icon/53562/database">Icons provided by Icons8</a>,
                    © Muhsin Kumbay, 2021
                 </p>
                <div id="socials" className="mb-2 flex flex-row my-1">
                    <a href="https://github.com/muhsink99"><FaGithub className="icon-social" /></a>
                    <a href="https://www.linkedin.com/in/muhsin-kumbay/"><FaLinkedin className="icon-social" /></a>
                </div>
            </footer>
        </>
    );
}

export default Footer;