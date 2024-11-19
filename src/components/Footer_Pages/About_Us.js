import React from "react";
import Pic1 from "../../assets/pic1.jpg";
import Pic2 from "../../assets/pic2.jpg";
import Pic3 from "../../assets/pic3.jpg";

function About() {
  const styles = {
    outerContainer: {
      backgroundColor: "#00b956", // Green background
      minHeight: "100vh",
      padding: "50px 20px",
      marginTop: "90px",
    },
    pageContainer: {
      backgroundImage: 'url("/path-to-your-background-image.jpg")', // Replace with actual path
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "50px 20px",
      color: "#333",
    },
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#1a3d7b",
      textAlign: "center",
      marginBottom: "20px",
      borderBottom: "2px solid #1a3d7b",
      paddingBottom: "8px",
    },
    subtitle: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#1a3d7b",
      margin: "20px 0",
    },
    paragraph: {
      lineHeight: "1.8",
      color: "#555",
      fontSize: "16px",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "20px",
      flexWrap: "wrap",
    },
    image: {
      width: "150px", // Fixed width for equal size
      height: "150px", // Fixed height for equal size
      borderRadius: "8px",
      objectFit: "cover", // Ensure image fits without distortion
    },
    caption: {
      fontSize: "14px",
      color: "#555",
      marginTop: "8px",
      textAlign: "center",
    },
    admissionContainer: {
      marginTop: "30px",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
    },
    admissionTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1a3d7b",
      textAlign: "center",
      marginBottom: "20px",
    },
    admissionSteps: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "20px",
    },
    step: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "150px",
      textAlign: "center",
    },
    icon: {
      fontSize: "36px",
      color: "#1a3d7b",
      marginBottom: "10px",
    },
    stepTitle: {
      fontWeight: "bold",
      fontSize: "16px",
      marginBottom: "5px",
    },
    stepDescription: {
      color: "#555",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.pageContainer}>
        <div style={styles.container}>
          <h2 style={styles.title}>About Us</h2>
          <p style={styles.paragraph}>
            <span style={{ fontWeight: "bold" }}>
              Distance Education Center
            </span>{" "}
            is a platform that provides guidance and information to students and
            professionals about universities offering distance and online
            education programs.
          </p>

          <h3 style={styles.subtitle}>
            SODE (Universities of Online & Distance Education)
          </h3>
          <div style={styles.imageContainer}>
            <div>
              <img src={Pic1} alt="Meeting Room" style={styles.image} />
              <p style={styles.caption}>Meeting Room</p>
            </div>
            <div>
              <img src={Pic2} alt="Reception" style={styles.image} />
              <p style={styles.caption}>Reception</p>
            </div>
            <div>
              <img src={Pic3} alt="Office" style={styles.image} />
              <p style={styles.caption}>Office</p>
            </div>
          </div>

          <p style={styles.paragraph}>
            Our goal is to connect students and working professionals with
            leading universities for distance learning, providing them with
            access to flexible and affordable education opportunities.
          </p>

          <h3 style={styles.subtitle}>
            Is Distance Education Center Reliable?
          </h3>
          <p style={styles.paragraph}>
            A common query is whether Distance Education Center is trustworthy.
            While we are not a university and do not issue certificates, we act
            as an advisory and information portal, assisting students and
            professionals in enrolling with accredited universities offering
            distance education programs.
          </p>
        </div>

        {/* Admission Process Section */}
        <div style={styles.admissionContainer}>
          <h2 style={styles.admissionTitle}>Admission Process</h2>
          <div style={styles.admissionSteps}>
            <div style={styles.step}>
              <div style={styles.icon}>📝</div>
              <h4 style={styles.stepTitle}>Submit Form</h4>
              <p style={styles.stepDescription}>
                Complete and submit your online application form.
              </p>
            </div>
            <div style={styles.step}>
              <div style={styles.icon}>👩‍💼</div>
              <h4 style={styles.stepTitle}>Expert Guidance</h4>
              <p style={styles.stepDescription}>
                Speak with one of our experienced counselors for advice.
              </p>
            </div>
            <div style={styles.step}>
              <div style={styles.icon}>🏛</div>
              <h4 style={styles.stepTitle}>Choose University</h4>
              <p style={styles.stepDescription}>
                Select the best university and program for your goals.
              </p>
            </div>
            <div style={styles.step}>
              <div style={styles.icon}>💳</div>
              <h4 style={styles.stepTitle}>Secure Payment</h4>
              <p style={styles.stepDescription}>
                Make an easy and secure online fee payment.
              </p>
            </div>
            <div style={styles.step}>
              <div style={styles.icon}>✅</div>
              <h4 style={styles.stepTitle}>Receive Confirmation</h4>
              <p style={styles.stepDescription}>
                Get your admission confirmation via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
