import React from "react";
import data from "@/data/blogs.json";

function Blogs() {
  return (
    <section className="blog-crev section-padding">
      <div className="container">
        <div className="row">
          {data.map((blog, index) => (
            <div key={index} className="col-lg-4">
              <div className="item sub-bg mb-40">
                <div className="img">
                  <img src={blog.img} alt={blog.tag} />
                  <div className="tag sub-bg">
                    <span>{blog.tag}</span>
                    <div className="shap-right-bottom">
                      <svg
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-11 h-11"
                      >
                        <path
                          d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                          fill="#1d1d1d"
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
                          fill="#1d1d1d"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="cont">
                  <div className="date fz-13 text-u ls1 mb-10 opacity-7">
                    <a href={blog.link}>{blog.date}</a>
                  </div>
                  <h5>
                    <a href={blog.link}>{blog.title}</a>
                  </h5>
                  <a
                    href={blog.link}
                    className="d-flex align-items-center mt-30"
                  >
                    <span className="text mr-15">Read More</span>
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
