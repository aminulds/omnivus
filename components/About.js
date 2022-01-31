import Image from "next/image";

export default function About() {
  return <>
    <section className="about-us py-5 pb-4 py-sm-5" id="about">
        <div className="container py-4">
            <div className="row g-4 g-md-5 text-center text-md-start">
                <div className="col-12 col-md-6 about-left d-flex align-items-center">
                    <div className="left-wrap">
                        <div className="content">
                            <Image className="img-fluid" src="/images/about.jpg" alt="" width={530} height={730} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 pt-3  d-flex align-items-center">
                    <div className="right-wrap">
                        <h6 className="text-primary">ABOUT US</h6>
                        <h1 className="text-black py-3 fw-bold">You cant use up <br/> creativity.</h1>
                        <p className="text-success text-start">Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It’s a lot meaningful content here.</p>
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start py-2 pb-md-2">
                            <h1 className="text-primary display-4 fw-bold pe-2">30</h1>
                            <h6 className="text-black fw-bold">Years Of <br /> Experience</h6>
                        </div>
                        <div className="py-2">
                            <button className="btn quote-btn rounded-0 px-4 py-2 me-2">Learn More</button>
                            <button className="btn quote-btn2 rounded-0 px-4 py-2"><i className="far fa-video pe-1"></i> Intro Video</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
  </>;
}
