import React from 'react'
import './SetupGit.css'
import gitImg from '../../Assets/setupGit.png'
export default function SetupGit() {
  return (
    <section className='setupGit'>
        <h1 className='setupGit-head'>Setup Gitness in 30 seconds</h1>
        <p className='setupGit-data'> Install with a single Docker command. Lightweight enough to run on a $4 Digital Ocean droplet.</p>
        <div className="btnimg">

        <button className='btn'>Get started</button>
        <img src={gitImg} alt='img'/>
        </div>
    </section>
  )
}
