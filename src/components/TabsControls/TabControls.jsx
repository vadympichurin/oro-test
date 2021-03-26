import React from "react";
import { useRouteMatch , NavLink } from "react-router-dom";

import styles from "./TabControls.module.css";

// это дополнительная навигация по сайту, тут собраны все кнопки таб
// переиспользуется в каждой странице
const TabControls = () => {
  const match = useRouteMatch();

  return (
    <nav className={styles.tabContainer}>
      <NavLink
        to={`${match.url}/general`}
        className={styles.tab}
        activeClassName={styles.tabActive}
      >
        General
      </NavLink>

      <NavLink
        to={`${match.url}/address`}
        className={styles.tab}
        activeClassName={styles.tabActive}
      >
        Addresses
      </NavLink>

      <NavLink
        to={`${match.url}/myorders`}
        className={styles.tab}
        activeClassName={styles.tabActive}
      >
        Orders
      </NavLink>
    </nav>
  );
};

export default TabControls;
