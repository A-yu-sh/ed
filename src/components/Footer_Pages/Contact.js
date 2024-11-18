import React from "react";
import backgroundImage from "../../assets/Banner2.png";

function Contact() {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.backgroundImageContainer}>
        <div style={styles.container}>
          {/* Form */}
          <div style={styles.formContainer}>
            <h2 style={styles.heading}>
              Have Doubt? <br /> Ask Your Query
            </h2>
            <p style={styles.description}>
              Get a question? We are there for you round the clock to assist you
              for an accelerating career.
            </p>

            <form style={styles.form}>
              <input
                type="text"
                placeholder="Enter Your Name"
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Enter Your Number"
                style={styles.input}
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                style={styles.input}
              />
              <select style={styles.input}>
                <option>Select Course</option>
                <option>MBA</option>
                <option>BBA</option>
              </select>
              <select style={styles.input}>
                <option>Select State</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>
              <label style={styles.checkboxContainer}>
                <input type="checkbox" style={styles.checkbox} />
                Get Universities Discount Offers in Your Inbox.{" "}
                <a href="/terms">View Terms</a>
              </label>
              <button type="submit" style={styles.submitButton}>
                Book Free Counselling
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={styles.contactInfo}>
            <h2 style={styles.companyName}>SODE Counseling Services LLP</h2>
            <p style={styles.infoText}>
              <strong>Registered Office:</strong> Unit No. 1, Third Floor
              Vardhman Trade Centre, Nehru Place, New Delhi - 110019
            </p>
            <p style={styles.infoText}>
              <strong>Email:</strong> support@distanceeducationschool.com
            </p>
            <p style={styles.infoText}>
              <strong>Contact:</strong> 01140468080
            </p>

            <div style={styles.socialLinks}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}>
                🌐
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}>
                🌐
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}>
                🌐
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}>
                🌐
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    marginTop: "90px",
    marginBottom: "20px",
  },
  backgroundImageContainer: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "500px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "24px",
    color: "#002f57",
    marginBottom: "10px",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  checkboxContainer: {
    fontSize: "14px",
    color: "#ff6600",
    marginBottom: "15px",
  },
  checkbox: {
    marginRight: "10px",
  },
  submitButton: {
    padding: "12px",
    backgroundColor: "#002f57",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  contactInfo: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  },
  companyName: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  infoText: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  socialIcon: {
    fontSize: "24px",
    textDecoration: "none",
    color: "#002f57",
  },
  "@media (max-width: 768px)": {
    formContainer: {
      width: "100%",
    },
    contactInfo: {
      width: "100%",
    },
    input: {
      fontSize: "14px",
    },
    submitButton: {
      fontSize: "14px",
    },
  },
};

export default Contact;
