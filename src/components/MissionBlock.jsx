const MissionBlock = () => {
    return (
        <div className="mission-block">
            <div className="col-8">
                <h5>Our mission is to provide innovative software and digital marketing solutions that empower our
                    customers
                    to succeed in an ever-evolving digital world.</h5>
                <div className="d-flex justify-content-center mt-4">
                    <button
                        id="pageTitleButton"
                        className="btn-border"
                        onClick={() => (window.location.href = '/about')}
                    >
                        About Us
                    </button>

                </div>
            </div>
        </div>
    );
};

export default MissionBlock;