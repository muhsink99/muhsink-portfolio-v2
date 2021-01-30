import * as React from "react"
import { Link } from 'gatsby';

import { navLinks } from '../../config';

const About = () => {
    return (
        <div id="about" class="grid sm:grid-cols-1 lg:grid-cols-2">
            <div class="mx-auto mx-10 my-5 ">
                <img
                    class="rounded mx-auto w-96 h-96"
                    src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"></img>
            </div>
            <div>
                <section class=" mx-auto my-5 mx-10 container w-4/5 px-5 py-5">
                    <h1 className="uppercase font-bold text-4xl mb-3">
                        About
                   </h1>
                    <p className="text-xl">
                        I'm a passionate, fast-learning full-stack web developer dedicated to building modern and responsive websites using a variety of technologies with a keen interest in mobile app development as well. Having recently graduated with a First Class Honours in Computer Science (Software Engineering) from King's College London, I'm currently seeking full-time work opportunities to further my skills
                     </p>
                </section>
            </div>
        </div>
    );
}

export default About;