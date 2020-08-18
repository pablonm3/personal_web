import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';

class Header extends Component {
  render() {
    if (this.props.data) {
      var project = this.props.data.project;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <div className="main-grid">
        <div className="column-grid social-info">
          <div className="profileImg">
            <img
              role="presentation"
              className="img-circle center-block"
              src="/images/pablo.jpeg"
              width="150"
            />
          </div>
          <ul className="social">
            <li>
              <a
                href="https://github.com/pablonm3"
                target="_blank"
                className="button btn github-btn"
              >
                <i className="fa fa-github"></i>Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pablonm/"
                target="_blank"
                className="button btn github-btn"
              >
                <i className="fa fa-linkedin"></i>Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://s3.amazonaws.com/pablomarino.me.assets/resume.pdf"
                target="_blank"
                className="button btn github-btn"
              >
                <i className="fa fa-file"></i>Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="column-grid">
          <h1 className="headline">{name}</h1>
          <br />
          <h3 className="description">
            Ssr Full-stack software engineer. Making the transition into Machine
            Learning, I have a professional certificate on AI from Stanford
            University and love to work on open source projects and research.
            Experimenting with new technologies is one of my biggest passions in
            life.<br></br> CS student @ University of London living in
            Argentina.
          </h3>
        </div>
        <ParticlesBg className="particlesBg" type="circle" bg={true} />
      </div>
    );
  }
}

export default Header;
