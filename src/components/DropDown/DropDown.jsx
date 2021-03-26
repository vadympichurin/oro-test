import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";

import { ReactComponent as Arrow } from "../../static/icons/arrow-dropdown.svg";

import styles from "./DropDown.module.css";

const DropDown = ({ title, text, id }) => {
  const history = useHistory();
  const location = useLocation();

  const isOpen = location.search.includes(id);

  const handleDropDownId = () => {
    let idsArr = [];

    if (
      typeof qs.parse(location.search) === "object" &&
      !Array.isArray(qs.parse(location.search).ids)
    ) {
      idsArr = Object.values(qs.parse(location.search)).includes(id)
        ? []
        : [...Object.values(qs.parse(location.search)), id];
    } else {
      idsArr = qs.parse(location.search).ids.includes(id)
        ? qs.parse(location.search).ids.filter((item) => item !== id)
        : [...qs.parse(location.search).ids, id];
    }

    history.push(`${location.pathname}?${qs.stringify({ ids: [...idsArr] })}`);
  };

  return (
    <div className={styles.root}>
      <button
        className={classNames(styles.btn, { [styles.active]: isOpen })}
        onClick={handleDropDownId}
      >
        <span>{title}</span>
        <Arrow
          className={classNames(styles.arrowIcon, { [styles.rotate]: isOpen })}
        />
      </button>
      <div className={classNames(styles.text, { [styles.open]: isOpen })}>
        {text}
      </div>
    </div>
  );
};

DropDown.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
};

export default DropDown;
