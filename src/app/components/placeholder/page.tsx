import React from "react";
import "./style.scss";
type Props = {};

function PlaceHolder({}: Props) {
  return (
    <div className="PlaceHolder">
      <div className="head">Photography and Videography</div>
      <div className="body">
        Lorem ipsum dolor sit amet consectetur. Nulla congue risus imperdiet est
        id neque arcu lacinia. Hac in pharetra tincidunt luctus quisque. Sit
        diam nisi vestibulum lobortis enim sed rhoncus rutrum. Eleifend tortor
        eu massa cursus adipiscing maecenas eu.
      </div>
      <button>View Portfolio</button>
    </div>
  );
}

export default PlaceHolder;
