import React from "react";

function Numbers() {
  return (
    <section className="numbers">
      <div className="container">
        <div className="row justify-content-center gap-5">
          <div className="col-lg-4 col-md-6">
            <div className="item d-flex align-items-center justify-content-center md-mb50">
              <h2 className="fz-80 line-height-1">
                170<span className="fz-50">+</span>
              </h2>
              <span className="sub-title opacity-7 ml-30">
                Projects <br /> Completed
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item d-flex align-items-center justify-content-center md-mb50">
              <h2 className="fz-80 line-height-1">
                95<span className="fz-40">%</span>
              </h2>
              <span className="sub-title opacity-7 ml-30">
                Success <br /> Rate
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item d-flex align-items-center justify-content-center md-mb50">
              <h2 className="fz-80 line-height-1">
                150<span className="fz-40">%</span>
              </h2>
              <span className="sub-title opacity-7 ml-30">
                Increased <br /> Leads
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item d-flex align-items-center justify-content-center md-mb50">
              <h2 className="fz-80 line-height-1">
                80<span className="fz-40">%</span>
              </h2>
              <span className="sub-title opacity-7 ml-30">
                Increased Organic <br /> Leads
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item d-flex align-items-center justify-content-center">
              <h2 className="fz-80 line-height-1">
                10<span className="fz-50">+</span>
              </h2>
              <span className="sub-title opacity-7 ml-30">
                Years of <br /> Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
