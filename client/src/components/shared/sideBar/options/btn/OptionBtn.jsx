"use clinet";

import React from "react";
import BooleanOption from "./BooleanOption";
import NumberOption from "./NumberOption";

const OptionBtn = React.memo(function ({ data }) {
  const { type, title, enum: enumm, guide } = data;

  const content = () => {
    if (type == "boolean") {
      return <BooleanOption data={{ title: title, guide: guide }} />;
    }
    if (type == "number") {
      return <NumberOption data={{ enumm : enumm , title: title, guide: guide }} />;
    }
  };
  return <div> {content()}</div>;
});
export default OptionBtn;
