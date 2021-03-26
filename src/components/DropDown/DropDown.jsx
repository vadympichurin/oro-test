import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";

import { ReactComponent as Arrow } from "../../static/icons/arrow-dropdown.svg";

import styles from "./DropDown.module.css";

// Переиспользуемый компонент для всех аккордионов
// получает пропсы, которые потом рендерит

// сначала сделал открытие и закрытие аккордионов через стейт компонента, но затем понял что нужно через url
const DropDown = ({ title, text, id }) => {
  const history = useHistory();
  const location = useLocation();

  const isOpen = location.search.includes(id);

  // функция берет location проверят что в нем, 
  // сравнивает с текущим id аккордиона, и если там такого id нет, то добавляет его в url,
  //  а если в url уже есть такой id то удаляет его, 
  // таким образом при первом нажатии на аккордион его можно открыть, а при повторном нажатии закрыть

  const handleToggleDropDown = () => {
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
        onClick={handleToggleDropDown}
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
