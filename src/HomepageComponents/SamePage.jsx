// import React from "react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";

// const SamePage = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start end", "end end"],
//   });

//   const animationOrder = {
//     initial: 0,
//     fadeInEnd: 0.15,
//     showParagraphOne: 0.25,
//     hideParagraphOne: 0.3,
//     showParagraphTwoStart: 0.35,
//     showParagraphTwoEnd: 0.4,
//     hideParagraphTwo: 0.5,
//     showLoadingScreenStart: 0.53,
//     showLoadingScreenEnd: 0.58,
//     createBranchStart: 0.65,
//     createBranchEnd: 0.7,
//     createBranchFadeInStart: 0.78,
//     createBranchFadeInEnd: 0.85,
//     endTextFadeInStart: 0.95,
//     endTextFadeInEnd: 1,
//   };

//   const opacity = useTransform(
//     scrollYProgress,
//     [
//       animationOrder.initial,
//       animationOrder.fadeInEnd,
//       animationOrder.createBranchEnd,
//       animationOrder.endTextFadeInStart,
//     ],
//     [0, 1, 1, 0]
//   );
//   const scale = useTransform(
//     scrollYProgress,
//     [
//       animationOrder.initial,
//       animationOrder.fadeInEnd,
//       animationOrder.showLoadingScreenEnd,
//       animationOrder.createBranchStart,
//     ],
//     [3, 1, 1, 0.5]
//   );
//   const x = useTransform(
//     scrollYProgress,
//     [
//       animationOrder.initial,
//       animationOrder.showParagraphOne,
//       animationOrder.hideParagraphOne,
//       animationOrder.showParagraphTwoStart,
//       animationOrder.showParagraphTwoEnd,
//       animationOrder.hideParagraphTwo,
//       animationOrder.showLoadingScreenStart,
//       animationOrder.showLoadingScreenEnd,
//       animationOrder.createBranchEnd,
//     ],
//     ["50%", "50%", "55%", "-50%", "-50%", "-55%", "0%", "0%", "-27%"]
//   );

//   return (
//     <motion.div
//       ref={targetRef}
//       style={{ opacity }}
//       className="  bg-black h-[600vh] w-full"
//     >
//       <div className="  bg-black sticky top-[10vh]">
//         <div className="  bg-black flex justify-center">
//           <motion.div
//             style={{ x, scale, opacity }}
//             className="  bg-black origin-top object-contain"
//           >
//             <motion.img
//               src={desktopMockup}
//               className="  bg-black h-[75vh] max-h-[45vw] w-auto rounded-lg"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default SamePage;
