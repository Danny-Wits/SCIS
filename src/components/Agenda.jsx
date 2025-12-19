import React from 'react';

const Agenda = () => {
  const agendaItems = [
    { time: '9:00 AM', title: 'Registration & Welcome Coffee' },
    { time: '9:30 AM', title: 'Opening Keynote: The Future of Construction Innovation' },
    { time: '10:30 AM', title: 'Capital Program Management with Oracle' },
    { time: '11:30 AM', title: 'Break' },
    { time: '12:00 PM', title: 'Scheduling & Project Management Best Practices' },
    { time: '1:00 PM', title: 'Lunch' },
    { time: '2:00 PM', title: 'Predictive Analytics & AI in Construction' },
    { time: '3:00 PM', title: 'End-to-end Project Control Solutions' },
    { time: '4:00 PM', title: 'Panel Discussion & Q&A' },
    { time: '5:00 PM', title: 'Closing Remarks & Networking' }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Agenda</h2>
        <div className="timeline">
          {agendaItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <strong>{item.time}</strong> - {item.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;