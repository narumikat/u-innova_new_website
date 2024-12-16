import ReplaceMe from '../components/Replace.jsx';

const HomeTop = () => {
    const words = ['Ideas', 'Vision', 'Brand', 'Growth', 'Goals', 'Online presence'];

    return (
        <div className="home-top-bg" id="home-top">
            <div className="mask">
                <div className="img-bg"></div>
            </div>

            <div className="container">
                <div className="row d0flex justify-content-center align-items-center">
                    <div className="col-lg-10">
                        <div className="text-container">
                            <h1 className="h1-large">
                                We work your </h1>
                            <h2>{' '}
                                <ReplaceMe
                                    words={words}
                                    speed={2000}
                                    animation="fadeIn"
                                    loopCount="infinite"
                                />
                            </h2>
                            <p id="pageTitle1" className="p-large">
                                We turn ideas into reality, bringing exceptional creativity to power your business.
                                Be unique, stand out from the competition and reach your target audience in a
                                memorable way. Lets make your brand a successful reference.
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <button
                                    id="pageTitleButton"
                                    className="btn-purple-gradient"
                                    onClick={() => {
                                        const target = document.getElementById('readmore');
                                        target.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    Read More
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeTop;