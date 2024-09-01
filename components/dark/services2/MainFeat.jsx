"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import React, { useEffect } from "react";

function MainFeat() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section
      className="main-feat section-padding bg-img"
      data-background="/dark/assets/imgs/header/bg-4.png"
      data-overlay-dark="9"
    >
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row justify-content-between">
            <div className="col-lg-6 md-mb50">
              <h6 className="sub-title main-color mb-15">Our Services</h6>
              <h2 className="fw-600 fz-70">
                What We Can Do For <span className="fw-300">Our Clients</span>
              </h2>
            </div>
            <div className="col-lg-5 d-flex align-items-end">
              <div className="text full-width pb-40 bord-thin-bottom">
                <p>
                  From digital whiz to healthcare wiz, we build brands, navigate
                  complexities, and bring the fun - all under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">Digital Wizard</h5>
              <ul className="rest dot-list">
                <li className="mb-10">SEO Spells</li>
                <li className="mb-10">Social Media Potions</li>
                <li className="mb-10">Content Marketing Charms</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">PR Marvels</h5>
              <ul className="rest dot-list">
                <li className="mb-10">Media Makeovers</li>
                <li className="mb-10">Crisis Communication</li>
                <li className="mb-10">Influencer Invisibility Cloaks</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">ATL & BTL Bandits</h5>
              <ul className="rest dot-list">
                <li className="mb-10">Above-the-Line Activities</li>
                <li className="mb-10">Below-the-Line Tactics</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">
                Personal Promotion Pixie Dust
              </h5>
              <ul className="rest dot-list">
                <li className="mb-10">Personal Branding Potions</li>
                <li className="mb-10">Executive Speech Coaching</li>
                <li className="mb-10">Networking Night Niffler Training</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">Branding Brilliance</h5>
              <ul className="rest dot-list">
                <li className="mb-10">Brand Identity Alchemy</li>
                <li className="mb-10">Brand Strategy Spells</li>
                <li className="mb-10">Brand Consistency Charms</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">Neighborhood Activities</h5>
              <ul className="rest dot-list">
                <li className="mb-10">Local Love Potions</li>
                <li className="mb-10">Community Collaboration Cauldrons</li>
                <li className="mb-10">Street Cred Serums</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">
                Insurance / Corporate Tie-Up Treaties
              </h5>
              <ul className="rest dot-list">
                <li className="mb-10">Strategic Partnerships</li>
                <li className="mb-10">Co-Branded Campaigns</li>
                <li className="mb-10">Risk Reduction Rituals</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">
                NABH / MJPJAY Quality Accreditations
              </h5>
              <ul className="rest dot-list">
                <li className="mb-10">Accreditation Assistance</li>
                <li className="mb-10">Patient Trust Potions</li>
                <li className="mb-10">Marketing Magic with a Mission</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">Home Healthcare Heroism</h5>
              <ul className="rest dot-list">
                <li className="mb-10">Targeted Content Creation</li>
                <li className="mb-10">Digital Doctor Diplomacy</li>
                <li className="mb-10">Telehealth Triumphs</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">Lab & Radiology Tie-Ups</h5>
              <ul className="rest dot-list">
                <li className="mb-10">MRI Marketing Magic</li>
                <li className="mb-10">X-Ray the Competition</li>
                <li className="mb-10">Ultrasound Your Ideal Patient</li>
                <li className="mb-10">Blood Test Your Budget</li>
                <li className="mb-10">The Full Body Scan</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">Medical Equipment</h5>
              <ul className="rest dot-list">
                <li className="mb-10">Pre-Purchase Powerhouse</li>
                <li className="mb-10">Maintenance Marvels</li>
                <li className="mb-10">ICU Installation Insiders</li>
                <li className="mb-10">The Defibrillator of Downtime</li>
                <li className="mb-10">The Future of Healthcare Forecast</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">Placements</h5>
              <ul className="rest dot-list">
                <li className="mb-10">Consultant Cavalry</li>
                <li className="mb-10">RMO/DMO Dexterity</li>
                <li className="mb-10">Nursing Ninjas</li>
                <li className="mb-10">Paramedic Powerhouses</li>
                <li className="mb-10">The Perfect Placement Prescription</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">Empanelments</h5>
              <ul className="rest dot-list">
                <li className="mb-10">Doctor Dream Team</li>
                <li className="mb-10">Group Practice Panacea</li>
                <li className="mb-10">New Setup Navigation</li>
                <li className="mb-10">Insurance Intricacies</li>
                <li className="mb-10">The Art of the Elevator Pitch</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">Referral Management</h5>
              <ul className="rest dot-list">
                <li className="mb-10">Referral Renaissance</li>
                <li className="mb-10">Relationship Refinery</li>
                <li className="mb-10">Track and Tango</li>
                <li className="mb-10">The Gratitude Guru</li>
                <li className="mb-10">Building Bridges, Not Walls</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">
                Cleaning & House Keeping Services
              </h5>
              <ul className="rest dot-list">
                <li className="mb-10">
                  Industrial & Corporate house keeping services
                </li>
                <li className="mb-10">
                  Solar panel cleaning, washing & sales service
                </li>
                <li className="mb-10">Water tank cleaning</li>
                <li className="mb-10">
                  Building parking, Terrace washing & cleaning services
                </li>
                <li className="mb-10">
                  Door step washing & internal cleaning services
                </li>
                <li className="mb-10">Leakage and water proofing services</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item mb-50">
              <h5 className="mb-15 main-color">
                Other services & work assistance
              </h5>
              <ul className="rest dot-list">
                <li className="mb-10">Plumbing & drainage services</li>
                <li className="mb-10">
                  Construction & Repairs and Maintenance Work
                </li>
                <li className="mb-10">Pest control service</li>
                <li className="mb-10">
                  Labour contract service/Security Service
                </li>
                <li className="mb-10">Building painting work</li>
                <li className="mb-10">Generator renting service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFeat;
