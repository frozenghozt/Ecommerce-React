import React from "react";
import styles from "./HpFilter.module.scss";
import HpFilterMenu from "../SmallComponents/HpFilterMenu";
import HpFilterLine from "../SmallComponents/HpFilterLine";
import HpFilters from "../SmallComponents/HpFilters";

const HpFilterCont = () => {
  return (
    <div className={styles.hpfilterContainer}>
      <HpFilterMenu />
      <HpFilterLine />
      <HpFilters />
    </div>
  );
};

export default HpFilterCont;
