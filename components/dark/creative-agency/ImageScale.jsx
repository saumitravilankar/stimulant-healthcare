"use client";
import Script from "next/script";
import React from "react";

function ImageScale() {
  return (
    <section className="img-scale">
      <div className="image" data-overlay-dark="6">
        <div className="img">
          <img
            id="grow"
            src="/dark/assets/imgs/background/2.jpg"
            data-speed="0.2"
            data-lag="0"
            alt=""
          />
        </div>
        <div className="text-u text-center ontop">
          <h2 className="fz-70 fw-300">
            Watch your brand soar with
            <span className="fw-600">strategic marketing</span> <br /> that
            ignites <span className="fw-600">enagement </span> and{" "}
            <span className="fw-600">fuels growth.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default ImageScale;
