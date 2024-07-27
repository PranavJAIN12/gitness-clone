import React from 'react';
import codeplat from '../../Assets/__next_static_media_home-placeholder-flexibility.56608fa7.jpg';
import './CodePlattform.css';

export default function CodePlattform() {
  return (
    <section className="codeplatform" id="codeplatform">
      <div className="container">
        <div className="code-text-content">
          <h2>Your Code<br />Your Language<br />Your Platform</h2>
          <p>Packing the power of robust code hosting, seamless collaboration through code reviews, and flexible pipelines for any language. All with the security and governance policies developers need to write and deliver code with confidence.</p>
        </div>
        <div className="code-image-content">
          <img src={codeplat} alt="Code Platform" />
        </div>
      </div>
    </section>
  );
}
