"use client";

import Section1 from "@/Components/LandingPage/Section-1/Section1";
// import Section2 from "@/Components/LandingPage/Section-2/Section2";
import Section3 from "@/Components/LandingPage/section-3/Section3";
import Section4 from "@/Components/LandingPage/section-4/Section4";
import React, { useRef, useEffect } from "react";
import "./style.css";
import dynamic from "next/dynamic";

import { gsap } from "gsap/dist/gsap";
import Section2Aux from "@/Components/LandingPage/section-aux/section2Aux";
// import { CSSPlugin } from "gsap";
// const gsap = dynamic(() => import(gsap).then((a) => a.gsap), {ssr: false});
// const ScrollTrigger = dynamic(()=> import(ScrollTrigger).then((b)=>b.ScrollTrigger), {ssr:false});
// const CSSPlugin = dynamic(()=> import(CSSPlugin).then((c)=>c.CSSPlugin),{ssr:false})
// import { ScrollTrigger, CSSPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { CSSPlugin } from "gsap/dist/CSSRulePlugin";
gsap.registerPlugin(ScrollTrigger);
const HomePage = () => {
  const root = useRef();
  const q = gsap.utils.selector(root);
  // const sections = gsap.utils.toArray(".section");

  useEffect(() => {


     
    const anim1 = gsap.fromTo(
      (".s1"),
      {
        scale: 1,
      },
      {
        autoAlpha: 0,
        scale: 0.4,
        visibility: "hidden",
      }
    );
    const anim2 = gsap.fromTo(
      (".s2"),
      {
        scale: 1,
      },
      {
        autoAlpha: 0,
        scale: 0.4,
        visibility: "hidden",
      }
    );
    const anim3 = gsap.fromTo(
      (".s3"),
      {
        scale: 1,
      },
      {
        autoAlpha: 0,
        scale: 0,
        visibility: "hidden",
      }
    );
    const anim4 = gsap.to((".s4"), {
      // autoAlpha:0,
      // duration:0.1,
      // scale: 0.1,
      // visibility:"hidden"
    });
    ScrollTrigger.create({
      trigger: (".s1"),
      endTrigger: (".s2"),
      animation: anim1,
      start: "bottom bottom",
      // end:"top top",
      pin: true,

      scrub: true,
      pin: true,
      pinSpacing: false,
      // snap:1
    }),
      ScrollTrigger.create({
        trigger: (".s2"),
        endTrigger: (".s3"),
        animation: anim2,
        start: "bottom bottom",
        // end:"top top",
        // markers: true,
        duration: 0.1,
        pin: true,
        scrub: true,
        pin: true,
        pinSpacing: false,
        // snap:1
      }),
      ScrollTrigger.create({
        trigger: (".s3"),
        endTrigger: (".s4"),
        animation: anim3,
        start: "bottom bottom",
        // markers: true,
        scrub: true,
        duration: 0.1,
        pin: true,
        pinSpacing: false,
        // snap:1
      }),
      ScrollTrigger.create({
        trigger: (".s4"),

        animation: anim4,
        start: "bottom bottom",
        // markers: true,
        pin: true,
        scrub: true,

        pin: true,
        pinSpacing: false,
        // snap:1
      });
  }, [q]);
  return (
    <>
      <div className="HomePage" ref={root}>
        <div className="s1">
          <Section1 />
        </div>
        <div className="s2">
          <Section2Aux />
        </div>
        <div className="s3 ">
          <Section3 />
        </div>
        <div className="s4">
          <Section4 />
        </div>
      </div>
    </>
  );
};

export default HomePage;
