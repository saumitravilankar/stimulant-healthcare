"use client";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function toggleSearch() {
    let form = document.querySelector(".navbar .search-form");
    let closeBtn = document.querySelector(".search-form .close-search");

    form.classList.toggle("open");
    if (form.classList.contains("open")) closeBtn.style.display = "block";
    else closeBtn.style.display = "none";
  }
  function toggleMenu() {
    const hamenu = document.querySelector(".hamenu");

    setIsOpen((prev) => !prev);

    setTimeout(() => {
      if (document.querySelector(".hamenu").classList.contains("open")) {
        document.querySelector(".hamenu").style.left = "0";
      } else {
        document.querySelector(".hamenu").style.left = "-100%";
      }
    }, 300);
  }

  function closeMenu() {
    const hamenu = document.querySelector(".hamenu");

    setIsOpen(false);
    setTimeout(() => {
      hamenu.style.left = "-100%";
    }, 300);
  }

  function handleMouseEnter(event) {
    document.querySelectorAll("ul.main-menu li").forEach((item) => {
      item.classList.add("hoverd");
    });
    event.currentTarget.classList.remove("hoverd");
  }

  function handleMouseLeave() {
    document
      .querySelectorAll("ul.main-menu li")
      .forEach((item) => item.classList.remove("hoverd"));
  }

  function toggleSubMenu(event) {
    const subMenu = event.currentTarget.querySelector(".sub-menu");
    const SubMenu2 = event.currentTarget.querySelector(".sub-menu2");
    if (subMenu) {
      if (subMenu.classList.contains("sub-open") && SubMenu2 == null) {
        document.querySelectorAll(".sub-menu").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });
        subMenu.classList.remove("sub-open");
        subMenu.style.maxHeight = "0";
        subMenu.previousElementSibling.children[0].classList.remove("dopen");
      } else if (!subMenu.classList.contains("sub-open")) {
        if (SubMenu2 == null) {
          document.querySelectorAll(".sub-menu").forEach((item) => {
            item.classList.remove("sub-open");
            item.style.maxHeight = "0";
            item.previousElementSibling.children[0].classList.remove("dopen");
          });

          subMenu.classList.add("sub-open");
          subMenu.style.maxHeight = "450px";
          subMenu.previousElementSibling.children[0].classList.add("dopen");
        } else {
          subMenu.classList.add("sub-open");
          subMenu.style.maxHeight = "450px";
          subMenu.previousElementSibling.children[0].classList.add("dopen");
        }
      }
    }
  }
  function toggleSubMenu2(event) {
    const SubMenu2 = event.currentTarget.querySelector(".sub-menu2");
    if (SubMenu2) {
      if (SubMenu2.classList.contains("sub-open")) {
        event.currentTarget.querySelectorAll(".sub-menu2").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });
        SubMenu2.classList.remove("sub-open");
        SubMenu2.style.maxHeight = "0";
        SubMenu2.previousElementSibling.children[0].classList.remove("dopen");
      } else if (!SubMenu2.classList.contains("sub-open")) {
        event.currentTarget.querySelectorAll(".sub-menu2").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });
        SubMenu2.classList.add("sub-open");
        SubMenu2.style.maxHeight = "450px";
        SubMenu2.previousElementSibling.children[0].classList.add("dopen");
      }
    }
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      .classList.remove("show");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bord blur">
        <div className="container">
          <a
            className="logo"
            href="/"
            style={{
              width: "140px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "20px",
            }}
          >
            <img src="/dark/assets/imgs/stimulant-logo.png" alt="logo" />
          </a>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/" role="button">
                  <span className="rolling-text">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about-us" role="button">
                  <span className="rolling-text">About Us</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services" role="button">
                  <span className="rolling-text">Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blogs" role="button">
                  <span className="rolling-text">Blogs</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">
                  <span className="rolling-text">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="topnav">
            <div onClick={toggleMenu} className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className={`hamenu ${isOpen == true ? "open" : ""}`}>
        <div
          className="logo"
          style={{
            width: "110px",
            marginTop: "-20px",
            paddingBottom: "10px",
          }}
        >
          <img src="/dark/assets/imgs/stimulant-logo.png" alt="" />
        </div>
        <div
          onClick={closeMenu}
          className="close-menu cursor-pointer ti-close"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <a href="/">
                          <span className="fill-text" data-text="Home">
                            Home
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <a href="/about-us">
                          <span className="fill-text" data-text="About Us">
                            About Us
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <a href="/services">
                          <span className="fill-text" data-text="services">
                            services
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <a href="/blogs">
                          <span className="fill-text" data-text="blogs">
                            blogs
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <a href="/contact-us">
                          <span className="fill-text" data-text="contact us">
                            contact us
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    Akshardhara Co-Op Hsg Soc,
                    <br /> Matoshri Nagar, Upnagar, Nashik
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=61560604153778"
                        className="hover-this"
                      >
                        <span className="hover-anim">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/stimulant_healthcare/"
                        className="hover-this"
                      >
                        <span className="hover-anim">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5>
                    <a href="mailto:stimulanthealthcare.nsk@gmail.com">
                      stimulanthealthcare.nsk@gmail.com
                    </a>
                  </h5>
                  <h5 className="underline mt-10">
                    <a href="tel:+919822707304">+91 9822707304</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
