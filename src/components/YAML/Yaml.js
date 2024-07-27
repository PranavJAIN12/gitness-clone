import React from "react";
import "./Yaml.css";
import java from "../../Assets/997560325310af92145f7736ce4a9fba.svg";
export default function Yaml() {
  return (
    <section className="yaml">
      <div className="yaml-data">
        <h3 style={{ color: "#a2b4e7" }}>YAML</h3>
        <h1 className="yaml-head">Templatize and standardize</h1>
        <div className="yaml-subdata">
          <p>
            We created hundreds of re-usable pipeline templates so that you
            don't have to.
          </p>
          <button className="btn">Try it now</button>
        </div>
      </div>
      <div className="Cardstemplates">
        <div className="yaml-cards">
          <div className="yaml-card-item">
            <img src={java} height="50px" alt="img" />
            <h3>Java</h3>
            <p>Buld and Test your java applications</p>
            <button className="btn">&gt;</button>
          </div>

          <div className="yaml-card-item">
            <img src={java} height="50px" alt="img" />
            <h3>Java</h3>
            <p>Buld and Test your java applications</p>
            <button className="btn">&gt;</button>
          </div>

          <div className="yaml-card-item">
            <img src={java} height="50px" alt="img" />
            <h3>Java</h3>
            <p>Buld and Test your java applications</p>
            <button className="btn">&gt;</button>
          </div>

          <div className="yaml-card-item">
            <img src={java} height="50px" alt="img" />
            <h3>Java</h3>
            <p>Buld and Test your java applications</p>
            <button className="btn">&gt;</button>
          </div>

          <div className="yaml-card-item">
            <img src={java} height="50px" alt="img" />
            <h3>Java</h3>
            <p>Buld and Test your java applications</p>
            <button className="btn">&gt;</button>
          </div>

          <div className="yaml-card-item">
            <img src={java} height="50px" alt="img" />
            <h3>Java</h3>
            <p>Buld and Test your java applications</p>
            <button className="btn">&gt;</button>
          </div>
        </div>

        <div className="templates">
          <p>Drive standards and consistency across engineering teams.</p>
          <p style={{color:'#ffffff'}}>Explore templates-&gt;</p>
          <p style={{color:'#ffffff'}}>Create your own-&gt;</p>
        </div>
      </div>
    </section>
  );
}
