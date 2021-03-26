import React from "react";
import { useRouteMatch } from "react-router-dom";

import DropDown from "../DropDown/DropDown";

import { products } from "../../static/lorem/textForDropDown";

const TabItem = () => {
  const match = useRouteMatch();
  const tabId = match.params.tabId;

  return (
    <>
      {products[tabId].map((item) => (
        <DropDown
          title={item.title}
          text={item.text}
          id={item.id}
          key={item.id}
        />
      ))}
    </>
  );
};

export default TabItem;
