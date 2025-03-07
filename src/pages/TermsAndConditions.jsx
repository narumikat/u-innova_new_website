import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const TermsConditions = () => {
    return (
        <div className="py-4 mt-4">
            <NavBar />
            <div className="terms-conditions-page py-4 my-4">
                <div className="container py-5 my-4">
                    <h1 className="text-center gradient-font mb-5">Terms and Conditions</h1>

                    <p>Last updated: March 7, 2025</p>

                    <p>
                        Welcome to <strong>U-Innova</strong> and <strong>Novva Bot</strong>. By accessing or using our websites,
                        services, and applications, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully.
                    </p>

                    <h3 className="mt-5 gradient-font">1. Acceptance of Terms</h3>
                    <p>
                        By using our services, you agree to these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use our services.
                    </p>

                    <h3 className="mt-5 gradient-font">2. Services Provided</h3>
                    <p>
                        We offer web development, digital marketing, graphic design, and AI-powered chatbot solutions (Novva Bot). We reserve the right to modify or discontinue services at any time without notice.
                    </p>

                    <h3 className="mt-5 gradient-font">3. User Responsibilities</h3>
                    <ul>
                        <li>Provide accurate and complete information.</li>
                        <li>Do not use our services for illegal or unauthorized purposes.</li>
                        <li>Respect intellectual property and proprietary rights.</li>
                        <li>Do not upload or transmit harmful code or content.</li>
                    </ul>

                    <h3 className="mt-5 gradient-font">4. Intellectual Property</h3>
                    <p>
                        All content, logos, graphics, and materials on our website and services are the property of U-Innova and may not be copied, distributed, or used without explicit permission.
                    </p>

                    <h3 className="mt-5 gradient-font">5. Novva Bot Usage</h3>
                    <p>
                        Novva Bot is an AI assistant designed to provide helpful responses. However, we do not guarantee the accuracy or appropriateness of its outputs. Use the information provided by Novva Bot at your own discretion.
                    </p>

                    <h3 className="mt-5 gradient-font">6. Limitation of Liability</h3>
                    <p>
                        U-Innova shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                    </p>

                    <h3 className="mt-5 gradient-font">7. Termination</h3>
                    <p>
                        We reserve the right to suspend or terminate your access to our services at any time, without prior notice, for conduct that violates these Terms or is harmful to other users or U-Innova.
                    </p>

                    <h3 className="mt-5 gradient-font">8. Governing Law</h3>
                    <p>
                        These Terms are governed by and construed in accordance with the laws of Japan, without regard to its conflict of law principles.
                    </p>

                    <h3 className="mt-5 gradient-font">9. Changes to Terms</h3>
                    <p>
                        We may update these Terms and Conditions at any time. Updates will be posted on this page, and your continued use of our services after changes signifies your acceptance.
                    </p>

                    <h3 className="mt-5 gradient-font">10. Contact Us</h3>
                    <p>
                        For any questions about these Terms and Conditions, please contact us: <br/>
                        📧 <a href="mailto:u.innova.studio@gmail.com">u.innova.studio@gmail.com</a> <br/>
                        🌐 <a href="https://www.u-innova.com" target="_blank" rel="noopener noreferrer">www.u-innova.com</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsConditions;
