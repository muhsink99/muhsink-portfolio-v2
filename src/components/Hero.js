import * as React from "react"
import { Link } from 'gatsby';

import { navLinks } from '../../config';

const Hero = () => {
    const { links } = navLinks
    return (
        <div className="flex items-center min-h-screen">
            <section className="mx-auto container w-4/5">
                <h1 className="uppercase font-black text-lg">
                    Hi, my name is
                </h1>
                <h2 className="font-black text-5xl text-blue-500 mb-4">Muhsin Kumbay</h2>
                <p className="text-2xl w-3/5 mb-4">I'm a Computer Scientist based in London, UK specialising in building incredible web and mobile solutions</p>
                <button className="rounded shadow-md px-5 py-3 text-white font-extrabold bg-blue-400 transition duration-300 ease-in-out hover:bg-blue-200">Find out more</button>
            </section>
        </div>
    );
}

export default Hero;