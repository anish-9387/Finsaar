import React from "react";
import Hero from "./Hero.js";
import Brokerage from "./Brokerage.js";

import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

function PricingPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Brokerage />
            <Footer />
        </div>
    );
}

export default PricingPage;