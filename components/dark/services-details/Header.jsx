"use client";
import React, { useEffect, useLayoutEffect, useMemo } from "react";

import loadBackgroudImages from "@/common/loadBackgroudImages";
import { useParams } from "next/navigation";
import data from "@/data/services.json";

function Header() {
  const param = useParams();

  const serviceName = useMemo(() => {
    return data.find((item) => {
      return item.link.includes(param.service_name);
    });
  }, []);

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
    <div
      className="header page-header bg-img section-padding"
      data-background="/dark/assets/imgs/header/b5.jpg"
      data-overlay-dark="9"
    >
      <div className="container pt-100">
        <div className="text-center">
          <h1 style={{ textTransform: "uppercase" }}>
            {serviceName?.title?.split(":")[0]}
          </h1>
          <div className="mt-15">
            <a href="/">Home</a>
            <span className="padding-rl-20">|</span>
            <a href="/services">Services</a>
            <span className="padding-rl-20">|</span>
            <span className="main-color">
              {serviceName?.title?.split(":")[0] || ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
