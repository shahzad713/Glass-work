import { useState, useEffect } from "react";
import Image from "next/image";

import { getNextImageIndex } from "../methods";
import { sliderImages } from "../data";

import styles from "./style.module.css";

const RightContainerHB = () => {
  const [imageIndexes, setImageIndexes] = useState({
    left: 0,
    middle: 1,
    right: 2,
  });

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

  const { left, middle, right } = imageIndexes;
  const leftImage = sliderImages[left]?.src;
  const middleImage = sliderImages[middle]?.src;
  const rightImage = sliderImages[right]?.src;

  return (
    <div className={styles.rightContainer}>
      <div className={styles.spaceUpPattern} />

      <div className={styles.sliderOuterContainer}>
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

        <div className={`${styles.box} ${styles.overlay}`}>
          <div className={styles.sliderOuterContainer}>
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
