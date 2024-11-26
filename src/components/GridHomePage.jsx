import React from "react";

const GridHomePage = () => {
    return (
        <div className="container my-5">
            <div className="row g-4">
                {/* Primeiro Card */}
                <div className="col-lg-6 col-md-12">
                    <div className="card p-4 bg-dark text-white rounded-3 shadow">
                        <h5 className="mb-3">Ready in 96ms</h5>
                        <p>Instant server start</p>
                        <p className="text-muted">On demand file serving over native ESM, no bundling required!</p>
                    </div>
                </div>

                {/* Segundo Card */}
                <div className="col-lg-6 col-md-12">
                    <div className="card p-4 bg-dark text-white rounded-3 shadow">
                        <h5 className="mb-3">Lightning fast HMR</h5>
                        <p>Hot Module Replacement (HMR)</p>
                        <p className="text-muted">Stays fast regardless of app size.</p>
                    </div>
                </div>

                {/* Terceiro Card */}
                <div className="col-lg-6 col-md-12">
                    <div className="card p-4 bg-dark text-white rounded-3 shadow">
                        <h5 className="mb-3">Rich features</h5>
                        <p>Out-of-the-box support for</p>
                        <p className="text-muted">TypeScript, JSX, CSS and more.</p>
                    </div>
                </div>

                {/* Quarto Card */}
                <div className="col-lg-6 col-md-12">
                    <div className="card p-4 bg-dark text-white rounded-3 shadow">
                        <h5 className="mb-3">Optimized build</h5>
                        <p>Pre-configured Rollup build</p>
                        <p className="text-muted">With multi-page and library mode support.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridHomePage;
