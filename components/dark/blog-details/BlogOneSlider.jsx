"use client";
import React, { useEffect, useLayoutEffect } from "react";
import loadBackgroudImages from "@/common/loadBackgroudImages";
function BlogOneSlider() {
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
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div className="header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
              <div className="sub-title fz-12">
                <a href="#0">
                  <span>Digital Marketing</span>
                </a>
              </div>
              <h1 className="fz-55 mt-30">
                Leveraging Digital Marketing to Boost Your Business.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="background bg-img mt-80"
        data-background="/dark/assets/imgs/blog/digital-marketing.jpg"
      ></div>
    </div>
  );
}

export default BlogOneSlider;
