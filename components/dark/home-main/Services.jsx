import React from "react";

function Services() {
  return (
    <section className="skills-img-crev pb-50">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 offset-lg-1 valign">
            <div className="img md-mb80">
              <div className="rotate-butn-vid">
                <a
                  href="https://youtu.be/AzwC6umvd1s"
                  className="vid d-flex align-items-center"
                  target="_blank"
                >
                  <div className="icon">
                    <i className="fas fa-play main-color"></i>
                  </div>
                  <span className="sub-title ml-15">Watch Intro</span>
                </a>
              </div>
              <img
                src="/dark/assets/imgs/intro/04.jpg"
                alt=""
                className="radius-30"
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title mb-15 main-color">Why Choose Us</h6>
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Your Brand's Ultimate</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text"> Digital Partner.</span>
                  </span>
                </h2>
              </div>
              <div className="row justify-content-end">
                <div className="col-lg-11">
                  <div className="text">
                    <p>
                      Empowering Your Brand with Innovative and Tailored Digital
                      Solutions for Unmatched Growth.
                    </p>
                  </div>
                  <div className="row mt-50 pt-50 bord-thin-top">
                    <div className="col-sm-6">
                      <div className="item d-flex align-items-center justify-content-center md-mb50">
                        <h2 className="fz-80 line-height-1">
                          10<span className="fz-50">+</span>
                        </h2>
                        <span className="sub-title opacity-7 ml-30">
                          Years of <br /> Experience
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="item d-flex align-items-center justify-content-center md-mb50">
                        <h2 className="fz-80 line-height-1">
                          95<span className="fz-40">%</span>
                        </h2>
                        <span className="sub-title opacity-7 ml-30">
                          Success <br /> Rate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
