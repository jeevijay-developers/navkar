import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo.jpeg";

const FooterOne = () => {
  return (
    <footer
      className="footer-section fix bg-cover"
      style={{
        backgroundImage: `url(/assets/img/footer-bg.jpg)`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          zIndex: 0,
        }}
      ></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget">
                <div className="widget-head ">
                  <Link href="/">
                    <Image
                      src="/navkarEcom.png"
                      width={90}
                      height={80}
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <p style={{ color: "#333" }}>
                    Shri Navkar Blowpack is a leading manufacturer and exporter
                    of high-quality plastic packaging solutions, dedicated to
                    delivering excellence and innovation in every product we
                    create.
                  </p>

                  <ul className="contact-info" style={{ color: "#333" }}>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      U-I - Plot No: 3540-3541, Opp: HBS Pharma Sez, GIDC Panoli
                      - 394116, India
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      U-II Plot No: 120-121-11 & 12, GIDC Ankleshwar - 393002,
                      Gujarat, India
                    </li>
                    <li>
                      <i className="fa-solid fa-phone-volume"></i>
                      <Link href="tel:2086660112">+91 2646 251639</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-xl-2 col-lg-2 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 style={{ color: "#222" }}>Quick Link</h4>
                </div>
                <ul className="list-area" style={{ color: "#333" }}>
                  <li>
                    <Link href="/about">
                      <i className="fa-solid fa-chevron-right"></i>About
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/pricing">
                      <i className="fa-solid fa-chevron-right"></i>Pricing Plan
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/faq">
                      <i className="fa-solid fa-chevron-right"></i>Faq
                    </Link>
                  </li>
                  <li>
                    <Link href={`/blog-0`}>
                      <i className="fa-solid fa-chevron-right"></i>Our Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-chevron-right"></i> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 style={{ color: "#222" }}>Latest Post</h4>
                </div>
                <div className="footer-post">
                  <div className="single-post-item mb-4">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: `url(/assets/img/news/pp1.jpg)`,
                      }}
                    ></div>
                    <div className="post-content">
                      <div className="post-date" style={{ color: "#666" }}>
                        <i className="far fa-calendar-alt"></i>15 Dec, 2024
                      </div>
                      <h6 style={{ color: "#222" }}>
                        <Link href={`/blog-0`} style={{ color: "#222" }}>
                          Sustainable Packaging
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="single-post-item">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: `url(/assets/img/news/pp2.jpg)`,
                      }}
                    ></div>
                    <div className="post-content">
                      <div className="post-date" style={{ color: "#666" }}>
                        <i className="far fa-calendar-alt"></i>29 Feb, 2024
                      </div>
                      <h6 style={{ color: "#222" }}>
                        <Link href="/blog-1" style={{ color: "#222" }}>
                          Custom Blow
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4 style={{ color: "#222" }}>Social Links</h4>
                </div>
                <div className="footer-content">
                  <ul className="list-area" style={{ color: "#333" }}>
                    <li>
                      <a
                        href="https://www.facebook.com/share/1ADK7Rpefs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/navkarblowpack?igsh=MXAzZ25qZG41cXFjcg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                        >
                          <path
                            clipRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            fillRule="evenodd"
                          />
                        </svg>
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <p>
              © All Copyright 2024 by <Link href="/">EaglesThemes</Link>
            </p>
            <ul>
              <li>
                <Link href="/contact">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/contact"> Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default FooterOne;
