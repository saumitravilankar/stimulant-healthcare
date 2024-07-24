"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [username, setUserName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(contact)) {
      newErrors.contact = "Contact number should be 10 digits";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      const data = {
        username,
        contact,
        email,
        message,
      };
      try {
        const response = await axios.post(`/api/sendMail`, data);
        console.log(response.data);
        toast.success("Thank you for your response, we will get back to you!");
        setUserName("");
        setContact("");
        setEmail("");
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="tel:+919822707304">+91 9822707304</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>
                  Akshardhara Co-Op Hsg Soc, Matoshri Nagar, Upnagar, Nashik.
                </p>
                <p>Zip code - 422006</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <a href="mailto:stimulanthealthcare.nsk@gmail.com">
                  stimulanthealthcare.nsk@gmail.com
                </a>
              </div>

              <div className="social-icon-circle mt-50">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61560604153778"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/stimulant_healthcare/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Let&apos;s Chat</h6>
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form id="contact-form" className="form2" onSubmit={onSubmit}>
                <div className="messages"></div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      {errors.username && (
                        <div className="error-message">{errors.username}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <div className="error-message">{errors.email}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="tel"
                        name="subject"
                        placeholder="Contact Number"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                      {errors.contact && (
                        <div className="error-message">{errors.contact}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      {errors.message && (
                        <div className="error-message">{errors.message}</div>
                      )}
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        disabled={loading}
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">
                          {loading ? "Sending..." : "Let's Talk"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
