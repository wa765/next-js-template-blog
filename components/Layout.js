import { NextSeo } from "next-seo";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Layout(props) {
  const title = props.title;
  const description = props.description;
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <Navbar />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className="
            flex flex-col w-full pt-10
            px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
            pt-24
        "
      >
        {props.children}
      </motion.main>
    </div>
  );
}
