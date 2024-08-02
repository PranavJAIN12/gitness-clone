import React from "react";
import "./Home.css";
import img from "../Assets/gitness logo.svg";
import staticImg from "../Assets/static media.jpg";

const logos = [
  { src: { img }, alt: "Metrikus", width: 117, height: 52 },
  { src: { img }, alt: "Tyler Tech", width: 98, height: 52 },
  { src: { img }, alt: "Ancestry", width: 146, height: 52 },
  { src: { img }, alt: "Zeroflucs", width: 124, height: 52 },
  { src: { img }, alt: "Beachbody", width: 90, height: 52 },
  { src: { img }, alt: "Dkatalis", width: 133, height: 52 },
  { src: { img }, alt: "Intelliflo", width: 84, height: 52 },
  { src: { img }, alt: "Jobvite", width: 87, height: 52 },
  { src: { img }, alt: "United Airlines", width: 149, height: 52 },
  { src: { img }, alt: "Advanced", width: 135, height: 52 },
];

export default function Home() {
  const ayushdiv = (
    <div className="text-lineXX" id='box'>
      <div className="grid" />
      <div id="poda">
        <div className="glow" />
        <div className="darkBorderBg" />
        <div className="darkBorderBg" />
        <div className="darkBorderBg" />
        <div className="white" />
        <div className="border" />
        <div id="main">
          <input
            placeholder="Andrew Pushed Code"
            type="text"
            name="text"
            className="input"
          />
          <div id="input-mask" />
          <div id="pink-mask" />
          <div className="filterBorder" />
          <div id="filter-icon">
            <svg
              preserveAspectRatio="none"
              height={27}
              width={27}
              viewBox="4.8 4.56 14.832 15.408"
              fill="none"
            >
              <path
                d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
                stroke="#d6d6e6"
                strokeWidth={1}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="landingPage">
        <div className="left-section">
          <div className="getStarted">
            <p>Open-source code hosting & pipeline engine</p>
            <button className="btn">Get started</button>
          </div>

          <div className="logo-wall">
            <p>The world largest company that trust the Harness plattform</p>
            <div className="logo-wall-mask">
              <ul className="logo-list">
                {logos.map((logo, index) => (
                  <li key={index} className="logo-item">
                    <img
                      src={img}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="logo-image"
                    />
                  </li>
                ))}
              </ul>
             
            </div>
          </div>
        </div>
        <div className="text-container">
          <div className="text-content">
           

            {ayushdiv}
            <br />
            {ayushdiv}
            
            <br />
            <div style={{marginLeft:'5rem'}}> {ayushdiv}</div>
            
            <br />
            {ayushdiv}
            
            <br />
            <div style={{marginLeft:'5rem'}}> {ayushdiv}</div>
            
            <br />
          </div>
        </div>
      </section>
      <img src={staticImg} alt="img" width="100%" height="50%" />
    </>
  );
}