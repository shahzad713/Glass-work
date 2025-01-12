import { useState, useEffect } from "react";
import Image from "next/image";

import { getNextImageIndex } from "../methods";
import { sliderImages } from "../data";

import styles from "./style.module.css";

const RightContainerHB = () => {
  // State to track current images
  const [imageIndexes, setImageIndexes] = useState({
    left: 0,
    middle: 1,
    right: 2,
  });

  // Automatically update slider every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndexes((prevIndexes) => ({
        left: getNextImageIndex(prevIndexes.left, -1),
        middle: getNextImageIndex(prevIndexes.middle, -1),
        right: getNextImageIndex(prevIndexes.right, -1),
      }));
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Get image sources
  const { left, middle, right } = imageIndexes;
  const leftImage = sliderImages[left]?.src;
  const middleImage = sliderImages[middle]?.src;
  const rightImage = sliderImages[right]?.src;

  return (
    <div className={styles.rightContainer}>
      {/* Decorative space pattern */}
      <div className={styles.spaceUpPattern} />

      {/* Slider container */}
      <div className={styles.sliderOuterContainer}>
        {/* Frame image */}
        <div className={styles.box}>
          <Image
            className={styles.frameImageDesktop}
            src="/Images/Home/Slider/Frame.png"
            alt="Decorative framing for the slider"
            width={822.07}
            height={638.66}
            loading="eager"
            title="Alum Tec Decorative Frame"
            priority
          />
          <div className={styles.frameImageMobile} title="Alum Tec Mobile Frame" />
        </div>

        {/* Overlay and sliding images */}
        <div className={`${styles.box} ${styles.overlay}`}>
          <div className={styles.sliderOuterContainer}>
            {/* Middle Image */}
            <div className={styles.box}>
              <Image
                className={`${styles.middleImage} ${styles.active}`}
                src={middleImage}
                alt={`Middle slider image ${middle + 1}`}
                width={618}
                height={552}
                loading="eager"
                title={`Middle Image ${middle + 1}`}
                priority
              />
            </div>

            {/* Left Image */}
            <div className={`${styles.box} ${styles.overlay}`}>
              <Image
                className={`${styles.leftImage} ${styles.active}`}
                src={leftImage}
                alt={`Left slider image ${left + 1}`}
                width={201}
                height={212}
                loading="eager"
                title={`Left Image ${left + 1}`}
              />
            </div>

            {/* Right Image */}
            <div className={`${styles.box} ${styles.overlay}`}>
              <Image
                className={`${styles.rightImage} ${styles.active}`}
                src={rightImage}
                alt={`Right slider image ${right + 1}`}
                width={201}
                height={212}
                loading="eager"
                title={`Right Image ${right + 1}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContainerHB;
