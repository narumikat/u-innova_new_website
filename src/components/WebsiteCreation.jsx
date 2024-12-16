const WebsiteCreation = () => {
    return (
        <div className="website-creation">
            <div className="container">
                <div className="col-12 col-md-7">
                    <h2>We Develop <span>amazing</span> websites for your business</h2>

                    <p>Whether you need an e-commerce platform, a corporate website, a personal portfolio, or a custom
                        solution tailored to your specific needs, <strong>we have you covered</strong>.
                        <br/>
                        Our expertise lies in creating diverse types of websites that integrate striking design with
                        user-friendly functionality and the latest technology.
                    </p>
                    <div className="mt-5">
                        <button
                            className="btn-border"
                            onClick={() => (window.location.href = '/#portfolio')}
                        >
                            Check Our Latest Projects
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WebsiteCreation;