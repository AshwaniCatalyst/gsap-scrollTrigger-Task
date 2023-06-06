"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, CSSPlugin } from "gsap/all";
import "./style.css";
import Section1 from "@/Components/LandingPage/Section-1/Section1";
import Section2 from "@/Components/LandingPage/Section-2/Section2";
import Section3 from "@/Components/LandingPage/section-3/Section3";
import Section4 from "@/Components/LandingPage/section-4/Section4";
import Section2Aux from "@/Components/LandingPage/section-aux/section2Aux";
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const HorizontalScroll = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  useEffect(()=>{
    const pin = gsap.fromTo(innerRef.current,{
        translateX:0,
    },{
        translateX:"-300vw",
        ease:"none",
        duration:1,
        scrollTrigger : {
            trigger:outerRef.current,
            start:"top top",
            end: "2000 top",
            
            scrub:0.6,
            pin:true
        }
    });
    return ()=> pin.kill();
  },[])
  return (
    <>
      <section className="HomePage outer-contaner">
        <div ref={outerRef}>
          <div ref={innerRef} className="inner-container">
            <div className="section  ">
              <Section1 />
            </div>
            <div className="section ">
              <Section2Aux />
            </div>
            <div className="section ">
              <Section3 />
            </div>
            <div className="section">
              <Section4 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HorizontalScroll;
