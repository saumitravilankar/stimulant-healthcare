"use client";
import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set(".footer-container", { yPercent: -50 });
      const uncover = gsap.timeline({ paused: true });
      uncover.to(".footer-container", { yPercent: 0, ease: "none" });
      ScrollTrigger.create({
        trigger: "main",
        start: "bottom bottom",
        end: "+=50%",
        animation: uncover,
        scrub: true,
      });
    }
  }, []);
  return (
    <footer className="modern-footer sub-bg pt-80">
      <div className="footer-container">
        <div className="container ontop">
          <div className="row pb-30 bord-thin-bottom">
            <div className="col-lg-5">
              <span className="sideup-text">
                <span className="up-text main-color">
                  <span
                    className=" fz-30 fw-600 text-uppercase"
                    style={{ minWidth: "max-content" }}
                  >
                    Stimulant Healthcare
                  </span>
                  <br />
                  <span className=" fw-500 fz-15 text-uppercase">
                    Private Limited
                  </span>
                </span>
              </span>
            </div>
            <div className="col-lg-7">
              <div className="social-media d-flex justify-content-end">
                <ul className="rest d-flex align-items-center fz-14">
                  <li className="cursor-pointer">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=61560604153778"
                    >
                      <i className="fab fa-facebook-f mr-10"></i> Facebook
                    </a>
                  </li>
                  <li className="cursor-pointer ml-50">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/stimulant_healthcare/"
                    >
                      <i className="fab fa-instagram mr-10"></i> Instagram
                    </a>
                  </li>
                  <li className="cursor-pointer ml-50">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/stimulant-healthcare-pvt-ltd/"
                    >
                      <i className="fab fa-linkedin mr-10"></i> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-80">
            <div className="col-lg-7">
              <div className="call-action">
                <h2 className="d-slideup wow fz-60 fw-600">
                  <span className="sideup-text">
                    <span className="up-text">Have a project in mind?</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text underline">
                      <a href="/contact-us" className="main-color">
                        Let’s get to work.
                      </a>
                    </span>
                  </span>
                </h2>
                <div className="info mt-80 d-flex align-items-center">
                  <div>
                    <a
                      href="mailto:stimulanthealthcare.nsk@gmail.com"
                      className="butn butn-md butn-bord-thin radius-30"
                    >
                      <span className="text">
                        stimulanthealthcare.nsk@gmail.com
                      </span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+919822707304"
                      className="butn butn-md butn-bord-thin radius-30 ml-30"
                    >
                      <span className="text">+91 9822707304</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 bord-left">
              <div className="column">
                <h6 className="sub-title mb-30">Useful Links</h6>
                <div className="row">
                  <div className="col-6">
                    <ul className="rest fz-14">
                      <li className="mb-15">
                        <a href="/about-us">About</a>
                      </li>
                      <li className="mb-15">
                        <a href="/services">Services</a>
                      </li>
                      <li className="mb-15">
                        <a href="/blogs">Blog</a>
                      </li>
                      <li>
                        <a href="/contact-us">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="rest fz-14">
                      <li className="mb-15">
                        <a href="/terms-and-conditions">Term & Conditions</a>
                      </li>
                      <li className="mb-15">
                        <a href="/privacy-policy">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="subscribe-minimal mt-50">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Type Your Email" />
                    <button type="submit">
                      <i className="ti-arrow-top-right"></i>
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
          <div className="text-center pt-30 pb-30 main-bg mt-80">
            <p className="fz-14">
              © 2024 All Rights Reserved By Stimulant Healthcare Private Limited{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
