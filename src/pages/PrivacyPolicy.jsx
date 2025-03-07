import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const PrivacyPolicy = () => {
    return (
        <div>
            <NavBar/>
            <div className="privacy-policy-page py-4 my-4">
                <div className="container py-5 my-4">
                    <h1 className="text-center gradient-font mb-5">Privacy Policy</h1>

                    <p>Last updated: March 7, 2025</p>

                    <p>
                        At <strong>U-Innova</strong> and <strong>Novva Bot</strong>, your privacy is extremely important
                        to us. This
                        Privacy Policy explains how we collect, use, and protect your personal
                        information when you interact with our websites, services, and
                        applications.
                    </p>

                    <h3 className="mt-5 gradient-font">1. Information We Collect</h3>
                    <p>We may collect and process the following types of information:</p>
                    <ul>
                        <li>Personal Information: name, email, phone number, company details, etc.</li>
                        <li>Usage Data: IP address, browser type, device info, and pages visited.</li>
                        <li>Communication Data: messages exchanged via forms, emails, and chats (including Novva Bot).
                        </li>
                    </ul>

                    <h3 className="mt-5 gradient-font">2. How We Use Your Information</h3>
                    <p>We use your data to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our services.</li>
                        <li>Respond to inquiries and support requests.</li>
                        <li>Personalize your experience.</li>
                        <li>Analyze usage to improve performance.</li>
                        <li>Send marketing communications (if opted-in).</li>
                        <li>Ensure system security and integrity.</li>
                    </ul>

                    <h3 className="mt-5 gradient-font">3. How Novva Bot Uses Your Data</h3>
                    <p>When using Novva Bot, we may process:</p>
                    <ul>
                        <li>Your text inputs for generating helpful responses.</li>
                        <li>Contextual data to improve chatbot accuracy.</li>
                    </ul>
                    <p>
                        <strong>Note:</strong> We do not store or share sensitive data from Novva Bot unless necessary
                        to provide our
                        services.
                    </p>

                    <h3 className="mt-5 gradient-font">4. Sharing Your Data</h3>
                    <p>We do not sell your data. We may share it with:</p>
                    <ul>
                        <li>Trusted service providers under confidentiality agreements.</li>
                        <li>Authorities if required by law.</li>
                        <li>Third-party platforms (like payment processors and analytics tools).</li>
                    </ul>

                    <h3 className="mt-5 gradient-font">5. Data Security</h3>
                    <p>We use strong security measures, including:</p>
                    <ul>
                        <li>Encryption.</li>
                        <li>Secure servers.</li>
                        <li>Regular audits and updates.</li>
                    </ul>

                    <h3 className="mt-5 gradient-font">6. Cookies and Tracking</h3>
                    <p>We use cookies to:</p>
                    <ul>
                        <li>Remember your preferences.</li>
                        <li>Analyze website traffic.</li>
                        <li>Enhance your browsing experience.</li>
                    </ul>
                    <p>You can disable cookies in your browser settings.</p>

                    <h3 className="mt-5 gradient-font">7. Your Rights</h3>
                    <p>You may request to:</p>
                    <ul>
                        <li>Access, update, or delete your data.</li>
                        <li>Receive a copy of your data.</li>
                        <li>Withdraw consent for data processing.</li>
                        <li>Object to certain uses of your data.</li>
                    </ul>
                    <p>To exercise your rights, contact us at: <a
                        href="mailto:u.innova.studio@gmail.com">u.innova.studio@gmail.com</a></p>

                    <h3 className="mt-5 gradient-font">8. Children's Privacy</h3>
                    <p>Our services are not intended for users under 13. We do not knowingly collect data from
                        children.</p>

                    <h3 className="mt-5 gradient-font">9. Policy Updates</h3>
                    <p>We may update this Privacy Policy periodically. Changes will be posted on this page, and
                        significant updates may be communicated via email.</p>

                    <h3 className="mt-5 gradient-font">10. Contact Us</h3>
                    <p>
                        If you have questions or concerns, please contact us at: <br/>
                        📧 <a href="mailto:u.innova.studio@gmail.com">u.innova.studio@gmail.com</a> <br/>
                        🌐 <a href="https://www.u-innova.com" target="_blank"
                             rel="noopener noreferrer">www.u-innova.com</a>
                    </p>
                </div>
            </div>
            < Footer/>
        </div>

    );
};

export default PrivacyPolicy;
