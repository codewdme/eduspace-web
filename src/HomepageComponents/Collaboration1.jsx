import { useRef } from "react";
import desktopMockup from "../assets/desktopMockup.png";
import { useScroll, useTransform, motion } from "framer-motion";

const Collaboration = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.8, 1],
    [1, 1.6, 1.6, 1]
  );
  const x = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "70%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 0.8], [1, 0.9, 0.1]);

  const scaleText = useTransform(scrollYProgress, [0.1, 0.5], [1, 4]);
  const xText = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity }}
      className="  bg-black h-[450vh] md:h-[600vh] w-full"
    >
      <div className="  bg-black sticky top-[10vh]">
        <motion.div
          style={{ opacity }}
          className="  bg-black flex justify-center"
        >
          <motion.div
            style={{ x, scale, opacity }}
            className=" bg-black origin-top object-contain flex justify-center items-center md:items-start "
          >
            <p className="md:px-4 text-center text-xs md:text-3xl text-white md:text-center  md:pt-32 bg-black ">
              Meet JU NEXUS
            </p>
          </motion.div>
          <motion.div
            style={{ x, scale, opacity }}
            className="  bg-black origin-top object-contain w-[full]"
          >
            <motion.img
              src={desktopMockup}
              className="  bg-black h-[75vh] max-h-[45vw] w-auto rounded-lg"
            />
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

export default Collaboration;
