import React from "react";
import expertImage from "../assets/Model.png"; // Adjust path as needed
import "../Global.css";
import VCImg from "../assets/v1-removebg-preview.png";
import LIVEImg from "../assets/live-removebg-preview.png";
import RQImg from "../assets/call-removebg-preview.png";
import AQImg from "../assets/a2-removebg-preview.png";

const TalkToExperts = () => {
  return (
    <section className="talk-to-experts">
      <div className="content-overlay">
        <div className="experts-text">
          <h2>Any questions?</h2>
          <h1>Reach Out to Our Experts.</h1>
          <p>
            Select the option that works best for you—chat, call, or video. We
            are here to provide counseling in the format that suits your needs.
          </p>
          <div className="expert-buttons">
            <button className="btn video-call">
              {/* <img src={VCImg} alt="" class="t-icon" /> */}
              Schedule Video Call
            </button>
            <button className="btn live-chat">
              {/* <img src={LIVEImg} alt="" class="t-icon" /> */}
              Live Chat with Experts
            </button>
            <button className="btn request-callback">
              {/* <img src={RQImg} alt="" class="t-icon" /> */}
              Request Call Back
            </button>
            <button className="btn ask-query">
              {/* <img src={AQImg} alt="" class="t-icon" /> */}
              Ask A Query
            </button>
          </div>
        </div>
        <div className="experts-image">
          <img src={expertImage} alt="Talk to Experts" />
        </div>
      </div>
    </section>
  );
};

export default TalkToExperts;
