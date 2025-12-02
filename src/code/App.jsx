import '../css/App.css';

// images + icons
import avatar from "../assets/images/avatar-jessica.jpeg";

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from 'react-icons/si';

function SocialProfile() {
  const card = [
    {
      img: avatar,
      name: "Jessica Randall",
      location: "London, United Kingdom",
      desc: "Front-end developer and avid reader",
      linkOne: "GitHub",
      linkTwo: "Frontend Mentor",
      linkThree: "LinkedIn",
      linkFour: "Twitter",
      linkFive: "Instagram"
    }
  ];

  return (
    <div className="container">
      <div className="profile-card-container">
        {card.map((c, idx) => (
          <div key={idx} className='profile-card'>
            <span className="img-wrapper" aria-label={`Image of ${c.name}`}>
              <img src={c.img} alt={`Image of ${c.name}`} />
            </span>
            <h1 className="name">{c.name}</h1>
            <h2 className="location">{c.location}</h2>
            <h3 className="description">{c.desc}</h3>

            <div className="social-links-wrapper">
              <a href="https://www.github.com" target="_blank" rel="noopener referrer">
              <span className="social-icon"><FaGithub /></span>
                {c.linkOne}
              </a>
              <a href="https://www.frontendmentor.io" target="_blank" rel="noopener referrer">
              <span className="social-icon"><SiFrontendmentor /></span>
                {c.linkTwo}
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener referrer">
              <span className="social-icon"><FaLinkedin /></span>
                {c.linkThree}
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener referrer">
              <span className="social-icon"><FaXTwitter /></span>
                {c.linkFour}
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener referrer">
              <span className="social-icon"><FaInstagram /></span>
                {c.linkFive}
              </a>
            </div>

          </div>
        ))}
      </div>
       <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener referrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.github.com/AaX003" target="_blank" rel="noopener referrer">AXACODES</a>.
      </div>
    </div>
  )
}

export default SocialProfile
