import React from "react";

export default props => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Your Trusted REA</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">
              Buy
            </a>
            <a className="nav-link" href="#">
              Sell
            </a>
            <a className="nav-link" href="#">
              Lease
            </a>
          </nav>
        </div>
      </header>

      <main role="main" className="inner cover">
        <h1 className="cover-heading">Danielle Christley</h1>
        <h4 className="cover-heading">Licensed Real Estate Agent</h4>
        <p className="lead">
          Danielle is a wonderful, wonderful, human being, who happens to be
          licensed in Texas as a Real Estate Agent. By far the best choice
          whether you are looking to buy, sell, or lease a home. When she isn't
          selling homes, she enjoys popping tags & kicking dope shit. Holla.
        </p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-secondary">
            Request a Consultation
          </a>
        </p>
      </main>

      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>
            See her out at:
            <h6 className="contact">
              Address:
              <a
                href="https://www.google.com/maps/place/My+Dream+Home+Realty/@29.7436057,-95.3279474,15z/data=!4m2!3m1!1s0x0:0x17b4206f632d9c5e?sa=X&ved=2ahUKEwjHjcSb8ZTiAhVJR60KHZniCFMQ_BIwCnoECA8QCA"
                target="_blank"
                rel="noopener noreferrer"
              >
                4709 Harrisburg Blvd, Houston, TX 77011
              </a>
            </h6>
            <h6 className="contact">
              Phone: <a href="tel:+17132392082">(713) 239 2082</a>
            </h6>
            <h6 className="contact">
              Email:{" "}
              <a href="mailto:readaniellechristley@gmail.com?subject=I'm%20Interested!&body=Hello, I'd like to learn more about (buying, selling, or leasing) a property with you!">
                readaniellechristley@gmail.com
              </a>
            </h6>
            <h6 className="contact">
              Instagram:{" "}
              <a href="https://www.instagram.com/danielle_realtor/?hl=en">
                @danielle_realtor
              </a>
            </h6>
          </p>
        </div>
      </footer>
    </div>
  );
};
