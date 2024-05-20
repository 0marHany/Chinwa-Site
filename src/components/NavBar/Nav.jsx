import React, { useLayoutEffect, useRef, useState } from 'react';
import HomeImg from '../../img/Logo_EN_F.png';


export default function Nav() {
    const navRef = useRef(0)
    const [navPos, setNavPos] = useState(0);

    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            setNavPos(window.scrollY)
        })
    }, [])
    return (
        <nav ref={navRef} className={`navbar navbar-expand-lg navbar-light ${navPos > 100 ? 'bg-white px-5 transtionNav': 'bg-transparent  transtionNav' } position-fixed top-0 start-0 end-0 z-3`}>
            <div className="container-fluid">
                <a className="navbar-brand d-lg-none" href="#">
                    <img src={HomeImg} alt="Logo" className="d-inline-block align-top" style={{ width: '150px' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Menu">CHINWA MENU</a>
                        </li>
                    </ul>
                    <a className="navbar-brand mx-auto d-none d-lg-block" href="#">
                        <img src={HomeImg} alt="Logo" className="d-inline-block align-top transtionNav" style={{ width: navPos > 100 ? "150px ":"250px" }} />
                    </a>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row">
                        <li className="nav-item">
                            <a className="nav-link" href="#About">ABOUT CHINWA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#ContactUs">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
