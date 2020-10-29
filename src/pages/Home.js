import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import logo from '../assets/img/logo-test.png';
import HomeCosas from "../components/HomeCosas";

function Home() {

    return (
      
      <section>
        <section>
        <HomeNavbar />
          <div className="search-section container">
          <div className="section-logo">
            <img src={logo} alt="Nature" class="responsive" />
            </div>         
            <h1 className="h1home">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lectus purus. Pellentesque fringilla ultricies venenatis.</h1>
            <br />
            <br />
          </div>
        </section>
        <HomeCosas/>
      </section>
    );
};


export default Home;