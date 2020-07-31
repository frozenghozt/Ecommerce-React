import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.searchcontainer}>
      <div className={styles.searchwrapper}>
        <div className={styles.titleclose}>
          <span>Search</span>
          <span>&#x4d;</span>
        </div>
        <input placeholder="Search here" />
      </div>
    </div>
  );
};

export default Search;
