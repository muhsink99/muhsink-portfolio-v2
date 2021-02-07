import React from "react";
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <head>
                <meta name="viewport" content="width=1060px, maximum-scale=1.0" />
            </head>
            <div
                className="min-h-full max-w-screen py-3 grid"
                style={{ gridTemplateRows: "auto 1fr auto auto" }}>
                <Header />
                <main>{children}</main>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Layout;