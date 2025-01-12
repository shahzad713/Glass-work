import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import HSBBodyRSControls from "./HSBBodyRSControls";

const HSBBodyRightSide = () => {
  return (
    <div className={styles.servicesCardContainer}>
      <h2 className={styles.servicesTitle}>Design and Construct</h2>

      <div className={styles.servicesDescription}>
        Alumtec Glazing Solution Inc. offers a complete range of engineering
        services to our clients, including initial designs that provide the most
        economical solutions and meet or exceed building codes.
        <br />
        With our professional and expert designers, we provide clients with
        detailed shop drawings, production drawings, and as-built drawings.
      </div>
    </div>
  );
};

export default HSBBodyRightSide;
