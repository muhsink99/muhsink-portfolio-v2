import React from "react";
import { Helmet } from 'react-helmet';

const SEO = () => {
    return (
        <Helmet>
            <title>Muhsin Kumbay</title>
            <meta name="description" content="A portfolio website to demonstrate Muhsin's various skills and projects."></meta>
            <meta property="og:image" content={"/readme-image.png"} />
        </Helmet>
    );
}

export default SEO;