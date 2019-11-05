import React from "react";
import "./PostedTime.less";

export const postedTime = postedDate => {
  var date1 = new Date(postedDate);
  var date2 = new Date();
  var diffTime = Math.abs(date2 - date1);
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <span className="asked-time" style={{ float: "right" }}>
      Asked {diffDays} days ago
    </span>
  );
};
