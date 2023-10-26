import React from 'react';


function ClearSearch(props) {
  return (
    <span className="clear" onClick={props.onClear}>
      &#10005;
    </span>
  );
}

export default ClearSearch;
