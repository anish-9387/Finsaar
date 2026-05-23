import React from "react";
import Hero from "./Hero.js";
import Team from "./Team.js";

import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

function AboutPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Team />
            <Footer />
        </div>
    );
}

export default AboutPage;