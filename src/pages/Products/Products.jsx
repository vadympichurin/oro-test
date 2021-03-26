import React from "react";
import PropTypes from 'prop-types';

import TabControls from '../../components/TabsControls/TabControls';

const Products = (props) => {
  return (
    <div>
      <h2>Products</h2>
      <TabControls />

      {props.children}
    </div>
  );
};

Products.propTypes = {
  children: PropTypes.node,
};

export default Products;
