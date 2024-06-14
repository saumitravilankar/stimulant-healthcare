'use client';
import isInView from '@/common/isInView';
import React, { useEffect } from 'react';

function Intro2() {
  useEffect(() => {
    window.addEventListener('scroll', handleShowProgressValues);
    return () => window.removeEventListener('scroll', handleShowProgressValues);
  }, []);

  function handleShowProgressValues() {
    isInView({
      selector: '.skill-progress .progres',
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute('data-value');
      },
    });
  }
  return (
    <section className="page-intro-modern section-padding pt-0">
      <div className="container md-hide">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-3 valign">
                <div className="img1 fit-img">
                  <img src="/light/assets/imgs/intro/01.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img2 fit-img position-re o-hidden">
                  <img
                    src="/light/assets/imgs/intro/2.jpg"
                    alt=""
                    data-speed="0.2"
                    data-lag="0"
                  />
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-end">
                <div className="full-width">
                  <div className="img3 fit-img mb-30">
                    <img src="/light/assets/imgs/intro/02.jpg" alt="" />
                  </div>
                  <div className="img4 fit-img">
                    <img src="/light/assets/imgs/intro/03.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-100">
        <div className="row justify-content-around">
          <div className="col-lg-5">
            <div className="cont">
              <h4>
                If you’re looking for a specialist to build a meaningful digital
                project you can easily reach us by clicking{' '}
                <span className="underline">
                  <a href="#0" className="main-color">
                    here
                  </a>
                </span>
              </h4>
              <div className="exp mt-80 md-mb15">
                <h2 className="fz-70">
                  28{' '}
                  <span className="sub-title main-font opacity-7 ml-15">
                    Years of Experience
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="full-width">
              <div className="text">
                <p>
                  Whether you are a development agency looking to outsource
                  design work, a company in search of a Product Designer or
                  Product Team, a marketing agency that needs.
                </p>
              </div>
              <div className="mt-50">
                <div className="skills-box">
                  <div className="skill-item mb-40">
                    <h5 className="sub-title mb-15">UI / UX Design</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <h5 className="sub-title mb-15">Apps Development</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="80%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay">
        <svg
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: 3246.53 }}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Intro2;
