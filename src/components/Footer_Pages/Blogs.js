import React from "react";
import bg from "../../assets/Blog-bg.jpg";

function Blog() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.overlay}>
          <h1 style={styles.heroTitle}>
            Which is Right for You? <br />
            <span style={styles.highlight}>Distance Education</span> VS{" "}
            <span style={styles.highlight}>Regular Education</span>
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div style={styles.contentSection}>
        <h2 style={styles.contentTitle}>
          Distance Education vs Regular Education: A Detailed Comparison
        </h2>
        <p style={styles.author}>By John Doe | November 19, 2024</p>
        <p style={styles.description}>
          Distance Education allows students to learn online, offering great
          flexibility, while Regular Education involves physical classrooms and
          structured schedules. This article delves into their differences in
          delivery, flexibility, interaction, and accessibility to help you
          decide which is better for your learning needs.
        </p>
        <button style={styles.readMoreButton}>Continue Reading »</button>
      </div>

      {/* Box Section */}
      <div style={styles.boxContainer}>
        <h1 style={styles.heading}>Distance Education vs Regular Education</h1>
        <p style={styles.description}>
          Distance Education (or online learning) and Regular Education (or
          traditional classroom-based learning) both aim to provide quality
          education but differ significantly in delivery, structure, and
          flexibility.
        </p>
        <div style={styles.row}>
          <Box
            icon="📡"
            title="Delivery Mode"
            description={
              <>
                <strong>Distance Education:</strong> Delivered primarily online,
                allowing students to access learning materials, lectures, and
                assignments remotely.
                <br />
                <strong>Regular Education:</strong> Conducted in physical
                classrooms, where students attend in-person sessions and engage
                directly with instructors and peers.
              </>
            }
          />
          <Box
            icon="⏳"
            title="Flexibility"
            description={
              <>
                <strong>Distance Education:</strong> Highly flexible, offering
                students the ability to learn at their own pace, from any
                location, and often on their own schedule.
                <br />
                <strong>Regular Education:</strong> Less flexible, with fixed
                class schedules and locations. Students need to be physically
                present for lessons and follow a structured timetable.
              </>
            }
          />
          <Box
            icon="🤝"
            title="Interaction"
            description={
              <>
                <strong>Distance Education:</strong> Limited face-to-face
                interaction. Students typically engage with instructors and
                classmates through online forums, emails, or video calls.
                <br />
                <strong>Regular Education:</strong> Direct interaction in a
                classroom environment, promoting real-time discussions, hands-on
                activities, and face-to-face networking.
              </>
            }
          />
        </div>
        <div style={styles.row}>
          <Box
            icon="📚"
            title="Access to Resources"
            description={
              <>
                <strong>Distance Education:</strong> Relies on digital
                resources, such as e-books, recorded lectures, and online
                libraries. Access to instructors may be more limited to specific
                hours.
                <br />
                <strong>Regular Education:</strong> In-person access to
                libraries, labs, and immediate feedback from teachers. Students
                often have more spontaneous interactions with faculty.
              </>
            }
          />
          <Box
            icon="💸"
            title="Cost and Accessibility"
            description={
              <>
                <strong>Distance Education:</strong> Often more affordable due
                to reduced overhead costs and can be more accessible to students
                in remote locations or with busy schedules.
                <br />
                <strong>Regular Education:</strong> Typically more expensive, as
                it involves infrastructure, facilities, and in-person services,
                but may offer more comprehensive student support on-campus.
              </>
            }
          />
          <Box
            icon="🏫"
            title="Learning Environment"
            description={
              <>
                <strong>Distance Education:</strong> Self-directed and can be
                isolating for some students, requiring high levels of motivation
                and time-management skills.
                <br />
                <strong>Regular Education:</strong> Social learning environment,
                providing immediate feedback, collaboration with peers, and more
                structured guidance from instructors.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

function Box({ icon, title, description }) {
  return (
    <div style={styles.box}>
      <div style={styles.iconContainer}>
        <span style={styles.icon}>{icon}</span>
      </div>
      <h2 style={styles.boxTitle}>{title}</h2>
      <p style={styles.boxDescription}>{description}</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: '"Arial", sans-serif',
    color: "#333",
    margin: 0,
    padding: 0,
  },
  heroSection: {
    position: "relative",
    height: "400px",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px",
  },
  heroTitle: {
    color: "#fff",
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: 0,
    textAlign: "center",
    lineHeight: "1.5",
  },
  highlight: {
    color: "#ff6600",
  },
  contentSection: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "left",
  },
  contentTitle: {
    fontSize: "2rem",
    color: "#00b96b",
    marginBottom: "10px",
  },
  author: {
    color: "#888",
    fontSize: "0.9rem",
    marginBottom: "20px",
  },
  readMoreButton: {
    display: "inline-block",
    backgroundColor: "#00b96b",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    textDecoration: "none",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "20px",
  },
  boxContainer: {
    padding: "40px",
  },
  heading: {
    fontSize: "2rem",
    color: "#00b96b",
    marginBottom: "10px",
    textAlign: "center",
  },
  box: {
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    padding: "20px",
    flex: "1 1 calc(33.33% - 20px)", // Default: three boxes per row
    maxWidth: "calc(33.33% - 20px)",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    minWidth: "250px", // Prevent shrinking
  },
  iconContainer: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#00b96b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  icon: {
    fontSize: "1.5rem",
    color: "#fff",
  },
  boxTitle: {
    fontSize: "1.2rem",
    color: "#333",
    margin: "10px 0",
  },
  boxDescription: {
    fontSize: "0.9rem",
    color: "#666",
    lineHeight: "1.6",
  },
  // Media Query for Small Screens
  "@media (max-width: 768px)": {
    row: {
      flexDirection: "column", // Stacks boxes vertically
      gap: "20px",
    },
    box: {
      flex: "1 1 100%", // Full width
      maxWidth: "100%",
    },
  },
};

export default Blog;
