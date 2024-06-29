"use client";

import React, { useMemo } from "react";
import { useParams } from "next/navigation";
import data from "@/data/services.json";

function Services() {
  const param = useParams();

  const serviceItem = useMemo(() => {
    return data.find((item) => {
      return item.link.includes(param.service_name);
    });
  }, []);

  return (
    <section className="services-details section-padding">
      <div className="container">
        <div className="sec-head text-center mb-80">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div>
                <h6 className="sub-title main-color mb-15">
                  {serviceItem.title.split(":")[0]}
                </h6>
                <h4>{serviceItem.desc}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row serv-imgs mt-80">
          <div className="col-lg-4">
            <div className="img o-hidden radius-15 fit-img md-mb30">
              <img src="/dark/assets/imgs/intro/01.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="img o-hidden radius-15">
              <img
                src="/dark/assets/imgs/background/3.jpg"
                alt=""
                data-speed="auto"
                data-lag="0"
              />
            </div>
          </div>
        </div>
        <div className="row mt-80">
          <div className="col-lg-4">
            <div className="text md-mb50">
              <p>{serviceItem.info}</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <ul className="rest list-arrow row">
                {serviceItem.bulletPoints.map((item, i) => (
                  <li key={i} className="nowrap col-md-6 my-2">
                    <span className="icon">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 9 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                          fill="#14cf93"
                        ></path>
                      </svg>
                    </span>
                    <h6 className="inline fw-400">{item}</h6>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
