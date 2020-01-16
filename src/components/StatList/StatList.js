import React from "react";
import PropTypes from "prop-types";

import StatListItem from "./StatListItem";

export function StatList ( { list, itemProps, ...props } ) {
  return (
    <div className="container" {...props}>
      {
        list.map( ( item ) => (
          <StatListItem name={item.name} value={item.value} {...itemProps} key={`stat-${item.name}-${item.value}`} />
        ) )
      }
    </div>
  );
}

StatList.propTypes = {
  list: PropTypes.array.isRequired,
  itemProps: PropTypes.object
};

StatList.defaultProps = {
  itemProps: undefined
};

export default StatList;