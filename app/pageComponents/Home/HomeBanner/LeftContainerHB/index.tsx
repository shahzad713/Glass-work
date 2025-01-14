import styles from "./style.module.css";

const highlightStyle = {
  backgroundColor: "#f0f8ff",
  color: "#007acc",
  padding: "2px 6px",
  borderRadius: "4px",
  fontWeight: "bold",
};

const LeftContainerHB = () => {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.insideLeftContainer}>
        <div className={styles.dash_line}></div>
        <h3 className={styles.heading}>
          Experts in aluminum, glass, and professional installations.
        </h3>
        <h4 className={`${styles.subHeading} ${styles.fixedHeight}`}>
          Our specialties include{" "}
          <span style={highlightStyle}>aluminum curtain walls</span>,{" "}
          <span style={highlightStyle}>windows</span>,{" "}
          <span style={highlightStyle}>doors</span>,{" "}
          <span style={highlightStyle}>12mm glass work</span>,{" "}
          <span style={highlightStyle}>Glass Paper</span>,{" "}

          <span style={highlightStyle}>office partitions</span>,{" "}
          <span style={highlightStyle}>stair railings</span>,{" "}
          <span style={highlightStyle}>fiberglass sheds</span>,{" "}
          <span style={highlightStyle}>12mm office fronts</span>,{" "}
          <span style={highlightStyle}>5mm window glass</span>,{" "}
          
          <span style={highlightStyle}>mirrors</span>, and other professional
          glass installations.
        </h4>
      </div>
    </div>
  );
};

export default LeftContainerHB;
