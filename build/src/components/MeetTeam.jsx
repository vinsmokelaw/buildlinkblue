import React from 'react';
import './MeetTeam.css';

import tafadzwaImg from '../assets/Tafadzwa.png';
import danielImg from '../assets/Daniel.png';
import tracyImg from '../assets/Tracey.png';
import bernadetteImg from '../assets/Bernadette.png';
import kimberlyImg from '../assets/Kimberly.png';
import ellartonImg from '../assets/ellarton.png';

const teamData = [
  { name: 'Tafadzwa H.', position: 'Co-Founder', image: tafadzwaImg },
  { name: 'Daniel X.', position: 'Site Manager', image: danielImg },
  { name: 'Tracy X.', position: 'Client Assistant', image: tracyImg },
  { name: 'Bernadette T.', position: 'Manager', image: bernadetteImg },
  { name: 'Kimberly', position: 'Supervisor', image: kimberlyImg },
  { name: 'Ellarton H.', position: 'Site Assistant', image: ellartonImg },
];

const MeetTeam = () => {
  return (
    <div className="itemTeams">
      <h3 className="text-center">Meet Our Team</h3>
      <p className="text-center">
        "Meet the BuildLink team! Our skilled professionals bring expertise and dedication to every project. Together, we ensure your vision is realized with quality and care!"
      </p>

      <div className="flexitems">
        {teamData.map((member, index) => (
          <div className="pipoL" key={index}>
            <div
              className="teamImage"
              style={{ backgroundImage: `url(${member.image})` }}
            ></div>
            <div className="flexDiv">
              <p>Name: {member.name}</p>
              <p>Position: {member.position}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="orangebutton">
  <button className="btn intouch">Get in Touch</button>
</div>
    </div>
  );
};

export default MeetTeam;
