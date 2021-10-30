import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <h3 className="text-center">
        SOME <span className="text-danger"> GOOD </span>REASONS
      </h3>
      <p className="text-center">
        We are always stay with our clients, Give our best security and support
        to them.
      </p>
      <div className="row shadow-lg py-3" style={{ borderRadius: "20px" }}>
        <div className="col-md-4 text-center">
          <img
            className="img-fluid w-25"
            style={{ borderRadius: "50%" }}
            src="https://i.ibb.co/vdqnny4/undraw-air-support-wy1q-1.png"
            alt=""
          />
          <h5 className="my-3">
            <span className="text-danger "> 100+</span> Premium tours
          </h5>
          <p>
            We are showing near about most famous all historical monuments of
            Lahore in low prices with well educated guides to whom you can ask
            all questions related to history and culture of Lahore & Pakistan.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img
            className="img-fluid w-25"
            src="https://i.ibb.co/SNBQZ3q/undraw-Team-re-0bfe.png"
            alt=""
          />
          <h5 className="my-3">
            <span className="text-danger "> 100+ </span>Custormers
          </h5>
          <p>
            We are very proud of the trips that our clients enjoy with us --And
            even more proud to share just a few of comments their copper canyon
            adventures experiments with you.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img
            className="img-fluid w-25"
            src="https://i.ibb.co/y5bK1FG/undraw-Active-support-re-b7sj.png"
            alt=""
          />
          <h5 className="my-3">
            <span className="text-danger "> 24Hr</span> Support
          </h5>
          <p>
            Accompanied by a qualified tour guide, step inside the universe of
            the 24 Hours of Le Mans Circuit as you have never seen it before!
            Come with your family or friends, whether motor racing fans or not,
            tracks in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
