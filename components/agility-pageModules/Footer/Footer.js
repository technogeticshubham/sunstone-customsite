import React from "react";

const Footer = (props) => {
  console.log("Footer", props);
  const { fields } = props.module;
  return (
    <footer>
      <section className="ft-main">
        <div className="ft-main-item">
          <h2 className="ft-title">{fields.footer1}</h2>
          <ul>
            <li>
              <a href={fields.link1.href}>{fields.link1.text}</a>
            </li>
            <li>
              <a href={fields.link2.href}>{fields.link2.text}</a>
            </li>
            <li>
              <a href={fields.link3.href}>{fields.link3.text}</a>
            </li>
            <li>
              <a href={fields.link4.href}>{fields.link4.text}</a>
            </li>
            <li>
              <a href={fields.link5.href}>{fields.link5.text}</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">{fields.footer2}</h2>
          <ul>
            <li>
              <a href={fields.link01.href}>{fields.link01.text}</a>
            </li>
            <li>
              <a href={fields.link02.href}>{fields.link02.text}</a>
            </li>
            <li>
              <a href={fields.link03.href}>{fields.link03.text}</a>
            </li>
            <li>
              <a href={fields.link04.href}>{fields.link04.text}</a>
            </li>
            <li>
              <a href={fields.link05.href}>{fields.link05.text}</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">{fields.footer3}</h2>
          <ul>
            <li>
              <a href={fields.link001.href}>{fields.link001.text}</a>
            </li>
            <li>
              <a href={fields.link002.href}>{fields.link002.text}</a>
            </li>
            <li>
              <a href={fields.link003.href}>{fields.link003.text}</a>
            </li>
          </ul>
        </div>
        <div className="ft-main-item">
          <h2 className="ft-title">{fields.footer4}</h2>
          <ul>
            <li>
              <a href={fields.link0001.href}>{fields.link0001.text}</a>
            </li>
            <li>
              <a href={fields.link0002.href}>{fields.link0002.text}</a>
            </li>
            <li>
              <a href={fields.link0003.href}>{fields.link0003.text}</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="ft-social">
        <ul className="ft-social-list">
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </section>

      <section className="ft-legal">
        <ul className="ft-legal-list">
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>&copy; Copyright 2020. Sunstone Eduversity</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
