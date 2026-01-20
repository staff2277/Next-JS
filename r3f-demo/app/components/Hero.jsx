import React from "react";
import { motion } from "motion/react";

const animation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 2,
      staggerChildren: 2,
      delayChildren: 3,
    },
  },
};
const itemAnimation = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Hero = () => {
  const fruits = ["orange", "apple", "mango", "banana", "papaya"];
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <motion.ul variants={animation} initial={"hidden"} animate={"visible"}>
        {fruits.map((item, i) => {
          return (
            <motion.li
              key={i}
              variants={itemAnimation}
              initial={"hidden"}
              animate={"visible"}
            >
              {item}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Hero;
