"use client";
gsap.registerPlugin(ScrollTrigger, CSSPlugin);
import Section1 from "@/Components/LandingPage/Section-1/Section1";
// import Section2 from "@/Components/LandingPage/Section-2/Section2";
import Section3 from "@/Components/LandingPage/section-3/Section3";
import Section4 from "@/Components/LandingPage/section-4/Section4";
import React, { useRef, useEffect } from "react";
import "./style.css";
import { gsap } from "gsap";
import {  ScrollTrigger, CSSPlugin } from "gsap/all";
import Section2Aux from "@/Components/LandingPage/section-aux/section2Aux";
const HomePage = () => {
  const root = useRef();
  const q = gsap.utils.selector(root);
  const sections = gsap.utils.toArray(".section");
  
  useEffect(() => {

    
    const anim1 = gsap.fromTo(q(".s1"), 
    {      
      scale: 1
    },{
      autoAlpha:0,
      scale: 0.4,
      visibility:"hidden"
    });
    const anim2 = gsap.fromTo(q(".s2"), 
    {
      scale: 1
    },{
      autoAlpha:0, 
      scale: 0.4,
      visibility:"hidden"
    });
    const anim3 = gsap.fromTo(q(".s3"), 
    {
      scale: 1,
    },{
      autoAlpha:0,
      scale: 0,
      visibility:"hidden"
    });
    const anim4 = gsap.to(q(".s4"),{
      // autoAlpha:0,
      // duration:0.1,
      // scale: 0.1,
      // visibility:"hidden"
    });
    ScrollTrigger.create({
      trigger: q(".s1"),
      endTrigger:q(".s2"),
      animation: anim1,
      start:"bottom bottom",
      // end:"top top",
      pin:true,
      scrub: true,
      pin: true,
      pinSpacing: false,
      // snap:1
    }),
      ScrollTrigger.create({
        trigger: q(".s2"),
        endTrigger:q(".s3"),
        animation: anim2,
        start:"bottom bottom",
        // end:"top top",
        // markers: true,
        duration:0.1,
        pin:true,
        scrub: true,
        pin: true,
        pinSpacing: false,
        // snap:1
      }),
      ScrollTrigger.create({
        trigger: q(".s3"),
        endTrigger:q(".s4"),
        animation: anim3,
        start:"bottom bottom",
        // markers: true,
        scrub: true,
        duration:0.1,
        pin: true,
        pinSpacing: false,
        // snap:1
      }),
      ScrollTrigger.create({
        trigger: q(".s4"),
        
        animation: anim4,
        start:"bottom bottom",
        // markers: true,
        pin:true,
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
