import React from "react";

function Project() {
  return (
    <>
      {/* <!-- Project Section --> */}
      <section id="blog" className="section">
        <div className="container r">
          <h6 className="subtitle">My Projects</h6>
          <h6 className="section-title mb-4">Here are some projects!</h6>
          <p className="mb-5 pb-4">
          As a designer, you are more than likely proud of all the work you have done, but it is important to take a step back and view your work from the eye of a potential employer or customer.
          </p>

          <div className="row left">
            <div className="col-md-6">
              <div className="card border mb-4">
                <img
                  src="assets/imgs/mis.jpg"
                  alt=""
                  className="card-img-top w-100"
                />
                <div className="card-body">
                  <h5 className="card-title">Make It Simple</h5>
                  <p>
                    It is creative agency which represents considerable authority for all your designing and development needs to suit all of your basic requirements.
                  </p>
                  <a href="http://makeitsimple.net.in" target="_blank">Know More..</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border mb-4">
                <img
                  src="assets/imgs/ataraxia.jpg"
                  alt=""
                  className="card-img-top w-100"
                />
                <div className="card-body">
                  <h5 className="card-title">Ataraxia IP</h5>
                  <p>
                    It is a comprehensive intellectual property firm based at Delhi India with clients from all geographies and ethnicities to deliver pragmatic outcomes.
                  </p>
                  <a href="https://www.ataraxiaip.com/" target="_blank">Know More..</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
