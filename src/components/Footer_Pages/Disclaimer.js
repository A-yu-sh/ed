import React from "react";

const Disclaimer = () => {
  const styles = {
    container: {
      backgroundColor: " #4caf50", // Green background
      color: "#333",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      marginTop: "90px",
    },
    content: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      textAlign: "left",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    bulletList: {
      listStyleType: "disc",
      paddingLeft: "20px",
    },
    bulletItem: {
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.title}>
          Disclaimer <span>⚠</span>
        </div>
        <ul style={styles.bulletList}>
          <li style={styles.bulletItem}>
            {" "}
            Distance Education Centers provide flexible, accessible learning
            options for students who wish to pursue education outside of the
            traditional classroom environment. These centers cater to a wide
            range of learners, from working professionals seeking to advance
            their careers to students in remote areas who lack access to
            in-person institutions. By offering a diverse selection of programs,
            including degrees, diplomas, and certifications, Distance Education
            Centers empower students to tailor their learning experiences to
            meet their unique needs and goals.
          </li>
          <li style={styles.bulletItem}>
            Distance Education Centers offer numerous advantages, making higher
            education attainable for a broader audience. Through online
            resources, virtual classrooms, and flexible scheduling, these
            centers allow students to learn at their own pace and from any
            location. For individuals balancing work, family, or other
            commitments, distance education provides the opportunity to achieve
            academic goals without compromising on other aspects of their lives.
            This accessibility to quality education opens doors to personal
            growth and professional advancement for countless individuals.
          </li>
          <li style={styles.bulletItem}>
            We may use cookies, pixels, or transparent GIF files to track
            session information and/or to deliver customizable and personalized
            services and information. For purposes of the website, this
            information is anonymous and not personally identifiable.
          </li>
          <li style={styles.bulletItem}>
            Any information collected ordinarily is not disclosed to third
            parties but may be disclosed in limited circumstances as and if
            required by law.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Disclaimer;
