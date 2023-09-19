import { useContext, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import noteContext from "../context/notes/noteContext";

const Collaboration3 = () => {
  const targetRef = useRef(null);
  const propData = useContext(noteContext);
  const handleClick = () => {
    propData.setHomePageNavbarVisibility(true);
  };

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.8, 1], [1, 1, 1, 1]);
  const x = useTransform(scrollYProgress, [0.1, 1], ["0%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 0.8], [1, 0.9, 0.1]);

  const scaleText = useTransform(scrollYProgress, [0.1, 0.5], [1, 4]);
  const xText = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity }}
      className="  bg-black h-[100vh] w-full"
    >
      <div className="  bg-black sticky top-[10vh]">
        <motion.div
          style={{ opacity }}
          className="  bg-black flex justify-center"
        >
          <motion.div
            style={{ x, scale, opacity }}
            className="  bg-black origin-top object-contain"
          >
            <p className="px-12 text-2xl md:text-3xl text-white text-center pt-32 bg-black ">
              Your One stop solution for all your academic needs!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    // <section className="  bg-black bg-black w-[80%] md:w-[70%]  flex items-center justify-center">
    //   {/* desktop mockup */}
    //   <div className="  bg-black h-[300vh]">
    //     <div className="  bg-black object-contain sticky  top-[10vh] w-full bg-black h-screen flex justify-center items-center  ">
    //       <img className="  bg-black rounded-md " src={desktopMockup} alt="" />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Collaboration3;
