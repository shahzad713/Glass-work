import styles from "./style.module.css";

const LeftContainerHB = () => {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.insideLeftContainer}>
        <div className={styles.dash_line}></div>
        <h3 className={styles.heading}>
          Specializing in aluminium curtain walls, windows, doors, 12mm glass
          work, office partitions, stair railings, fiberglass sheds, and expert
          glass installations
        </h3>
        <h3 className={styles.subHeading}>
          Client satisfaction is our priority, with glazing solutions at the
          heart of what we do.
        </h3>
      </div>
    </div>
  );
};

export default LeftContainerHB;
