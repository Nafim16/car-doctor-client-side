import '../../../index.css';

import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner h">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block  rounded img-fluid " alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={img2} className="d-block  rounded img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={img3} className="d-block  rounded img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={img4} className="d-block  rounded img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={img5} className="d-block  rounded img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={img6} className="d-block  rounded img-fluid" alt="..." />
                    </div>

                </div>

                <div className='grad'>
                    <div className='xb'>
                        <h1 className='htext'>Affordable <br />Price For Car <br />Servicing</h1>
                        <p className='ptext'>There are many variations of passages of  available, but <br />the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button type="button" className="btn btn-outline-secondary bs1">Discover More</button>
                            <button type="button" className="btn btn-outline-secondary bs1">Latest Project</button>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};


export default Banner;