import React from 'react';

function Blog() {
  return (
    <section className="blog-crev section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Blog</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              Read Latest <span className="fw-200">News</span>
            </h2>
            <div className="ml-auto">
              <a href="#0" className="go-more">
                <span className="text">View all posts</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb50">
              <div className="img">
                <img src="/dark/assets/imgs/blog/c1.jpg" alt="" />
                <div className="tag sub-bg">
                  <span>Envato</span>
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
                  <div className="shap-left-bottom">
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
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <a href="/dark/blog-post">30 august 2021</a>
                </div>
                <h5>
                  <a href="/dark/blog-post">
                    Creative advertising in our life became a info noise
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb50">
              <div className="img">
                <img src="/dark/assets/imgs/blog/c2.jpg" alt="" />
                <div className="tag sub-bg">
                  <span>Envato</span>
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
                  <div className="shap-left-bottom">
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
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <a href="/dark/blog-post">30 august 2021</a>
                </div>
                <h5>
                  <a href="/dark/blog-post">
                    Creative advertising in our life became a info noise
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="img">
                <img src="/dark/assets/imgs/blog/c3.jpg" alt="" />
                <div className="tag sub-bg">
                  <span>Envato</span>
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
                  <div className="shap-left-bottom">
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
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <a href="/dark/blog-post">30 august 2021</a>
                </div>
                <h5>
                  <a href="/dark/blog-post">
                    We create some things for your success in growth
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
