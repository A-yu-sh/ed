import React from "react";

function About() {
  const styles = {
    pageContainer: {
      backgroundImage: 'url("/path-to-your-background-image.jpg")', // Replace with actual path
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "50px 20px",
      marginTop: "50px",
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
      width: "100%",
      maxWidth: "250px",
      borderRadius: "8px",
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
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.title}>About Us</h2>
        <p style={styles.paragraph}>
          <span style={{ fontWeight: "bold" }}>Distance Education School</span>{" "}
          is an India-based portal that provides expert counseling and
          information to students for various UGC and DEB recognized
          universities.
        </p>

        <h3 style={styles.subtitle}>
          SODE (School of Online & Distance Education)
        </h3>
        <div style={styles.imageContainer}>
          <img
            src="/path-to-your-image1.jpg"
            alt="Office"
            style={styles.image}
          />
          <img
            src="/path-to-your-image2.jpg"
            alt="Reception"
            style={styles.image}
          />
          <img
            src="/path-to-your-image3.jpg"
            alt="Meeting Room"
            style={styles.image}
          />
        </div>

        <p style={styles.paragraph}>
          The sole purpose is to connect students and working professionals with
          top distance education universities for higher education in distance
          mode, bridging the gap between students and universities.
        </p>

        <h3 style={styles.subtitle}>
          Is Distance Education School Fake or Genuine?
        </h3>
        <p style={styles.paragraph}>
          A common question that arises is whether Distance Education School is
          genuine. It is not per se a university and hence is not authorized to
          provide any certificates or documents or conduct exams. It is a
          counseling and information portal that connects students and working
          professionals to UGC and DEB approved universities.
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
              Fill in and submit your application form online
            </p>
          </div>
          <div style={styles.step}>
            <div style={styles.icon}>👩‍💼</div>
            <h4 style={styles.stepTitle}>Expert’s Counseling</h4>
            <p style={styles.stepDescription}>
              You will receive a call from our expert counselor
            </p>
          </div>
          <div style={styles.step}>
            <div style={styles.icon}>🏛</div>
            <h4 style={styles.stepTitle}>Choose University</h4>
            <p style={styles.stepDescription}>
              Select the course & university according to your interest
            </p>
          </div>
          <div style={styles.step}>
            <div style={styles.icon}>💳</div>
            <h4 style={styles.stepTitle}>Online Payment</h4>
            <p style={styles.stepDescription}>
              Make a smooth online fee submission
            </p>
          </div>
          <div style={styles.step}>
            <div style={styles.icon}>✅</div>
            <h4 style={styles.stepTitle}>Confirmation</h4>
            <p style={styles.stepDescription}>
              You will get an admission confirmation on your email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
