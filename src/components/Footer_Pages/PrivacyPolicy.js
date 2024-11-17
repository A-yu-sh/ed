import React from "react";

function Privacy() {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      lineHeight: "1.6",
      marginTop: "100px",
      marginBottom: "20px",
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
    <div style={styles.container}>
      <h2 style={styles.title}>Privacy Policy</h2>
      <p>
        The information and materials available on{" "}
        <a href="https://distanceeducationcenter.com/" style={styles.link}>
          https://distanceeducationcenter.com/
        </a>{" "}
        are provided by Distance Education Center. We are committed to
        safeguarding your privacy and ensuring the security of your personal
        information. This Privacy Policy explains how we collect, use, and
        protect the data you share with us while accessing our website and
        services.
      </p>
      <p>
        The primary purpose of{" "}
        <span style={styles.bold}>Distanceeducationcenter.com</span> is to use
        the information we collect to enhance our services, respond to
        inquiries, fulfill requests, and provide updates on relevant courses and
        programs. Occasionally, we may send newsletters or promotional
        communications; however, you always have the option to opt out of such
        communications.
      </p>
      <p>
        You have full control over your personal information and can request to
        access, modify, or delete it at any time. Should you wish to update your
        details or remove your information from our records, please contact us
        directly. You can also unsubscribe from promotional emails by following
        the instructions provided in those communications.
      </p>
      <p>
        <span style={styles.bold}>Distanceeducationcenter.com</span> does not
        conduct examinations on behalf of any university, nor does it provide
        academic documents or materials directly from universities. Official
        marks cards, certificates, and other educational credentials are the
        exclusive property of their respective universities. Distance Education
        Center is not authorized to issue any university-affiliated documents.
      </p>
    </div>
  );
}

export default Privacy;
