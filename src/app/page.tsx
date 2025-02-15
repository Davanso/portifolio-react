"use client";

import { navItems } from "../../data";


import Grid from "../../components/Grid";
import Footer from "../../components/Footer";
import Approach from "../../components/Approach";
import Experience from "../../components/Experience";
import Hero from "../../components/Hero";
import { FloatingNav } from "../../components/ui/FloatingNavBar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;