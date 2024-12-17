import CassianoImage from '../assets/cassiano.jpg';
import NarumiImage from '../assets/narumi.jpg';
import CintiaImage from '../assets/cintia2.jpeg';
import MarceloImage from '../assets/marcelo2.png';
import RodrigoImage from '../assets/rodrigo2.png';

const teamMembers = [
    {
        name: 'Narumi Katayama',
        imgSrc: NarumiImage,
        description:
            'CEO | Founder',
        alt: 'Narumi Katayama',
        link: '/about',
    },
    {
        name: 'Cassiano Yasumitsu',
        imgSrc: CassianoImage,
        description:
            'CTO | Co-founder',
        alt: 'Cassiano Yasumitsu',
        link: '/about',
    },
    {
        name: 'Rodrigo Toyoda',
        imgSrc: RodrigoImage,
        description: 'Lead Front-End Developer',
        alt: 'Rodrigo Toyoda',
        link: '/about',
    },
    {
        name: 'Marcelo Hirata',
        imgSrc: MarceloImage,
        description: 'Data Analyst & Technical Translator',
        alt: 'Marcelo Hirata',
        link: '/about',
    },
    {
        name: 'Midori Tamashiro',
        imgSrc: CintiaImage,
        description: 'International Communication Specialist',
        alt: 'Cintia Tamashiro',
        link: '/about',
    }
];

const AboutCards = () => {
    return (
        <section className="card-container">
            <div className="d-flex justify-content-center align-items-center" id="about">
                <h2 className="gradient-font2 mt-5">Who We Are</h2>
            </div>
            <div className="row justify-content-center card-box">
                {teamMembers.slice(0, 2).map((member, index) => (
                    <div key={index} className="col-12 col-md-2 d-flex justify-content-center">
                        <a
                            href={member.link}
                            className="card-about"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <div className="card-about-body">
                                <img src={member.imgSrc} alt={member.alt}/>
                                <div className="card-content">
                                    <h2>{member.name}</h2>
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <div className="row justify-content-center mt-4 card-box">
                {teamMembers.slice(2).map((member, index) => (
                    <div key={index} className="col-12 col-md-3 d-flex justify-content-center">
                        <a
                            href={member.link}
                            className="card-about"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <div className="card-about-body">
                                <img src={member.imgSrc} alt={member.alt}/>
                                <div className="card-content">
                                    <h2>{member.name}</h2>
                                    <p>{member.description}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutCards;
