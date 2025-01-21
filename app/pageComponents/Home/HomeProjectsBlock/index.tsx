import HPBHeader from "./HPBHeader";
import HomeProjectsList from "./HomeProjectsList";




import styles from "./style.module.css";

const HomeProjectsBlock = () => {

  return (
    <div className="h-[750px] ">
      <div className={styles.container}>
        <HPBHeader />

        <HomeProjectsList />

      </div>
    </div>
  );
};
export default HomeProjectsBlock;
