"use client";
import React, { useLayoutEffect } from "react";

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0"
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  return (
    <div className="header page-header section-padding">
      <div className="container pt-100">
        <div className="row">
          <div className="col-lg-10">
            <div className="caption">
              <h2>
                We are obsessed with pixels and ROI (in a good manner). We are a crack team of digital marketing gurus who create campaigns that convert heads and traffic into leads (and, yes, sales).
              </h2>
              <div className="mt-30">
                <a href="/">Home</a>
                <span className="padding-rl-20">|</span>
                <span className="main-color">About Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
