import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLine } from "@fortawesome/free-brands-svg-icons";

const StartProject = () => {
    return (
        <div className="container">
            <div className="start-project text-center py-5">
                <div className="project-card">
                    <h2 className="gradient-font2 mt-5">Let’s Bring Your Project to Life</h2>
                    <h3>Contact us today!</h3>
                    <div className="d-flex justify-content-center mt-4">
                        {/* Email */}
                        <a
                            href="mailto:contact@u-innova.com"
                            className="btn mx-2 d-flex align-items-center"
                            style={{
                                borderRadius: "50%",
                                width: "50px",
                                height: "50px",
                                justifyContent: "center",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                            }}
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </a>
                        {/* LINE */}
                        <a
                            href="https://line.me/ti/p/7QZjRjZNt-"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn mx-2 d-flex align-items-center"
                            style={{
                                borderRadius: "50%",
                                width: "50px",
                                height: "50px",
                                justifyContent: "center",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                            }}
                        >
                            <FontAwesomeIcon icon={faLine} size="2x" />
                        </a>
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/818066557091"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn mx-2 d-flex align-items-center"
                            style={{
                                borderRadius: "50%",
                                width: "50px",
                                height: "50px",
                                justifyContent: "center",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                            }}
                        >
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartProject;
