import React from "react";
import Tlogo from "../assets/instagram.png";
import Tlogo2 from "../assets/linkedin.png";
import Tlogo3 from "../assets/facebook.png";
import Tlogo4 from "../assets/youtube.png";
import Juimage from "../assets/Acharya Nagarjuna.jpg";

const Ubox = () => {
  return (
    <div>
      {/* Main container */}
      <div style={styles.container}>
        <div style={styles.textSection}>
          <h1 style={styles.heading}>Acharya Nagarjuna University - Online</h1>
          <p style={styles.description}>
            Apply now to improve your career skills by pursuing online courses
            at Jain Online University. Recognised by UGC-DEB and accredited with
            a NAAC A++ grade, Jain University stands among the top universities
            in India.
          </p>
          <div style={styles.badges}>
            <img style={styles.badge} src={Tlogo} alt="UGC" />
            <img style={styles.badge} src={Tlogo2} alt="NAAC" />
            <img style={styles.badge} src={Tlogo3} alt="NIRF" />
            <img style={styles.badge} src={Tlogo4} alt="AICTE" />
          </div>

          <div style={styles.courses}>
            <button style={styles.courseButton}>MBA</button>
            <button style={styles.courseButton}>MCA</button>
            <button style={styles.courseButton}>MCOM</button>
            <button style={styles.courseButton}>MA</button>
            <button style={styles.courseButton}>BBA</button>
            <button style={styles.courseButton}>BCOM</button>
          </div>
          <div style={styles.actions}>
            <button style={styles.downloadButton}>Download Brochure</button>
            <button style={styles.helpButton}>Get Help</button>
            <button style={styles.compareButton}>Add to Compare</button>
          </div>
        </div>
        <div style={styles.imageSection}>
          <img
            style={styles.image}
            src={Juimage}
            alt="Acharya Nagarjuna University"
          />
        </div>
      </div>

      {/* About Section */}
      <div style={styles.paragraphSection}>
        <h2 style={styles.paragraphHeading}>
          About Acharya Nagarjuna University - Online
        </h2>
        <p style={styles.paragraphContent}>
          Acharya Nagarjuna University, established to offer quality online
          education, provides programs that align with industry standards,
          promoting flexibility and career advancement for students across
          various disciplines. Recognized for academic excellence, it empowers
          students with the necessary skills and credentials to meet the demands
          of a global workforce.
        </p>
      </div>

      {/* Key Highlights Table */}
      <div style={styles.tableSection}>
        <h2 style={styles.tableHeading}>Key Highlights of Manipal Online</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Feature</th>
              <th style={styles.tableHeader}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>University</td>
              <td style={styles.tableCell}>Manipal University</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Accreditation</td>
              <td style={styles.tableCell}>NAAC A+</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Approval</td>
              <td style={styles.tableCell}>UGC and AICTE Approved</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Location</td>
              <td style={styles.tableCell}>Jaipur, Rajasthan, India</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Establishment Year</td>
              <td style={styles.tableCell}>2011</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Program Types</td>
              <td style={styles.tableCell}>
                Undergraduate and Postgraduate Online Degree Programs
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Focus Areas</td>
              <td style={styles.tableCell}>
                Industry-Relevant Skills and Knowledge
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Educational Expertise</td>
              <td style={styles.tableCell}>Over 70 Years</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Learning Methodologies</td>
              <td style={styles.tableCell}>
                Interactive and Advanced Online Learning Tools
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Growth Emphasis</td>
              <td style={styles.tableCell}>
                Career-Oriented and Personal Development
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Learning Platform</td>
              <td style={styles.tableCell}>
                User-Friendly, Accessible Anywhere, Anytime
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Support Services</td>
              <td style={styles.tableCell}>
                Academic Guidance, Career Services, Technical Assistance
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Admission Process</td>
              <td style={styles.tableCell}>Simple and Efficient</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>NIRF Rank</td>
              <td style={styles.tableCell}>64th</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Student Rating</td>
              <td style={styles.tableCell}>4.7/5 Stars</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Benefits of Studying at Jain Online */}
      <div style={styles.benefitsSection}>
        <h2 style={styles.benefitsHeading}>
          Benefits of Studying at Jain Online
        </h2>
        <p style={styles.benefitsDescription}>
          With expert faculty, advanced technology, and a global network, Jain
          University empowers students to achieve academic and career goals
          without compromising work or personal commitments. The following are
          the benefits of pursuing online education from this university:
        </p>
        <div style={styles.benefitsGrid}>
          <div style={styles.benefitCard}>
            <div style={styles.icon}>📘</div>
            <h3 style={styles.benefitTitle}>Learning Management System</h3>
            <p style={styles.benefitDescription}>
              Jain University supports LMS and offers a flexible education
              environment. Students can access materials, submit assignments,
              and communicate with faculty from anywhere.
            </p>
          </div>
          <div style={styles.benefitCard}>
            <div style={styles.icon}>🖥</div>
            <h3 style={styles.benefitTitle}>Interactive Virtual Classrooms</h3>
            <p style={styles.benefitDescription}>
              The university offers interactive online classrooms that allow
              students to interact with faculty members and classmates in real
              time. These online classrooms offer tools for easy participation
              in discussions, questions, and project collaboration.
            </p>
          </div>
          <div style={styles.benefitCard}>
            <div style={styles.icon}>📚</div>
            <h3 style={styles.benefitTitle}>E-Learning Resources</h3>
            <p style={styles.benefitDescription}>
              Its E-learning Resources include structured course content, an LMS
              for management, assessments, multimedia, live classes,
              personalised learning, communication tools, and support services.
            </p>
          </div>
          <div style={styles.benefitCard}>
            <div style={styles.icon}>🎧</div>
            <h3 style={styles.benefitTitle}>24/7 Dedicated Support System</h3>
            <p style={styles.benefitDescription}>
              The university offers a 24/7 dedicated support system to help
              students with questions or concerns. This support system includes
              email, phone, and live chat support, ensuring that students
              receive timely assistance whenever needed.
            </p>
          </div>
          <div style={styles.benefitCard}>
            <div style={styles.icon}>💻</div>
            <h3 style={styles.benefitTitle}>Online Assessments and Exams</h3>
            <p style={styles.benefitDescription}>
              The university conducts online assessments and exams to measure
              student progress and evaluate their understanding of the material.
              These challenging assessments provide valuable feedback on
              performance.
            </p>
          </div>
          <div style={styles.benefitCard}>
            <div style={styles.icon}>👨‍🏫</div>
            <h3 style={styles.benefitTitle}>Experienced Faculty</h3>
            <p style={styles.benefitDescription}>
              The university provides faculty support and assistance to
              students, making it easier for them to learn and succeed. Teachers
              bring real-world experiences into the classroom, helping students
              understand how their lessons apply in the workplace.
            </p>
          </div>
        </div>
      </div>

      {/* EMI Options Section */}
      <div style={styles.paragraphSection}>
        <h2 style={styles.paragraphHeading}>
          EMI Options Available At Manipal Online University
        </h2>
        <p style={styles.paragraphContent}>
          Manipal Online University offers flexible and convenient EMI (Equated
          Monthly Installment) facilities to help students manage their
          educational expenses effectively. These EMI options allow students to
          pay their fees in manageable monthly installments, making quality
          education accessible without the immediate financial burden.
        </p>
        <h3 style={styles.subHeading}>
          Key Features of EMI Facility at Manipal University
        </h3>
        <ul style={styles.list}>
          <li>
            Flexible Payment Plans: Manipal Online offers multiple EMI options
            with flexible tenures to suit different financial needs.
          </li>
          <li>
            Zero or Low Interest: Some EMI plans have zero or minimal interest
            rates, making education more affordable.
          </li>
          <li>
            Simple Online Application: The EMI facility can be easily availed
            through the online payment portal during fee submission.
          </li>
          <li>
            Collaboration with Banks: Manipal Online partners with leading
            financial institutions to provide seamless EMI services.
          </li>
          <li>
            No Hidden Charges: The EMI options are transparent, with no hidden
            costs, ensuring students can plan their finances effectively.
          </li>
        </ul>
      </div>

      {/* Why Choose Manipal Section */}
      <div style={styles.tableSection}>
        <h2 style={styles.tableHeading}>
          Why Should You Choose Manipal University - Online?
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Feature</th>
              <th style={styles.tableHeader}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>Reputation of Excellence</td>
              <td style={styles.tableCell}>
                Manipal University is renowned for its 70+ years of legacy and
                esteemed academic excellence. Its strong record of producing
                successful graduates is a beacon of quality education and
                innovative teaching methods.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Affordable Fee Structure</td>
              <td style={styles.tableCell}>
                Manipal Online University offers programs at an affordable cost,
                making quality education accessible to all. The university
                ensures that financial constraints do not hinder your
                educational aspirations, providing various scholarships and
                financial aid options.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>Flexible Learning Options</td>
              <td style={styles.tableCell}>
                The university provides flexible learning options for students
                with other commitments via live and recorded classes. This
                allows students to study at their own pace and convenience.
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>
                Updated Industry-Focused Curriculum
              </td>
              <td style={styles.tableCell}>
                Manipal University Online courses are designed and updated
                regularly by industry experts, ensuring you receive relevant and
                up-to-date knowledge.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles object

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "1200px",
    margin: "auto",
    marginTop: "120px",
    fontFamily: "Arial, sans-serif",
    flexWrap: "wrap", // Added for better responsiveness
  },
  textSection: {
    flex: 1,
    marginRight: "20px",
    minWidth: "280px", // Ensures minimum width for better responsiveness
  },
  heading: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#002366",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginTop: "10px",
  },
  badges: {
    display: "flex",
    gap: "10px",
    marginTop: "15px",
    flexWrap: "wrap", // Allows badges to wrap on smaller screens
  },
  badge: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  courses: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "20px",
  },
  courseButton: {
    padding: "8px 12px",
    backgroundColor: "#e0f4ff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "20px",
  },
  downloadButton: {
    padding: "10px 15px",
    backgroundColor: "#ff6600",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  helpButton: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  compareButton: {
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  imageSection: {
    position: "relative",
    width: "500px",
    minWidth: "280px", // Ensures minimum width for better responsiveness
    marginTop: "20px", // Added margin for stacking on smaller screens
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    height: "auto",
  },
  rating: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "18px",
  },

  tableSection: {
    padding: "20px 50px",
    maxWidth: "1200px",
    margin: "auto",
  },
  tableHeading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#002366",
    marginBottom: "15px",
    textAlign: "center",
  },
  table: {
    width: "90%",
    margin: "0 auto",
    borderCollapse: "collapse",
    marginTop: "15px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
  },
  tableHeader: {
    backgroundColor: "#0056b3",
    color: "white",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "600",
    textAlign: "left",
  },
  tableCell: {
    border: "1px solid #ddd",
    padding: "10px",
    fontSize: "15px",
    color: "#333",
    backgroundColor: "#f9f9f9",
    textAlign: "left",
  },
  paragraphSection: {
    padding: "20px 50px",
    maxWidth: "1200px",
    margin: "auto",
  },
  paragraphHeading: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#0056b3",
    marginBottom: "10px",
    textAlign: "center",
  },
  paragraphContent: {
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.6",
    paddingLeft: "20px",
    paddingRight: "20px",
    textAlign: "justify",
  },
  list: {
    fontSize: "15px",
    color: "#333",
    paddingLeft: "40px",
    textAlign: "justify",
  },

  /* Benefits Section Styles */
  benefitsSection: {
    padding: "40px 50px",
    maxWidth: "1200px",
    margin: "auto",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    marginTop: "40px",
  },
  benefitsHeading: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0056b3",
    marginBottom: "20px",
  },
  benefitsDescription: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
    textAlign: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  benefitCard: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  benefitCardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  },
  icon: {
    fontSize: "30px",
    color: "#0056b3",
    marginBottom: "10px",
  },
  benefitTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#0056b3",
    marginBottom: "10px",
  },
  benefitDescription: {
    fontSize: "14px",
    color: "#333",
  },

  /* Media Queries */
  "@media (max-width: 1200px)": {
    table: {
      width: "100%",
    },
  },
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column",
      padding: "20px",
    },
    tableSection: {
      padding: "20px",
    },
    textSection: {
      marginRight: "0",
    },
    imageSection: {
      marginRight: "0",
      width: "100%",
    },
    heading: {
      fontSize: "24px",
    },
    description: {
      fontSize: "14px",
    },
    paragraphContent: {
      fontSize: "14px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    list: {
      fontSize: "14px",
      paddingLeft: "20px",
    },
    tableCell: {
      fontSize: "14px",
      padding: "8px",
    },
    tableHeader: {
      fontSize: "14px",
      padding: "8px",
    },
    courseButton: {
      padding: "8px 16px",
      fontSize: "14px",
    },
    downloadButton: {
      padding: "8px 16px",
      fontSize: "14px",
    },
    helpButton: {
      padding: "8px 16px",
      fontSize: "14px",
    },
    compareButton: {
      padding: "8px 16px",
      fontSize: "14px",
    },
    benefitsSection: {
      padding: "20px",
    },
    benefitsHeading: {
      fontSize: "24px",
    },
    benefitsDescription: {
      fontSize: "14px",
      marginBottom: "20px",
    },
    benefitsGrid: {
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "15px",
    },
    benefitCard: {
      padding: "15px",
    },
    icon: {
      fontSize: "24px",
    },
    benefitTitle: {
      fontSize: "16px",
    },
    benefitDescription: {
      fontSize: "13px",
    },
  },
};

export default Ubox;
