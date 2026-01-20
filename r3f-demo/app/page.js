"use client";
import React from "react";
import Hero from "./components/Hero";
import { motion } from "motion/react";
const page = () => {
  return (
    <div>
      <Hero />
      <motion.div
        className="w-full h-screen flex justify-center items-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>Hello World</h1>
      </motion.div>
    </div>
  );
};

export default page;
