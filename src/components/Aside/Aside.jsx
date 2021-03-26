import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Aside.module.css";

// это основная навигация по сайту, находится в левом сайд баре

const Aside = () => {
  return (
    <aside className={styles.root}>
      <nav className={styles.menu}>
        <NavLink
          to="/products"
          className={styles.menu__item}
          activeClassName={styles.active}
        >
          Products
        </NavLink>

        <NavLink
          to="/customers"
          className={styles.menu__item}
          activeClassName={styles.active}
        >
          Customers
        </NavLink>

        <NavLink
          to="/orders"
          className={styles.menu__item}
          activeClassName={styles.active}
        >
          Orders
        </NavLink>

        <NavLink
          to="/news"
          className={styles.menu__item}
          activeClassName={styles.active}
        >
          News
        </NavLink>
      </nav>
    </aside>
  );
};

export default Aside;
