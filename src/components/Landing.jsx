import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
