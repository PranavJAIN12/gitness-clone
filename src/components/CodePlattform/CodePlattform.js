import React from "react";
import codeplat from "../../Assets/__next_static_media_home-placeholder-flexibility.56608fa7.jpg";
import "./CodePlattform.css";
import Vendor from '../../Assets/d846f92d96173dbba59cb703096c3377.svg'

export default function CodePlattform() {
  return (
    <section className="codeplatform" id="codeplatform">
      <div className="container">
        <div className="code-text-content">
          <h2>
            Your Code
            <br />
            Your Language
            <br />
            Your Platform
          </h2>
          <p>
            Packing the power of robust code hosting, seamless collaboration
            through code reviews, and flexible pipelines for any language. All
            with the security and governance policies developers need to write
            and deliver code with confidence.
          </p>

        <div className="vendor" style={{marginTop:'3rem'}}>
        <img src={Vendor} alt="img" height="30px"/>
        <h3 style={{margin:'4px 0'}}>Vendor agnostic</h3>
        <p style={{marginTop:'4px'}}>Create pipelines for GitHub, GitLab, Bitbucket, Azure, and more.</p>
        </div>
        
        <div className="vendor" style={{marginTop:'3rem'}}>
        <img src={Vendor} alt="img" height="30px"/>
        <h3 style={{margin:'4px 0'}}>Platform agnostic</h3>
        <p style={{marginTop:'4px'}}>Build pipelines for any language or platform. Works with Linux, Windows and Mac.</p>
        </div>
        
        
        </div>
        <div className="code-image-content">
          <img src={codeplat} alt="Code Platform" />
        </div>
      </div>
    </section>
  );
}
