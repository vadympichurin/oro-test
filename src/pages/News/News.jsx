import React from "react";
import PropTypes from "prop-types";

import TabControls from "../../components/TabsControls/TabControls";

const News = (props) => {
  return (
    <div>
      <h2>News</h2>
      <TabControls />

      {props.children}
    </div>
  );
};

News.propTypes = {
  children: PropTypes.node,
};

export default News;
