import React from "react";
import './GitExperience.css'; // Import the CSS file
import pullreq from '../Assets/pullreq.svg'
import review from '../Media/coding.mp4'
import security from '../Assets/Screenshot 2024-07-27 114142.png'

const data = [
  { head: 'chore: fix authentication bug', date: '23 Jul 24', time: '09:15AM' },
  { head: 'feat: add user profile page', date: '23 Jul 24', time: '10:30AM' },
  { head: 'fix: resolve issue with payment gateway', date: '22 Jul 24', time: '03:20PM' },
  { head: 'docs: update README with setup instructions', date: '21 Jul 24', time: '01:10PM' },
  { head: 'chore: clean up deprecated methods', date: '20 Jul 24', time: '02:45PM' },
  { head: 'feat: implement search functionality', date: '19 Jul 24', time: '11:00AM' },
  { head: 'fix: correct typo in error message', date: '18 Jul 24', time: '04:30PM' },
  { head: 'chore: update dependencies', date: '17 Jul 24', time: '05:00PM' },
  { head: 'feat: add dark mode support', date: '16 Jul 24', time: '10:00AM' },
  { head: 'docs: refine API documentation', date: '15 Jul 24', time: '12:00PM' }
];

export default function GitExperience() {
  return (
    <div>

    
    <div className="border-glow">
      <span className="noise"></span>
      <p className="git-experience-title">
        Commit.<br />Branch.<br />Merge.
      </p>
      <div className="branch-animation-mask">
        <span className="vertical-line" aria-hidden="true"></span>
        <div className="canvas-container">
          <ul className="canvas-list">
            {data.map((item, index) => (
              <li key={index} className="canvas-item">
                <p style={{fontSize: '18px'}}>{item.head}</p>
                <p style={{fontSize:'14px', color:'#3f4148'}}>{item.date} {item.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <section className="reviewandSecurity">
      <div className="review">
        <video width="500" height="300" loop muted autoPlay>
          <source src={review} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <b>Code reviews.</b> Seamlessly integrates into your development workflow.
      </div>
      <div className="security">
        <img src={security} alt="security" width="500" height="350" />
      </div>
    </section>
    <div className="completeSolution">
      <p>A complete solution for engineering teams of all sizes.</p>
      <div className="solBtn">
        <button className="solBtn-item btn" style={{backgroundColor:'#070709', color: 'white', border: '2px solid #19191b'}}><img src={pullreq} alt="mmm" height='28px' style={{marginRight:'0.5rem'}}/>  Pull Request</button>
        <button className="solBtn-item btn" style={{backgroundColor:'#070709', color: 'white', border: '2px solid #19191b'}}><img src={pullreq} alt="mmm" height='28px' style={{marginRight:'0.5rem'}}/>Compare revisons</button>
        <button className="solBtn-item btn" style={{backgroundColor:'#070709', color: 'white', border: '2px solid #19191b'}}><img src={pullreq} alt="mmm" height='28px' style={{marginRight:'0.5rem'}}/>Browse Code</button>
        <button className="solBtn-item btn" style={{backgroundColor:'#070709', color: 'white', border: '2px solid #19191b'}}><img src={pullreq} alt="mmm" height='28px' style={{marginRight:'0.5rem'}}/>Quality Gates</button>
        <button className="solBtn-item btn" style={{backgroundColor:'#070709', color: 'white', border: '2px solid #19191b'}}><img src={pullreq} alt="mmm" height='28px' style={{marginRight:'0.5rem'}}/>WebHooks</button>
        <button className="solBtn-item btn" style={{backgroundColor:'#070709', color: 'white', border: '2px solid #19191b'}}><img src={pullreq} alt="mmm" height='28px' style={{marginRight:'0.5rem'}}/>Protected Branches</button>
        <button className="solBtn-item btn" style={{backgroundColor:'#070709', color: 'white', border: '2px solid #19191b'}}><img src={pullreq} alt="mmm" height='28px' style={{marginRight:'0.5rem'}}/>Notification and alerts</button>
      </div>
    </div>
   
    </div>
  );
}
