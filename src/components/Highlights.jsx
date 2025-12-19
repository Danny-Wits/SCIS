import React from 'react';

const Highlights = () => {
  const highlights = [
    'Capital Program Management',
    'Scheduling & Project Management',
    'Predictive Analytics & AI',
    'End-to-end Project Control'
  ];

  return (
    <section className="section section-light">
      <div className="container">
        <h2>Key Highlights</h2>
        <div className="grid grid-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="card">
              <h3>{highlight}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;