import React from "react";
import PropTypes from "prop-types";

import Aside from "../../components/Aside/Aside";

import styles from "./Cabinet.module.css";

const Cabinet = (props) => {
  return (
    <div className={styles.cabinetRoot}>
      <Aside />

      <main className={styles.main}>
        {props.children}
      </main>
    </div>
  );
};

Cabinet.propTypes = {
  children: PropTypes.node,
};

export default Cabinet;
