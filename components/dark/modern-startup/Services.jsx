import React from "react";
import data from "@/data/services.json";

function Services() {
  return (
    <section className="services-crev section-padding" data-scroll-index="1">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Specialize</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              What We <span className="fw-200"> Offer</span>
            </h2>
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-6">
              <div className="item-box mb-30">
                <div className="d-flex align-items-end">
                  <div>
                    <span className="num fz-20">0{i + 1}.</span>
                    <div className="icon mr-80">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                  <div>
                    <h5>{item.title.split(":")[0]}</h5>
                    <h6 className="main-color">{item.title.split(":")[1]}</h6>
                    <div className="text mt-30">
                      <p className="mb-80">{item.desc}</p>
                    </div>
                    <div className="more text-u ls1 fz-12">
                      <a href={item.link}>
                        View Details
                        <i className="ml-15 ti-arrow-top-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
