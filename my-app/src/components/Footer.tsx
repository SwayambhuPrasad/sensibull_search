import { styled } from "@mui/system";

const PlaceFooter = styled("div")({
  backgroundColor: "#ffffff",
  width: "100vw",
  height: 190,
  padding: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  fontSize: "1.1rem",
});

function Footer() {
  return (
    <PlaceFooter>
      <section className="sn-section sn-section--footer">
        <div className="sn-grid footer-card">
          <div
            className="sn-col footer-link-card"
            style={{
              width: "100vw",
              padding: "30 30",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div
              className="sn-footer__nav content-left-align"
              style={{
                width: "auto",
                display: "flex",
                gap: 10,
                flexDirection: "column",
              }}
            >
              <div className="sn-footer__nav__item">Follow</div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  textDecoration: "none",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  className="sn-footer__nav__item sn-footer__nav__item--link"
                  href="https://twitter.com/@besensibull"
                >
                  Twitter
                </a>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  className="sn-footer__nav__item sn-footer__nav__item--link"
                  href="https://www.youtube.com/besensibull"
                >
                  Youtube
                </a>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  className="sn-footer__nav__item sn-footer__nav__item--link"
                  href="https://www.linkedin.com/company/sensibull/"
                >
                  LinkedIn
                </a>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  className="sn-footer__nav__item sn-footer__nav__item--link"
                  href="https://www.facebook.com/Sensibull/"
                >
                  Facebook
                </a>
              </div>
            </div>
            <div
              className="sn-footer__nav content-right-align"
              style={{
                width: "auto",
                display: "flex",
                gap: 10,
                flexDirection: "column",
              }}
            >
              <div
                className="sn-footer__nav__item"
                style={{
                  textDecoration: "none",
                  textAlign: "right",
                }}
              >
                Contact
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  textDecoration: "none",
                }}
              >
                <a
                  className="sn-footer__nav__item sn-footer__nav__item--link"
                  href="https://sensibull.freshdesk.com/support/solutions"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Help &amp; FAQs
                </a>
                <a
                  className="sn-footer__nav__item sn-footer__nav__item--link"
                  href="mailto:help@sensibull.com"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  help@sensibull.com
                </a>
                <a
                  className="sn-footer__nav__item sn-footer__nav__item--link"
                  href="https://s3.ap-south-1.amazonaws.com/sensibull-public-documents/T%26C.pdf"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Terms of Use &amp; Privacy Policy
                </a>
                <a
                  className="sn-footer__nav__item sn-footer__nav__item--link"
                  href="/about.html"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div
            className="sn-col"
            style={{
              opacity: 0.5,
              position: "absolute",
              bottom: "-220px",
              left: "50%",
              translate: "-50%",
            }}
          >
            <div className="sn-footer__text sn-text-center">
              ©&nbsp; <span className="year_info">2023</span> All Right
              Reserved. Riskilla Software Technologies Private Limited
            </div>
          </div>
        </div>
      </section>
    </PlaceFooter>
  );
}

export default Footer;
