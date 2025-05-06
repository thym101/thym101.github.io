import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="8/2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Supplemental Instructor - Calculus</h3>
            <h4 className="vertical-timeline-element-subtitle">Southern Illinois University Edwardsville</h4>
            <p>
              Led peer-based Calculus 2 sessions at SIUE, aligning with course goals and supporting student learning.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="5/2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Science Tutor</h3>
            <h4 className="vertical-timeline-element-subtitle">Southern Illinois University Edwardsville</h4>
            <p>
              Assist students with subjects like Calculus, Data Structures, and Programming Languages.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="05/2024 - 08/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cougar Connector</h3>
            <h4 className="vertical-timeline-element-subtitle">Southern Illinois University Edwardsville</h4>
            <p>
              Served as a Welcome Weekend leader at SIUE, assisting diverse students and ensuring a smooth, inclusive experience through trained customer service and event support.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08/2022 - 09/2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Volunteer Teaching Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Center for Inclusive Education Supporting of Children with Disabilities, Vietnam</h4>
            <p>
              Volunteered at a Vietnamese center for children with disabilities, supporting inclusive education through classroom assistance, student engagement, and collaboration with staff.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;