// "use client";
// import Section1 from "@/Components/LandingPage/Section-1/Section1";
// import Section3 from "@/Components/LandingPage/section-3/Section3";
// import Section4 from "@/Components/LandingPage/section-4/Section4";
// import Section2Aux from "@/Components/LandingPage/section-aux/section2Aux";
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import "./style.css";
// import { ScrollTrigger } from "gsap/all";
// // import { Tween } from "gsap/gsap-core";
// gsap.registerPlugin(ScrollTrigger);
// const MultiCard = () => {
//   const panelRefs = useRef([]);
//   // const outerSectionRef = useRef([]);
//   // const innerSectionRef = useRef([]);
//   useEffect(() => {
//     const panel = panelRefs.current;

//     panel.forEach((panel, i) => {
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: panel,
//           start: "bottom bottom",
//           end:"top top",
//           scrub: true,
//           pin: true,
//           pinSpacing: false,
//         },
//       });
//       console.log("section",panel);
//       tl.fromTo(
//         panel,
//         {
//           scale: 1,
//         },
//         { scale: 0.5, opacity: 0.5, duration: 0.9 }
//       ).to(panel, { opacity: 0, duration: 0.1 });
//     });
//     //  const currentSection = sectionRef.current;
//     //  currentSection.pop();
//     // const sectionArray = gsap.utils.toArray(".section");
//     // currentSection.forEach((section,i)=>{
//     // console.log("inner",outerSectionRef);
//     // const anim = gsap.fromTo(
//     //     outerSectionRef.current,
//     //     {
//     //       scale: 1,
//     //     },
//     //     {
//     //       autoAlpha: 0,
//     //       scale: 0,
//     //       visibility: "hidden",
//     //     }
//     //   );

//     // let tl = gsap.to(sectionArray,{
//     //     scrollTrigger:{
//     //         trigger:innerSectionRef.current,
//     //         animation: anim ,
//     //         start:"bottom bottom",
//     //         end:"top top",
//     //         pin: true,
//     //         scrub: true,
//     //         pin: true,
//     //         pinSpacing: false,
//     //     }
//     // })

//     // tl.fromTo(sectionArray,{
//     //     scale:1
//     // },{
//     //     // autoAlpha: 0,
//     //       scale: 1.4,
//     //     //   visibility: "hidden",
//     // })

//     // const anim1 = gsap.fromTo(
//     //     section,
//     //     {
//     //       scale: 1,
//     //     },
//     //     {
//     //       autoAlpha: 0,
//     //       scale: 0.4,
//     //       visibility: "hidden",
//     //     }
//     //   );
//     //   ScrollTrigger.create({
//     //     trigger: (section),
//     //     // endTrigger: (".s2"),
//     //     animation: anim1,
//     //     start: "bottom bottom",
//     //     // end:"top top",
//     //     pin: true,

//     //     scrub: true,
//     //     pin: true,
//     //     pinSpacing: false,
//     //     // snap:1
//     //   });
//     //  })
//   }, []);
//   return (
//     <>
//       <div>
//       <div className="slides-wrapper">
//         <div ref={(el) => (panelRefs.current[0] = el)} className="panel">
//           <div className="panel-content">
//             <h1>Section 1</h1>
//             <img src="https://reactjs.org/logo-og.png" alt="React Logo" />
//           </div>
//         </div>
//         <div
//           ref={(el) => (panelRefs.current[1] = el)}
//           className="panel section-2"
//         >
//           <div className="panel-content height">
//             <div className="dd">
//               <h1>Section 2</h1>
//               <p>
//                 This section is supposed to be long and scrollable within before
//                 the next slide comes inThis section is supposed to be long and
//                 scrollable within before the next slide comes inThis section is
//                 supposed to be long and scrollable within before the next slide
//                 comes inThis section is supposed to be long and scrollable
//                 within before the next slide comes inThis section is supposed to
//                 be long and scrollable within before the next slide comes inThis
//                 section is supposed to be long and scrollable within before the
//                 next slide comes inThis section is supposed to be long and
//                 scrollable within before the next slide comes inThis section is
//                 supposed to be long and scrollable within before the next slide
//                 comes inThis section is supposed to be long and scrollable
//                 within before the next slide comes inThis section is supposed to
//                 be long and scrollable within before the next slide comes inThis
//                 section is supposed to be long and scrollable within before the
//                 next slide comes inThis section is supposed to be long and
//                 scrollable within before the next slide comes inThis section is
//                 supposed to be long and scrollable within before the next slide
//                 comes inThis section is supposed to be long and scrollable
//                 within before the next slide comes inThis section is supposed to
//                 be long and scrollable within before the next slide comes inThis
//                 section is supposed to be long and scrollable within before the
//                 next slide comes inThis section is supposed to be long and
//                 scrollable within before the next slide comes inThis section is
//                 supposed to be long and scrollable within before the next slide
//                 comes inThis section is supposed to be long and scrollable
//                 within before the next slide comes inThis section is supposed to
//                 be long and scrollable within before the next slide comes inThis
//                 section is supposed to be long and scrollable within before the
//                 next slide comes inThis section is supposed to be long and
//                 scrollable within before the next slide comes inThis section is
//                 supposed to be long and scrollable within before the next slide
//                 comes inThis section is supposed to be long and scrollable
//                 within before the next slide comes inThis section is supposed to
//                 be long and scrollable within before the next slide comes inThis
//                 section is supposed to be long and scrollable within before the
//                 next slide comes inThis section is supposed to be long and
//                 scrollable within before the next slide comes inThis section is
//                 supposed to be long and scrollable within before the next slide
//                 comes inThis section is supposed to be long and scrollable
//                 within before the next slide comes inThis section is supposed to
//                 be long and scrollable within before the next slide comes inThis
//                 section is supposed to be long and scrollable within before the
//                 next slide comes inThis section is supposed to be long and
//                 scrollable within before the next slide comes inThis section is
//                 supposed to be long and scrollable within before the next slide
//                 comes inThis section is supposed to be long and scrollable
//                 within before the next slide comes inThis section is supposed to
//                 be long and scrollable within before the next slide comes in
//               </p>
//             </div>
//           </div>
//         </div>
//         <div
//           ref={(el) => (panelRefs.current[2] = el)}
//           className="panel section-3"
//         >
//           <div className="panel-content">
//             <h1>Section 3</h1>
//           </div>
//         </div>
//         <div ref={(el) => (panelRefs.current[3] = el)} className="panel">
//           <div className="panel-content">
//             <h1>Section 4</h1>
//           </div>
//         </div>
//       </div>
//       <div className="nav">
//         <div className="logo">Nav</div>
//         <div className="nav-links">
//           <p>Link</p>
//           <p>Link</p>
//           <p>Link</p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default MultiCard;
