import Button from "./Button";


export default function Nav() {
  return <>
    <nav className="navbar navbar-expand-md ps-md-4 py-3">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav ">
                <li className="nav-item pe-md-3 pe-lg-4">
                    <a className="nav-link ps-0 active" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item pe-md-3 pe-lg-4">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item pe-md-3 pe-lg-4">
                    <a className="nav-link" href="#service">Service</a>
                </li>
                <li className="nav-item pe-md-3 pe-lg-4">
                    <a className="nav-link" href="#works">Works</a>
                </li>
                <li className="nav-item pe-md-3 pe-lg-4">
                    <a className="nav-link" href="#blog">Blog</a>
                </li>
                <li className="nav-item pe-md-3 pe-lg-4">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
            <Button btnClasses={'quote-btn btn rounded-0 d-none d-lg-block px-lg-4 py-lg-2'} btnText={'Get A Quote'} />
            
        </div>
    </nav>
  </>;
}
