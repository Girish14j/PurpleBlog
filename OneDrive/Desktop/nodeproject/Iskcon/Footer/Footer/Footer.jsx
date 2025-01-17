import React from "react";
import './Footer.css'
import yt from '../assets/yt.png'
import ig from '../assets/ig.png'
import x from '../assets/x.png'
import fb from '../assets/fb.png'

const Footer = () => {
    return (
      <footer id="bottom" data-anchor="true" data-name="Footer" className="footer">
        <div id="footer" className="footer-container">
          <section className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12 text-left footer-text" id="descript">
                  <img
                    src="//iskconmumbaipull-21250.kxcdn.com/bi_theme_snippets/static/src/img/footer-logo.jpg"
                    alt="ISKCON"
                    className="footer-img1"
                    loading="lazy"
                  />
                  <div className="footer-info">
                    <h4 className="emp">ISKCON</h4>
                    <p>
                      International Society for Krishna Consciousness<br />
                      Hare Krishna land, Juhu, Mumbai - 400049
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 text-right footer-text">
                  <div className="founder">
                  <div className="footer-info">
                      <h4 className="emp">Founder-Acharya</h4>
                      <p>
                        His Divine Grace<br />
                        A.C. Bhaktivedanta Swami Prabhupada
                      </p>
                    </div> 
                    <img
                      src="//iskconmumbaipull-21250.kxcdn.com/bi_theme_snippets/static/src/img/author-iskcon.jpg"
                      className="footer-img2"
                      alt="Swami Prabhupada"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <hr className="footer-divider" />
              <div className="rowman">
                <div className="col-sm-12 footer-text regaddress">
                  <div>
                    <div className="footer-info head-ofc">
                      <h4 className="heavy">Head Office of ISKCON India</h4>
                      <p>
                        Hare Krishna Land, Juhu, Mumbai-400049, India<br />
                        Registered under Maharashtra Public Trust Act 1950<br />
                        vide Registration No. F-2179 (Bom)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="footer-divider-main" />
              <div className="row bottom-footer" id="below">
                <div className="col-xs-12 col-sm-12 col-md-3 text-left" id="first">
                  <p className="footer-bottom-text-p">© 2024 ISKCON Juhu Mumbai</p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 text-left" id="second">
                  <p>
                    <a href="mailto:info@iskconmumbai.com">info@iskconmumbai.com</a>
                  </p>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 text-left" id="third" >
                  <a href="/policies">
                    <p>Policies of Usage</p>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 text-left" >
                <ul className="footer-social">
                <li>
                    <a target="_blank" href="https://www.facebook.com/iskconjuhu">
                    <img src={fb} alt="Facebook" className="footer-social-icon" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://twitter.com/ISKCONJuhu">
                    <img src={x} alt="Twitter" className="footer-social-icon" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.youtube.com/channel/UC1vJ4RlWSHP6n0xL2G1tkYQ">
                    <img src={yt} alt="YouTube" className="footer-social-icon" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/iskcon_juhumumbai/">
                    <img src={ig} alt="Instagram" className="footer-social-icon" />
                    </a>
                </li>
                </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="footer-copyright">
          <div className="container py-3">
            <div className="row">
              <div className="col-sm text-center text-sm-start text-muted">
                <span className="footer-copyright-name"></span>
              </div>
              <div className="col-sm text-center text-sm-end"></div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  