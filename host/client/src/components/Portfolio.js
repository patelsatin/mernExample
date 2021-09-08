import React from 'react';
import "../layouts/main/assets/css/styles.css"
import sr1 from "../layouts/main/assets/img/portfolio/cabin1.png";
import sr2 from "../layouts/main/assets/img/portfolio/cake.png";
import sr3 from "../layouts/main/assets/img/portfolio/circus.png";
import sr4 from "../layouts/main/assets/img/portfolio/game.png";
import sr5 from "../layouts/main/assets/img/portfolio/safe.png";
import sr6 from "../layouts/main/assets/img/portfolio/submarine.png";
const Portfolio=()=> {
  return (
    <div >
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
            
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Courses</h2>
            
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
             
                <div className="row justify-content-center">
                   
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={sr1} alt="..." />
                        </div>
                    </div>
                   
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={sr2} alt="..." />
                        </div>
                    </div>
                   
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={sr3} alt="..." />
                        </div>
                    </div>
                   
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={sr4} alt="..." />
                        </div>
                    </div>
                   
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={sr5} alt="..." />
                        </div>
                    </div>
                   
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={sr6} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
      
      
       
       
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                   
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Web Development</h2>
                                   
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                   
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="..." />
                                   
                                    <p className="mb-4">The goal of the Full Stack Web Developer Nanodegree program is to equip learners with the unique skills they need to build database-backed APIs and web applications. A graduate of this program will be able to design and build databases for software applications, create and deploy database-backed web APIs, and secure and manage user authentication and access control for an application backend. Students will also learn how to deploy a Flask-based web application to the cloud using Docker and Kubernetes.</p>
                                    <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                   
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Mobile Application Development</h2>
                                   
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                   
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="..." />
                                   
                                    <p className="mb-4">We built this Nanodegree program in partnership with Google for students with intermediate programming skills who want to become professional Android developers. By the end of this program, you’ll have a diverse portfolio of projects to show employers, including your own app on Google Play.</p>
                                    <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                   
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">joy with Python</h2>
                                   
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                   
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="..." />
                                   
                                    <p className="mb-4">Learn the essential foundations of AI: the programming tools (Python, NumPy, PyTorch), the math (calculus and linear algebra), and the key techniques of neural networks (gradient descent and backpropagation).</p>
                                    <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                   
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">System Design</h2>
                                   
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                   
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="..." />
                                   
                                    <p className="mb-4">In this course you will learn data structures and algorithms by solving 80+ practice problems. You will begin each course by learning to solve defined problems related to a particular data structure and algorithm. By the end of each course, you would be able to evaluate and assess different data structures and algorithms for any open-ended problem and implement a solution based on your design choices.</p>
                                    <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                   
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Javascript Web</h2>
                                   
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                   
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="..." />
                                   
                                    <p className="mb-4">You’ll master the skills necessary to become a successful full stack developer. Learn how to build UI and UX, create APIs and server side business logic and develop the persistence layer to store, process and retrieve data.</p>
                                    <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                   
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Java Web Developer</h2>
                                   
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                   
                                    <img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="..." />
                                   
                                    <p className="mb-4">Learn back-end development with the Java programming language, one of the most popular programming languages in the world and one a majority of large enterprises rely on for their infrastructure.</p>
                                    <button className="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                        <i className="fas fa-times fa-fw"></i>
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
export default Portfolio;