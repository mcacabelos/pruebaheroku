import React, { Component } from "react";

import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import twitter from '../assets/img/twitter.png';
import youtube from '../assets/img/youtube.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
       
          <div className="footer-links-social">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
           
          </div>
         
       <br></br>
       
      </footer>
    );
  }
}

export default Footer;