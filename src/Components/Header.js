import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
const axios = require('axios');

class Header extends Component {
  constructor(props) {
    super(props);
    addResponseMessage(
      'Welcome to my AI powered chatbot, use it to ask questions about myself'
    );
    addResponseMessage(
      'DISCLAIMER: even though this chatbot sometimes responds with real information about myself, it was also trained with data from the internet, In no case should inappropriate content generated as a result of using it be construed to reflect the views or values of myself, it is merely a research/academic project'
    );
  }

  handleNewUserMessage(newMessage) {
    console.log(`New message incoming! ${newMessage}`);
    axios
      .post('http://167.172.135.18:80', { msg: newMessage })
      .then(function (response) {
        // handle success
        console.log('response from chatbot API: ', response);
        addResponseMessage(response.data);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
    // Now send the message throught the backend API
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
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
        <Widget
          profileAvatar="/images/pablo.jpeg"
          title="Pablo Bot"
          subtitle="AI Powered chatbot"
          handleNewUserMessage={this.handleNewUserMessage}
        />
        <ParticlesBg className="particlesBg" type="circle" bg={true} />
      </div>
    );
  }
}

export default Header;
