"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import React, { useEffect } from "react";

function Intro2() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="page-intro-cerv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 bord-thin-right rest">
            <div className="row justify-content-end rest">
              <div className="col-md-5 rest">
                <div className="cont">
                  <div className="mb-40">
                    <h2 className="fz-100 numb-font">1.</h2>
                  </div>
                  <h4>Our Mission</h4>
                  <div className="text mt-30">
                    <p>
                      We create exciting stories online that supercharge brands
                      through powerful marketing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 rest">
                <div className="img fit-img bord-thin-left">
                  <img src="/dark/assets/imgs/intro/02.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row justify-content-end bord-thin-top rest">
              <div className="col-md-5 rest">
                <div className="img fit-img">
                  <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-5 rest">
                <div className="cont bord-thin-left">
                  <div className="mb-40">
                    <h2 className="fz-100 numb-font">2.</h2>
                  </div>
                  <h4>Our Vision</h4>
                  <div className="text mt-30">
                    <p>
                      A world where every brand tells its story and gets heard loud and clear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 rest">
            <div className="bord-thin-top mt-100 position-re">
              <div className="row">
                <div className="col-md-11">
                  <div className="cont">
                    <div className="mb-40">
                      <h2 className="fz-100 numb-font">3.</h2>
                    </div>
                    <h4>Why Us?</h4>
                    <div className="text mt-30">
                      <p>
                      We're smart, funny, and dedicated to delivering real results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-dots bg-img"
                data-background="/dark/assets/imgs/patterns/dots.png"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
