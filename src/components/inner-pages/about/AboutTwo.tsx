import Image from "next/image";
import Link from "next/link";

import about_img1 from "@/assets/img/arrow-shape.png";
import about_img2 from "@/assets/img/about/about-2.jpg";

const AboutTwo = () => {
  return (
    <section
      className="about-section fix section-padding"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="container">
        <div className="about-wrapper-2 style-2">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title" style={{ marginBottom: "40px" }}>
                  <span
                    className="wow fadeInUp"
                    style={{
                      color: "#ff6b35",
                      fontWeight: 600,
                      fontSize: "14px",
                      letterSpacing: "1px",
                    }}
                  >
                    FOCUSED AND FUTURE READY
                  </span>
                  <h3
                    style={{
                      color: "#dddddd",
                      fontSize: "32px",
                      fontWeight: 700,
                      marginTop: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    Our Mission
                  </h3>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{
                      color: "#d1d1d1",
                      fontSize: "16px",
                      lineHeight: "1.7",
                      marginBottom: 0,
                    }}
                  >
                    To be recognized as a company committed to continuous
                    improvement, fostering excellent relationships with
                    customers, employees, and the community.
                  </p>
                </div>

                <div style={{ marginBottom: "35px" }}>
                  <h3
                    style={{
                      color: "#dddddd",
                      fontSize: "28px",
                      fontWeight: 700,
                      marginBottom: "12px",
                    }}
                  >
                    Our Vision
                  </h3>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      color: "#d1d1d1",
                      fontSize: "16px",
                      lineHeight: "1.7",
                      marginBottom: 0,
                    }}
                  >
                    To provide exceptional services with the highest standards
                    of ethics, morals, and values, ensuring customer delight
                    through innovative solutions
                  </p>
                </div>

                <div style={{ marginBottom: "35px" }}>
                  <h3
                    style={{
                      color: "#dddddd",
                      fontSize: "28px",
                      fontWeight: 700,
                      marginBottom: "12px",
                    }}
                  >
                    What We Do
                  </h3>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      color: "#d1d1d1",
                      fontSize: "16px",
                      lineHeight: "1.7",
                      marginBottom: "16px",
                    }}
                  >
                    We specialize in the design and manufacturing of Blow and
                    Injection moulded plastic products. Our range includes:
                  </p>
                  <ul
                    className="wow fadeInUp"
                    data-wow-delay=".7s"
                    style={{
                      margin: 0,
                      paddingLeft: "20px",
                      color: "#d1d1d1",
                      fontSize: "15px",
                      lineHeight: "1.8",
                    }}
                  >
                    <li style={{ marginBottom: "10px" }}>
                      Monolayer and Multilayer bottles and containers.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Industry-standard and customized bottles, caps, closures,
                      and measuring cups
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Rigid packaging solutions for liquids and powders
                    </li>
                  </ul>
                </div>

                <div style={{ marginBottom: "35px" }}>
                  <h3
                    className="wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{
                      color: "#dddddd",
                      fontSize: "28px",
                      fontWeight: 700,
                      marginBottom: "12px",
                    }}
                  >
                    Our Facilities
                  </h3>
                  <ul
                    className="wow fadeInUp"
                    data-wow-delay=".7s"
                    style={{
                      margin: 0,
                      paddingLeft: "20px",
                      color: "#d1d1d1",
                      fontSize: "15px",
                      lineHeight: "1.8",
                    }}
                  >
                    <li style={{ marginBottom: "10px" }}>
                      Fully automatic Blow Moulding Machines for Multilayer Coex
                      Bottles.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Online De-flashing, Trimming, and Leak Testing
                      capabilities.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Injection Blow Moulding and Injection Moulding machines.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div
                className="about-image"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src={about_img2}
                  alt="about-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
