import React from "react";
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div
            className="min-h-full max-w-screen py-3 grid"
            style={{ gridTemplateRows: "auto 1fr auto auto" }}>
            <Header />
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}

export default Layout;