import React from "react";
import PropTypes from "prop-types";

import TabControls from "../../components/TabsControls/TabControls";

const Orders = (props) => {
  return (
    <div>
      <h2>Orders</h2>
      <TabControls />

      {props.children}
    </div>
  );
};

Orders.propTypes = {
  children: PropTypes.node,
};

export default Orders;
