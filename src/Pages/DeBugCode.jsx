"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./debugStyle.css"
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const panelRefs = useRef([]);

  useEffect(() => {
    const panels = panelRefs.current;
    console.log("current", panels);
    panels.pop();
    console.log("current pop", panels);
    panels.forEach((panel, i) => {
      // Get the element holding the content inside the panel
      let innerpanel = panel.querySelector(".panel-content");

      // Get the Height of the content inside the panel
      let panelHeight = innerpanel.offsetHeight;

      // Get the window height
      let windowHeight = window.innerHeight;

      let difference = panelHeight - windowHeight;

      // ratio (between 0 and 1) representing the portion of the overall animation that's for the fake-scrolling. We know that the scale & fade should happen over the course of 1 windowHeight, so we can figure out the ratio based on how far we must fake-scroll
      let fakeScrollRatio =
        difference > 0 ? difference / (difference + windowHeight) : 0;

      // if we need to fake scroll (because the panel is taller than the window), add the appropriate amount of margin to the bottom so that the next element comes in at the proper time.
      if (fakeScrollRatio) {
        panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
      }

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          end: () =>
            fakeScrollRatio ? `+=${innerpanel.offsetHeight}` : "bottom top",
          pinSpacing: false,
          pin: true,
          scrub: true,
        },
      });
    //   console.log(fakeScrollRatio);
      // fake scroll. We use 1 because that's what the rest of the timeline consists of (0.9 scale + 0.1 fade)
      if (fakeScrollRatio) {
        tl.to(innerpanel, {
          y: -difference,
          duration: 1 / (1 - fakeScrollRatio) - 1,
          ease: "none",
        });
      }
      tl.fromTo(
        panel,
        { scale: 1, opacity: 1 },
        { scale: 0.5, opacity: 0.5, duration: 0.9 }
      ).to(panel, { opacity: 0, duration: 0.1 });
    });
  }, []);

  return (
    <div>
      <div className="slides-wrapper">
        <div ref={(el) => (panelRefs.current[0] = el)} className="panel">
          <div className="panel-content">
            <h1>Section 1</h1>
            <img src="https://reactjs.org/logo-og.png" alt="React Logo" />
          </div>
        </div>
        <div
          ref={(el) => (panelRefs.current[1] = el)}
          className="panel section-2"
        >
          <div className="panel-content height">
            <div className="dd">
              <h1>Section 2</h1>
              <p>
                This section is supposed to be long and scrollable within before
                the next slide comes inThis section is supposed to be long and
                scrollable within before the next slide comes inThis section is
                supposed to be long and scrollable within before the next slide
                comes inThis section is supposed to be long and scrollable
                within before the next slide comes inThis section is supposed to
                be long and scrollable within before the next slide comes inThis
                section is supposed to be long and scrollable within before the
                next slide comes inThis section is supposed to be long and
                scrollable within before the next slide comes inThis section is
                supposed to be long and scrollable within before the next slide
                comes inThis section is supposed to be long and scrollable
                within before the next slide comes inThis section is supposed to
                be long and scrollable within before the next slide comes inThis
                section is supposed to be long and scrollable within before the
                next slide comes inThis section is supposed to be long and
                scrollable within before the next slide comes inThis section is
                supposed to be long and scrollable within before the next slide
                comes inThis section is supposed to be long and scrollable
                within before the next slide comes inThis section is supposed to
                be long and scrollable within before the next slide comes inThis
                section is supposed to be long and scrollable within before the
                next slide comes inThis section is supposed to be long and
                scrollable within before the next slide comes inThis section is
                supposed to be long and scrollable within before the next slide
                comes inThis section is supposed to be long and scrollable
                within before the next slide comes inThis section is supposed to
                be long and scrollable within before the next slide comes inThis
                section is supposed to be long and scrollable within before the
                next slide comes inThis section is supposed to be long and
                scrollable within before the next slide comes inThis section is
                supposed to be long and scrollable within before the next slide
                comes inThis section is supposed to be long and scrollable
                within before the next slide comes inThis section is supposed to
                be long and scrollable within before the next slide comes inThis
                section is supposed to be long and scrollable within before the
                next slide comes inThis section is supposed to be long and
                scrollable within before the next slide comes inThis section is
                supposed to be long and scrollable within before the next slide
                comes inThis section is supposed to be long and scrollable
                within before the next slide comes inThis section is supposed to
                be long and scrollable within before the next slide comes inThis
                section is supposed to be long and scrollable within before the
                next slide comes inThis section is supposed to be long and
                scrollable within before the next slide comes inThis section is
                supposed to be long and scrollable within before the next slide
                comes inThis section is supposed to be long and scrollable
                within before the next slide comes inThis section is supposed to
                be long and scrollable within before the next slide comes in
              </p>
            </div>
          </div>
        </div>
        <div
          ref={(el) => (panelRefs.current[2] = el)}
          className="panel section-3"
        >
          <div className="panel-content">
            <h1>Section 3</h1>
          </div>
        </div>
        <div ref={(el) => (panelRefs.current[3] = el)} className="panel">
          <div className="panel-content">
            <h1>Section 4</h1>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="logo">Nav</div>
        <div className="nav-links">
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
