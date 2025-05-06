import React from 'react';
import '../assets/styles/Award.scss'; 
import deanlist from '../assets/images/deanlist.png';
import scholarship from '../assets/images/scholarship.png';
import ehacks from '../assets/images/ehacks.png';

const awards = [
  {
    title: 'Dean’s List',
    image: deanlist,
    entries: [
      { date: 'Fall 2024', description: 'Recognized for academic excellence.' },
    ],
  },

  {
    title: 'SIUE School of Engineer - Annual Honors Reception',
    image: scholarship,
    entries: [
      { date: 'Spring 2025', description: 'Recipient of the Heise Family Foundation Computer Science Scholarship' },
    ],
  },
  
  {
    title: 'eHacks 2024',
    image: ehacks,
    entries: [
      {date: '03/2024', description: 'Overall first place at eHacks 2024'},
    ],
  },
];

function Award() {
  return (
    <section id="award" className="award-section">
      <h2>Awards & Honors</h2>
      <div className="award-list">
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            <h3>{award.title}</h3>
            {award.entries.map((entry, entryIndex) => (
              <div key={entryIndex} className="timeline-entry">
                <div className="date">{entry.date}</div>
                <p>{entry.description}</p>
                <img className="award-image" src={award.image} alt={award.title} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Award;

