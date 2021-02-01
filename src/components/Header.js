import * as React from "react"
import { Link } from 'gatsby';

import { navLinks, initials } from '../../config';

const Header = () => {
    const { menu } = navLinks

    return (
        <header
            className="flex items-center justify-between py-6 px-12 ">
            <Link to="/" aria-label="home">
                <h1 className="text-3xl font-bold">
                    {initials}
                    <span className="text-blue-500"> .</span>
                </h1>
            </Link>
            <nav className="flex items-center">
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
        </header>
    );
}

export default Header