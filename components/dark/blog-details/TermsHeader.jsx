"use client";
import React, { useEffect, useLayoutEffect } from "react";
import loadBackgroudImages from "@/common/loadBackgroudImages";
function TermsHeader() {
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
          <h1 className="fz-55">Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
}

export default TermsHeader;
