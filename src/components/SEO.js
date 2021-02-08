import React from "react";
import { Helmet } from 'react-helmet';

const SEO = () => {
    return (
        <Helmet>
            <title>Muhsin Kumbay</title>
            <meta charset="utf-8"></meta>
            <meta name="og:title" property="og:title" content="Muhsin Kumbay - Portfolio" />
            <meta name="description" content="A portfolio website to demonstrate Muhsin's various skills and projects."></meta>
            <link rel="canonical" href="muhsinkumbay.dev" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:image" content="/readme-image.png" />
        </Helmet>
    );
}

export default SEO;