import React from "react";

function About() {
  return (
    <>
      {/* <!-- About section --> */}
      <section id="about" className="section mt-3">
        <div className="container mt-5">
          <div className="row text-center text-md-left">
            <div className="col-md-3">
              <img
                src="assets/imgs/sr1.jpg"
                alt=""
                className="img-thumbnail mb-4"
              />
            </div>
            <div className="pl-md-4 col-md-9">
              <h6 className="title">Sarthak Kesarwani.</h6>
              <p>
                I am Sarthak Kesarwani. I am a MCA student at United University,
                Prayagraj. I am pursuing my MCA degree. I have completed my BCA
                from Ewing Christian College, Prayagraj. I have also completed
                my intermediate and secondary school from Bethel Academy,
                Prayagraj.
              </p>
              <p>
                I had done undergone training in HTML and CSS through online
                bootcamps provided by Lets Upgrade, and as i had done internship
                where i worked as fronted developer which shows my proficiency
                in HTML, CSS and React.js . I have also gained knowledge in
                node.js for backend in node.js and my SQL through an online
                course.
              </p>
              <p>
                With a strong educational background in computer science,
                technical skills in frontend, and an interest in software
                development, I am well equipped for roles in the field of
                computer science and software development. And I can use my
                talents and skills to grow and expand an organization as well as
                myself.
              </p>
              <button className="btn btn-dark rounded mt-3">
                <a href="https://drive.google.com/file/d/1fU7t-aCV4UahCKFUITkAvDZ3SNi5TaLr/view?usp=sharing">DOWNLOAD RESUME</a>
                
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
