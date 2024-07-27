import React from 'react'
import './Performance.css'
import per from '../../../Assets/performance.png'

export default function Performance() {
  return (
    <section className="performance">
      <p style={{color:'#dbb497'}}> Performance</p>
        <h1 className='per-head'>Up to 4x faster pipeline execution</h1>
        <p className="per-data">Reduce pipeline execution up to 90% with intelligent test selection and caching. Powered by advanced instrumentation and call graph analysis.</p>
        <img src={per} alt='img' height='500px'/>
    </section>
  )
}
