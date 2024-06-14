import React from 'react';

function Footer() {
  return (
    <footer className="min-footer sub-bg pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 md-mb15">
            <div className="logo icon-img-100">
              <img src="/dark/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4 order-md-3">
            <div className="text-center">
              <p className="fz-14">
                © 2024 InFolio is Proudly Powered by{' '}
                <span className="underline main-color">
                  <a href="https://themeforest.net/user/UiCamp" target="_blank">
                    UiCamp
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 order-md-2 md-mb15">
            <div className="links d-flex justify-content-end">
              <ul className="rest d-flex align-items-center">
                <li>
                  <a href="/dark/page-FAQS">FAQ</a>
                </li>
                <li className="ml-30">
                  <a href="/dark/page-about3">Careers</a>
                </li>
                <li className="ml-30">
                  <a href="/dark/page-contact3">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
