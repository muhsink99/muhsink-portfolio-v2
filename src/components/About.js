import * as React from "react"

const About = () => {
    return (
        <div id="about" className="container grid sm:grid-cols-1 lg:grid-cols-2 w-4/5 mx-auto">
            <div className="my-10">
                <img
                    className="rounded w-96 h-96"
                    src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="about"></img>
            </div>
            <div className="mx-auto my-10">
                <section>
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