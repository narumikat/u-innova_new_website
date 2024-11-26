import React from 'react';

import CassianoImage from '../assets/cassiano.jpg'
import NarumiImage from '../assets/narumi.jpg'

const teamMembers = [
    {
        name: 'Cassiano Yasumitsu',
        imgSrc: CassianoImage,
        description:
            'Backend Software Engineer with experience in developing management solutions for the real estate sector in Tokyo.',
        alt: 'Cassiano Yasumitsu',
        link: 'about.html',
    },
    {
        name: 'Narumi Katayama',
        imgSrc: NarumiImage,
        description:
            'Software developer with a passion for backend development, also experienced in web design, graphic design, digital marketing, and front-end development.',
        alt: 'Narumi Katayama',
        link: 'about.html',
    },
];

const AboutCards = () => {
    return (
        <section className="card-container">
            {teamMembers.map((member, index) => (
                <div key={index} className="card-about">
                    <div className="card-about-body">
                        <img src={member.imgSrc} alt={member.alt} />
                        <div className="card-content">
                            <h2>{member.name}</h2>
                            <p>{member.description}</p>
                            <a href={member.link} className="button">
                                About Us
                                <span className="material-symbols-outlined">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default AboutCards;
