import "./App.css";

function App() {
  return (
    <div className="App" id="page-top">

        <nav className="navbar navbar-expand-lg text-uppercase fixed-top py-0" id="mainNav">
            <div className="container">
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#skills">Skills</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <header className="masthead text-white text-center">
            <div className="container d-flex align-items-end flex-column">
                <h1 className="mb-0 border-bottom border-dark">Sebastian Covarrubias</h1>
                <p className="masthead-subheading font-weight-light mb-0">Web Developer - Software Engineer</p>
            </div>
        </header>

        <section className="page-section text-white mb-0 py-4" id="skills">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">Skills</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fa fa-code"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="d-flex justify-content-evenly border-secondary ms-5 me-5 py-4 px-0">
                    <i className="fa-brands fa-html5 fa-5x me-2" style={{color: "#FFF"}}></i>
                    <i className="fa-brands fa-css3-alt fa-5x me-2" style={{color: "#FFF"}}></i>
                    <i className="fa-brands fa-js-square fa-5x me-2" style={{color: "#FFF"}}></i>        
                    <i className="fa-brands fa-node-js fa-5x me-2" style={{color: "#FFF"}}></i>
                    <i className="fa-brands fa-react fa-5x me-2" style={{color: "#FFF"}}></i>
                    <i className="fa-brands fa-npm fa-5x me-2" style={{color: "#FFF"}}></i>
                    <i className="fa-brands fa-git-square fa-5x me-2" style={{color: "#FFF"}}></i>
                </div>

            </div>
        </section>

        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Portfolio</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fa fa-code"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">

                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <div className="card shadow bg-transparent border-0 text-white">
                                <img className="img-fluid" src="assets/img/portfolio/InProgress.jpg" alt="..." style={{width: "480px", height: "296px"}} />
                                <div className="card-body">
                                    <h5 className="card-title">In Progress</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <div className="card shadow bg-transparent border-0 text-white">
                                <img className="img-fluid" src="assets/img/portfolio/TicketDesk.png" alt="..." style={{width: "480px", height: "296px"}} />
                                <div className="card-body">
                                    <h5 className="card-title">Ticket Desk</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <div className="card shadow bg-transparent border-0 text-white">
                                <img className="img-fluid" src="assets/img/portfolio/SSF2X.png" alt="..."style={{width: "480px", height: "296px"}}  />
                                <div className="card-body">
                                    <h5 className="card-title">SSF2X Rankings</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Your Website 2022</small></div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">In Progress</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/InProgress.jpg" alt="..." />
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Ticket Desk</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/TicketDesk.png" alt="..." />
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">SSF2X Rankings</h2>
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/SSF2X.png" alt="..." />
                                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                    <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
