import React from "react";
import "./Pipeline.css";
import pipeline from "../../Assets/pipeline.png";
import integration from '../../Media/integrations.mp4'

export default function Pipeline() {
  return (
    <>
      <section className="pipeline" id="pipeline">
        <div className="head">
          <p>Pipelines</p>
          <h5>Ship code fast automate everything.</h5>
          <p
            className="pipeline-subdata"
            style={{
              fontSize: "1.125rem",
              fontWeight: "400",
              width: "70%",
              lineHeight: "1.4",
              color: "#adb0b9",
            }}
          >
            Gitness provides a fully integrated CI/CD engine that is big on
            features and light on learning curve.
          </p>
        </div>
      </section>
      <div className="pipeline-glow" style={{ width: "80%", display: "flex" }}>
        <p className="pipeline-experience-title">
          Build.
          <br />
          Test.
          <br />
          Deploy.
          <br />
          <button className="btn">Get Started</button>
        </p>
        <img
          src={pipeline}
          alt="pipeline"
          height="600"
          style={{ marginLeft: "3rem" }}
        />
      </div>
      <section className="integrationandMigration">
    <div className="Integration">
    <video  width="500" height='350' loop muted autoPlay ><source src={integration} type="video/mp4"/></video>
    Publish, deploy, notify, report - <b>Gitness integrates with your favorite tools.</b> Create custom integration with ease and share with the community.</div>
    <div className="Migration">

    <button type="button" class="button">
  <div class="button-top">Migrate</div>
  <div class="button-bottom"></div>
  <div class="button-base"></div>
</button>
<p>With a single click, <b>Gitness can automatically migrate code repositories and pipelines</b> from GitHub, GitLab, Bitbucket, Circle and more.</p>
    </div>
      
    </section>
    </>
  );
}
