import * as React from "react"
import { Link } from 'gatsby';

import { navLinks, initials } from '../../config';

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
                    © Muhsin Kumbay, 2021
            </p>
                <p>
                    social media icons go here
            </p>
            </footer>
        </>
    );
}

export default Footer;