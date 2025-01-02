import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <>
    <div className='education' id='education'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
            EDUCATIONAL DETAILS
        </h2>
        <hr />
  
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2020 - passout"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaSchool/>}
  >
    <h3 className="vertical-timeline-element-title">SSC</h3>
    <p className="vertical-timeline-element-percentile">Percentile: 93%</p> 
    <h4 className="vertical-timeline-element-subtitle">INDAPUR</h4>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2022- passout"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaSchool/>}
  >
    <h3 className="vertical-timeline-element-title">HSC</h3>
    <p className="vertical-timeline-element-percentile">Percentile: 85%</p> 
    <h4 className="vertical-timeline-element-subtitle">BARAMATI</h4>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2024 - present"
    iconStyle={{ background: '#138781', color: '#fff' }}
    icon={<FaSchool/>}
  >
    <h3 className="vertical-timeline-element-title">B.E</h3>
    <p className="vertical-timeline-element-percentile">Avg CGPA: 8.5+</p> 
    <h4 className="vertical-timeline-element-subtitle">DYPCOE,AKURDI</h4>
    
  </VerticalTimelineElement>

    </VerticalTimeline>

    </div>
    </>
  )
}

export default Education
