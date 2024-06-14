'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '@/data/testimonials.json';

function Testimonials() {
  const swiperOptions = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
  };
  return (
    <section className="half-block sub-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 colmn">
            <div className="awards">
              <div className="sec-head mb-80">
                <h3 className="text-u ls1">Awards</h3>
              </div>
              <div className="item-title row">
                <div className="col-md-6">
                  <div>
                    <h6 className="sub-title">Award</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <h6 className="sub-title">Platform</h6>
                  </div>
                </div>
              </div>
              <div className="item-line row">
                <div className="col-md-6">
                  <div className="project-date">
                    <h6>
                      XD, UI galery <span>2023</span>
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="honors">
                    <h6>Behance</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <a href="#0" className="link">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="item-line row">
                <div className="col-md-6">
                  <div className="project-date">
                    <h6>
                      Mobile of the week <span>2022</span>
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="honors">
                    <h6>Awwwards</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <a href="#0" className="link">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="item-line row">
                <div className="col-md-6">
                  <div className="project-date">
                    <h6>
                      Site of the day <span>2021</span>
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="honors">
                    <h6>CSSDA</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <a href="#0" className="link">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="item-line row">
                <div className="col-md-6">
                  <div className="project-date">
                    <h6>
                      UX, UI, innovation <span>2020</span>
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="honors">
                    <h6>CSSDA</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <a href="#0" className="link">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="item-line row">
                <div className="col-md-6">
                  <div className="project-date">
                    <h6>
                      XD, UI galery <span>2018</span>
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="honors">
                    <h6>Behance</h6>
                  </div>
                </div>
                <div className="col-md-2">
                  <a href="#0" className="link">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 colmn main-bg">
            <div className="testim-crev">
              <div className="sec-head mb-50">
                <h3 className="text-u ls1">Testimonails</h3>
              </div>
              <div className="testim-swiper">
                <Swiper
                  id="content-carousel-container-unq-testim"
                  className="swiper-container"
                  data-swiper="container"
                  {...swiperOptions}
                >
                  {data?.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="item sub-bg">
                        <div className="content">
                          <div className="d-flex align-items-center">
                            <div>
                              <span className="tag sub-title mb-15">
                                Design Quality
                              </span>
                            </div>
                            <div className="ml-auto">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="256.721"
                                height="208.227"
                                viewBox="0 0 256.721 208.227"
                                id="null"
                                className="qout-svg"
                              >
                                <path
                                  id="Path_76570"
                                  data-name="Path 76570"
                                  d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                                  transform="translate(121.55 640.568)"
                                  fill="none"
                                  stroke="#fff"
                                  strokeWidth="1"
                                  opacity="0.322"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <div className="text">
                            <p className="fz-22">{item.desc}</p>
                          </div>
                          <div className="info mt-40">
                            <div className="img-curv main-bg">
                              <div className="img">
                                <img src={item.img} alt="" />
                              </div>
                              <div className="shap-left-top">
                                <svg
                                  viewBox="0 0 11 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-11 h-11"
                                >
                                  <path
                                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                    fill="#1a1a1a"
                                  ></path>
                                </svg>
                              </div>
                              <div className="shap-right-bottom">
                                <svg
                                  viewBox="0 0 11 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-11 h-11"
                                >
                                  <path
                                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                    fill="#1a1a1a"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="ml-30">
                              <h6>{item.name}</h6>
                              <span className="sub-title main-color">
                                {item.subName}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
