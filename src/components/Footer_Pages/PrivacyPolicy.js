import React from "react";

function Privacy() {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      marginTop: "80px",
      lineHeight: "1.6",
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
        The information and materials contained in{" "}
        <a href="https://distanceeducationcenter.com/" style={styles.link}>
          https://distanceeducationcenter.com/
        </a>{" "}
        At Distance Education Center, we value your privacy and are committed to
        protecting your personal information. This Privacy Policy outlines how
        we collect, use, and protect the personal data you share with us through
        our website and services.
      </p>
      <p>
        The sole purpose of{" "}
        <span style={styles.bold}>Distanceeducationcenter.com</span>
        use the information collected to provide and improve our services,
        respond to your queries, process your requests, and keep you informed
        about relevant courses and programs. We may send promotional emails,
        updates, or newsletters, but you can opt out of these communications at
        any time.
      </p>
      <p>
        You have the right to access, correct, or delete your personal
        information at any time. If you wish to update or remove your
        information, please contact us directly. You can also opt-out of
        receiving promotional emails by following the unsubscribe instructions
        in the communication.
      </p>
      <p>
        <span style={styles.bold}>Distanceeducationcenter.com</span> is not
        authorized to conduct exams in the name of any University or to provide
        any document/study on behalf of any university. Any marks card,
        certificate or any other educational document is the sole property of
        the University, and so Distanceeducationschool.com does not have any
        right to issue any document in the name of any University.
      </p>
    </div>
  );
}

export default Privacy;
