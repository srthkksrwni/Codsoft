import React from "react";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import Project from "./project";
import Footer from "./footer";
import BackToTop from "./backtotop";

function Index() {
  return (
    <>
 
      <Header/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
      <BackToTop/>

        <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
        <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>
        {/* <!-- bootstrap 3 affix --> */}
        <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>

        {/* <!-- steller js --> */}
        <script src="assets/js/steller.js"></script>
    </>
  );
}

export default Index;
