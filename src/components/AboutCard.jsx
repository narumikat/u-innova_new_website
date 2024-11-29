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

                <div className="d-flex justify-content-center align-items-center" id="about">
                    <h2 className="gradient-font2 mt-5">Who We Are</h2>
                </div>
                <div className="d-flex card-box">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="card-about">
                            <div className="card-about-body">
                                <img src={member.imgSrc} alt={member.alt}/>
                                <div className="card-content">
                                    <h2>{member.name}</h2>
                                    <p>{member.description}</p>
                                    <a href='/about' className="button">
                                        About Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

        </section>
    );
};

export default AboutCards;
