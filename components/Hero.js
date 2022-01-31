import Image from "next/image";

export default function Hero() {
  return <>
    <section className="hero-wrap bg-secondary pt-4">
        <div className="container">
            <div className="row d-flex justify-content-start align-items-center">
                <div className="col-md-6">
                    <div className="hero-left">
                        <div className="hero-text">
                            <h6 className="text-success">Promote any product, service or online course.</h6>
                            <h1 className="text-black display-5 fw-bold pt-2">Get every it <br /> Services Here</h1>
                        </div>
                        <div className="hero-service pt-3 d-md-flex">
                            <div className="d-flex align-items-center justify-content-start pe-md-5">
                                <Image src="/images/icon/dimond.png" alt="dimond" width={62} height={65} className="img-fluid" />
                                <h5 className="text-black fw-bolder ps-3">IT Product</h5>
                            </div>
                            <div className="d-flex align-items-center py-3 pe-md-3">
                                <Image className="img-fluid" src="/images/icon/target.png" alt="" width={59} height={65} />
                                <h5 className="text-black fw-bolder ps-3">IT Service</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-center text-md-end hero-man">
                        <Image className="img-fluid" src="/images/hero-man.png" alt="" width={544} height={756} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>;
}
