import React from "react";
import { useRouteMatch } from "react-router-dom";

import DropDown from "../DropDown/DropDown";

import { products } from "../../static/lorem/textForDropDown";
// хотел сюда прокидывать пропсами данные сверху, 
// но потом решил что нет смысла, в реальном проекте данные бы загружались
//  с сервера в хуке useEffect (componentDidMount)
// поэтому тут я их просто заимпоритровал из отдельного файла
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
