import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import StartProject from "../components/StartProject.jsx";
import AboutImg from '../assets/we_think.png'
import CassianoImg from '../assets/cassiano.png'
import NarumiImg from '../assets/narumi.png'
import CintiaImg from '../assets/cintia.png'
import MarceloImg from '../assets/marcelo.png'
import RodrigoImg from '../assets/rodrigo.png'
import HandsPhone from '../assets/hands-phone.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb, faPhone, faCalendar} from '@fortawesome/free-solid-svg-icons'

const AboutPage = () => {
    return (
        <div className="about-page">
            < NavBar/>
            <div className="about-page-top">
                <h1>About Us</h1>
            </div>
            <div className="container">
                <div className="d-flex row">
                    <div className="col-12 col-md-6">
                        <h3 className="gradient-font">Web Solution Company</h3>
                        <p>U-Innova Studios is a dynamic company specializing in software development, and
                            digital marketing. <br/>Our mission is to drive client success by delivering creative and
                            effective
                            solutions. <br/> We transform ideas into reality, offering exceptional creativity to propel
                            your
                            business forward. By distinguishing your brand from the competition, we help you reach your
                            target audience memorably. <br/> Our comprehensive services include <strong>software
                                solutions,
                                digital
                                marketing, web design, graphic design, and digital media </strong>.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center px-4">
                        <img src={AboutImg} alt="we think, we design, we develop" className="img-we"/>
                    </div>
                </div>

                <div className="d-flex row services">
                    <div className="col-12 col-md-7 d-flex justify-content-center align-items-center px-4">
                        <div className="img-hands">
                            <img src={HandsPhone} alt="hands phone"/>
                        </div>
                    </div>
                    <div className="col-12 col-md d-flex justify-content-center align-items-center px-4">
                        <div>
                            <h3 className="gradient-font">Our Company Skills</h3>
                            <ul>
                                <li>Marketing Strategies</li>
                                <li>Graphic Design</li>
                                <li>Web Design</li>
                                <li>Branding</li>
                                <li>Social Media</li>
                                <li>Online Advertising</li>
                                <li>SEO (Search Engine Optimization)</li>
                                <li>Insightful Data Analytics</li>
                                <li>Email Marketing</li>
                                <li>Software Development</li>
                                <li>E-commerce Development</li>
                                <li>LINE bot development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="why-choose-us">
                    <h2 className="gradient-font text-center">Why Choose Us</h2>
                    <div className="row mt-5">
                        <div className="col-md-4 m-2">
                            <div className="card">
                                < FontAwesomeIcon icon={faLightbulb}/>
                                <h5>Innovative Solutions</h5>
                                <p>We provide tailored solutions for your business challenges, leveraging advanced
                                    technology to keep you competitive.</p>
                            </div>
                        </div>
                        <div className="col-md-4 m-2">
                            <div className="card">
                                < FontAwesomeIcon icon={faPhone}/>
                                <h5>Dedicated Support</h5>
                                <p>We are dedicated to your success with personalized attention and ongoing support to
                                    help you achieve your goals.</p>
                            </div>
                        </div>
                        <div className="col-md m-2">
                            <div className="card">
                                < FontAwesomeIcon icon={faCalendar}/>
                                <h5>Proven Expertise</h5>
                                <p>With years of experience in software development and digital marketing, we deliver
                                    high-quality solutions and consistently exceed expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="founders">
                    <h2 className="gradient-font text-center">Company Founders</h2>
                    <div className="row mt-5 pb-5">

                        <div className="col-12 col-md-6 order-last order-md-first">
                            <h3 className="gradient-font">Cassiano Yasumitsu</h3>
                            <p>
                                A highly skilled backend software engineer with expertise in designing and implementing
                                robust, scalable management solutions, particularly for the real estate sector in Tokyo.
                                With a proven ability to develop systems that optimize operations and solve complex
                                challenges, I bring a deep understanding of backend architecture and a commitment to
                                delivering excellence in every project. <br/>
                                My expertise spans API development, database design, and system optimization, with a
                                focus on creating solutions that are both efficient and secure. I have extensive
                                experience in integrating cloud technologies to build resilient infrastructures and
                                leverage modern DevOps practices for seamless deployment and maintenance. <br/>
                                In addition to technical expertise, I have a strong background in data-driven
                                decision-making, AI-driven automation, and information security, ensuring that all
                                solutions are future-proof and aligned with the latest industry standards.
                            </p>
                            <h5>Key Skills</h5>
                            <ul>
                                <li>Backend development and system optimization.</li>
                                <li>Advanced API design</li>
                                <li>Cloud computing</li>
                                <li>Proficiency in DevOps tools</li>
                                <li>AI integration for process automation and predictive analytics.</li>
                                <li>Strong understanding of data modeling, ETL processes, and big data tools.</li>
                                <li>Expertise in information security and scalable data infrastructure.</li>

                            </ul>
                            <small>Python, Ruby, JavaScript, Wordpress, Shopify, Golang, Django, Ruby on Rails,
                                Node.js, AWS, PostgreSQL, MySQL, MongoDB, Redis, ETL
                                Pipelines, Apache Spark, BigQuery, TensorFlow, PyTorch, OAuth, JWT, Encryption
                                Standards (SSL/TLS), Penetration Testing</small>
                        </div>
                        <div className="col-12 col-md order-first order-md-last">
                            <div className="founder-img">
                                <img src={CassianoImg} alt="Cassiano Yasumitsu"/>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pt-5">
                        <div className="col-12 col-md">
                            <div className="founder-img">
                                <img src={NarumiImg} alt="Narumi Katayama"/>
                            </div>
                        </div>
                        <div className="col-12 col-md">
                            <h3 className="gradient-font">Narumi Katayama</h3>
                            <p>A versatile full stack developer with extensive experience in web design, graphic design,
                                and digital marketing. My passion for graphic design drives me to create impactful
                                layouts that capture the essence of a brand and resonate with its audience.

                                As a backend developer specializing in Artificial Intelligence (AI), I focus on building
                                intelligent, scalable systems that solve complex challenges and enhance business
                                operations. My expertise lies in designing robust architectures and integrating
                                AI-powered solutions to automate processes, improve efficiency, and deliver data-driven
                                insights.
                                <br/>
                                In addition to my technical expertise, I am also an influencer with a dedicated online
                                presence and thousands of followers. I leverage my platform to connect with audiences,
                                share insights, and promote brands in a meaningful and engaging way. My understanding of
                                digital media and branding allows me to create authentic content that resonates with my
                                community.</p>
                            <h5>Key Skills</h5>
                            <ul>
                                <li>Full stack development (front-end and back-end).</li>
                                <li>Advanced backend development with a focus on scalable systems.</li>
                                <li>Expertise in AI integration and intelligent solutions.</li>
                                <li>Graphic design and brand-focused layouts.</li>
                                <li>Digital marketing and media strategy optimization.</li>
                                <li>Influencing and community engagement.</li>
                            </ul>
                            <small>HTML, CSS, JavaScript, Phyton, Ruby, React.js, Vue.js, Next.js, Node js,
                                Django/Flask, Ruby on Rails, PostgreSQL, MySQL, SQLite, Docker, Kubernetes, Adobe
                                Creative
                                (Photoshop, Illustrator, After Effects), Figma, WordPress, Shopify,
                                Webflow</small>
                        </div>
                    </div>
                </div>
                <div className="team-members mt-5">
                    <h2 className="gradient-font text-center">Team Members</h2>
                    <div className="row mt-5 pb-5">
                        <div className="col-12 col-md-6 order-last order-md-first">
                            <h3 className="gradient-font">Rodrigo Toyoda</h3>
                            <p>Front-End Developer with a strong foundation in modern web development technologies.
                                Ayanori brings proven experience in designing and implementing interactive, scalable,
                                and user-friendly solutions. <br/>
                                With a solid background as both a developer and teaching assistant, Ayanori combines
                                technical expertise with a passion for knowledge sharing and mentorship. His experience
                                includes refining codebases for enhanced performance, integrating seamlessly with
                                back-end systems, and delivering user-centric features that drive business goals.</p>
                            <h5>Key Skills</h5>
                            <ul>
                                <li>Front-End Development</li>
                                <li>Codebase Optimization and Scalability</li>
                                <li>R&D Collaboration for Feature Implementation</li>
                                <li>Teaching and Mentoring in Software Development</li>
                                <li>Experience with Cloud Deployment and Agile Methodologies</li>
                            </ul>
                            <small>HTML, CSS, JavaScript, TypeScript, React.js, Next.js, React Native, Tailwind CSS,
                                Figma,
                                Bootstrap, PostgreSQL, MySQL, SQLite, Node.js, Ruby on rails</small>
                        </div>
                        <div className="col-12 col-md order-first order-md-last">
                            <div className="founder-img">
                                <img src={RodrigoImg} alt="Rodrigo Toyoda"/>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pt-5">
                        <div className="col-12 col-md">
                            <div className="founder-img">
                                <img src={MarceloImg} alt="Marcelo Hirata"/>
                            </div>
                        </div>
                        <div className="col-12 col-md">
                            <h3 className="gradient-font">Marcelo Hirata</h3>
                            <p>
                                Professional with expertise in data analysis, strategic communication, and business
                                intelligence, Marcelo combines strong analytical skills with a deep understanding of
                                data-informed decision-making and cross-cultural environments. With extensive experience
                                in data and communications, he has contributed significantly to diverse industries, from
                                automotive manufacturing to business communication solutions.

                            </p>
                            <h5>Key Skills</h5>
                            <ul>
                                <li>Data Analysis and Statistical Analysis</li>
                                <li>Problem-solving critical thinking</li>
                                <li>Data Visualization, Dashboard Development and Data Storytelling</li>
                                <li>Public Relations and Communication System Optimization</li>
                                <small> Python, SQL, Tableau, Power BI, Jupyter Notebooks, Spreadsheets, Premiere Pro
                                    AND MS Project.</small>
                            </ul>

                        </div>
                    </div>

                    <div className="row mt-5 pb-5">
                        <div className="col-12 col-md-6 order-last order-md-first">
                            <h3 className="gradient-font">Midori Tamashiro</h3>
                            <p>Midori Tamashiro is a professional with expertise in trilingual
                                communication: Portuguese, Japanese, and English. With a solid background in
                                international communication, she has extensive experience as a language instructor,
                                translator, and interpreter.
                                <br/>
                                With experience as both a teacher and a translator, Midori combines linguistic
                                proficiency with a passion for education and cross-cultural understanding. She has
                                contributed to projects involving the translation of technical manuals and corporate
                                documents, ensuring clarity and accuracy in multilingual contexts. As an interpreter,
                                she excels in bridging language gaps, facilitating effective communication in
                                professional settings.</p>
                            <h5>Key Skills</h5>
                            <ul>
                                <li>Trilingual Proficiency: Portuguese, Japanese, and English</li>
                                <li>Teaching Languages: English, Japanese, and Portuguese to students of all ages</li>
                                <li>Translation of technical manuals, corporate documents, and professional
                                    communications
                                </li>
                                <li>Professional Interpretation (simultaneous and consecutive)</li>
                                <li>Cross-Cultural Communication and Collaboration</li>
                                <li>Educational Program Development</li>
                            </ul>
                            <small>Portuguese: Native/Fluent, Japanese: Native/Fluent, English: Fluent</small>
                        </div>
                        <div className="col-12 col-md order-first order-md-last">
                            <div className="founder-img">
                                <img src={CintiaImg} alt="Midori tamashiro"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            < StartProject/>
            < Footer/>
        </div>
    );
};

export default AboutPage;