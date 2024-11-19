import React from "react";

function Terms() {
  const styles = {
    outerContainer: {
      marginTop: "90px",
      backgroundColor: "#00b956",
      padding: "20px 0", // Adjust the padding to give spacing outside the container
    },
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      lineHeight: "1.6",
      backgroundColor: "#fff", // Optional: Add white background inside the container
      borderRadius: "8px", // Optional: Add rounded corners for aesthetic
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Add subtle shadow
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#1a3d7b",
      textAlign: "center",
      marginBottom: "20px",
    },
    link: {
      color: "#1a3d7b",
      textDecoration: "none",
    },
    bold: {
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h2 style={styles.title}>Terms & Conditions</h2>
        <p>
          You must be at least 18 years old or have the consent of a guardian to
          enroll in our programs. You agree to provide accurate, complete, and
          current information during the registration process.
        </p>
        <p>
          By enrolling in a course, you agree to pay the applicable fees as
          stated on our website or the course page. All fees are non-refundable
          unless otherwise stated in our refund policy. Course access and
          materials are provided based on the course package you choose. All
          content, including course materials, images, videos, and website
          design, is protected by intellectual property laws. You are granted a
          limited, non-transferable license to access and use the materials only
          for personal, non-commercial purposes.
        </p>
        <p>
          You agree to use our services for lawful purposes only. You must not
          use the platform to engage in any activity that violates any
          applicable laws or infringes on the rights of others. We reserve the
          right to suspend or terminate your account for any violations.
        </p>
        <p>
          While we strive to provide accurate and up-to-date information, we do
          not guarantee the accuracy, completeness, or availability of our
          courses or services. We are not liable for any indirect, incidental,
          or consequential damages resulting from the use of our website or
          services. We may update these Terms and Conditions from time to time.
          Any changes will be posted on this page, and your continued use of our
          services constitutes acceptance of the updated terms.
        </p>
      </div>
    </div>
  );
}

export default Terms;
