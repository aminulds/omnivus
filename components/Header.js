import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return <>
    <header className="header-wrap bg-secondary">
          <div className="container">
              <div className="row">
                  <div className="col-3 col-md-2">
                      <div className="logo py-4 py-md-5">
                        <Link href={'/'}>
                          <a>
                            <Image src="/images/logo/logo.png" width={164} height={60} alt="" />
                          </a>
                        </Link>
                      </div>
                  </div>
                  <div className="col-9 col-md-10">
                      <div className="right-header ps-md-5">
                          <div className="top-header ps-md-4 py-3 d-flex justify-content-end justify-content-md-between">
                              <div className="mail-call d-flex">
                                  <div className="mail pe-5">
                                      <Link href="mailto:info@webmail.com">
                                        <a className="d-flex">
                                            <i className="far fa-envelope pe-2 pt-1"></i> <span className="d-none d-md-block">info@webmail.com</span>
                                        </a>
                                      </Link>
                                  </div>
                                  <div className="call">
                                      <Link href="callto:+7854125451">
                                        <a className="d-flex">
                                            <i className="far fa-phone pe-2 pt-1"></i> <span className="d-none d-md-block">785 412 5451</span>
                                        </a>
                                      </Link>
                                  </div>
                              </div>
                              <div className="social d-none d-md-block">
                                  <Link href=""><a ><i className="fab fa-facebook-f"></i></a></Link>
                                  <Link href=""><a ><i className="fab fa-twitter"></i></a></Link>
                                  <Link href=""><a ><i className="fab fa-behance"></i></a></Link>
                                  <Link href=""><a ><i className="fab fa-linkedin"></i></a></Link>
                                  <Link href=""><a ><i className="fab fa-youtube"></i></a></Link>
                              </div>
                          </div>
                          <Nav />

                      </div>
                  </div>
              </div>
          </div>
      </header>
  </>;
}
