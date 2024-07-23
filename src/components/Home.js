import React from "react";
import './Home.css';
import img from '../Assets/gitness logo.svg'
// import staticImg from '../Assets/static media.jpg'

const logos = [
  { src: {img}, alt: 'Metrikus', width: 117, height: 52 },
  { src: {img}, alt: 'Tyler Tech', width: 98, height: 52 },
  { src: {img}, alt: 'Ancestry', width: 146, height: 52 },
  { src: {img}, alt: 'Zeroflucs', width: 124, height: 52 },
  { src: {img}, alt: 'Beachbody', width: 90, height: 52 },
  { src: {img}, alt: 'Dkatalis', width: 133, height: 52 },
  { src: {img}, alt: 'Intelliflo', width: 84, height: 52 },
  { src: {img}, alt: 'Jobvite', width: 87, height: 52 },
  { src: {img}, alt: 'United Airlines', width: 149, height: 52 },
  { src: {img}, alt: 'Advanced', width: 135, height: 52 },
];

export default function Home() {
  
  return (
    <>
      <section className="landingPage">
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
            {/* <ul className="logo-list" aria-hidden="true">
              {logos.map((logo, index) => (
                <li key={index} className="logo-item">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="logo-image"
                  />
                </li>
              ))}
            </ul> */}
          </div>
        </div>
        {/* <img src={staticImg} className="staticimg"alt="hello" width="100%"/>  */}
      </section>
    </>
  );
}
