"use client";
import React from "react";

function FAQS() {
  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }
  return (
    <section className="faqs section-padding pt-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 valign">
            <div className="faq-img md-mb50">
              <img src="/dark/assets/imgs/intro/03.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">FAQS</h6>
                <h3>Frequently asked questions</h3>
              </div>
              <div className="list-serv">
                <div className="accordion bord">
                  <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                    <div onClick={openAccordion} className="title">
                      <h6>How can I improve my SEO strategy?</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We specialize in SEO guidance. Consider us your trusted
                        advisors, navigating you to higher search engine
                        rankings.
                      </p>
                    </div>
                  </div>

                  <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>
                        My social media engagement seems low. Can you help?
                      </h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We specialize in crafting engaging content that ignites
                        social media. Let us revitalize your platforms with
                        strategies that inspire sharing.
                      </p>
                    </div>
                  </div>

                  <div className="item mb-15 wow fadeInUp" data-wow-delay=".5s">
                    <div onClick={openAccordion} className="title">
                      <h6>I need a new website. How can you assist?</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We excel in creating compelling websites that attract
                        and convert visitors. Let's build your online presence
                        with a site designed for success.
                      </p>
                    </div>
                  </div>

                  <div className="item mb-15 wow fadeInUp" data-wow-delay=".7s">
                    <div onClick={openAccordion} className="title">
                      <h6>Our sales are declining. How can you boost them?</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We implement proven digital strategies to enhance your
                        sales performance. Let us infuse your business with
                        effective digital marketing solutions.
                      </p>
                    </div>
                  </div>

                  <div className="item mb-15 wow fadeInUp" data-wow-delay=".9s">
                    <div onClick={openAccordion} className="title">
                      <h6>Can you help grow my business?</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Absolutely! We specialize in connecting businesses with
                        their ideal customers through tailored digital
                        strategies. Let's partner to achieve your growth
                        objectives.
                      </p>
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

export default FAQS;
