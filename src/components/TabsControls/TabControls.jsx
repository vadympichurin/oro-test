import React from "react";
import classNames from "classnames";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

import styles from "./TabControls.module.css";

const TabControls = () => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  return (
    <div className={styles.tabContainer}>
      <button
        className={classNames(styles.tab, {
          [styles.tabActive]: location.pathname.includes("general"),
        })}
        onClick={() => {
          history.replace(`${match.url}/general`);
        }}
      >
        General
      </button>

      <button
        className={classNames(styles.tab, {
          [styles.tabActive]: location.pathname.includes("address"),
        })}
        onClick={() => {
          history.replace(`${match.url}/address`);
        }}
      >
        Addresses
      </button>

      <button
        className={classNames(styles.tab, {
          [styles.tabActive]: location.pathname.includes("myorders"),
        })}
        onClick={() => {
          history.replace(`${match.url}/myorders`);
        }}
      >
        Orders
      </button>
    </div>
  );
};

export default TabControls;
