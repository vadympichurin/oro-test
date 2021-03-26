import React from "react";
import PropTypes from "prop-types";

import TabControls from "../../components/TabsControls/TabControls";

/*
 * была идея сделать одну переиспользуемую страницу,
 * но в реальном проекте на разных страницах
 * основной навигации будет разная разметка 
 */

const Customers = (props) => {
  return (
    <div>
      <h2>Customers</h2>
      <TabControls />

      {props.children}
    </div>
  );
};

Customers.propTypes = {
  children: PropTypes.node,
};

export default Customers;
