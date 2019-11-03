import React from "react";
import "./PostedTime.less";
/**
 * Accepts the description for Notification and the button Name if present or else pass empty string
 * @param  {[string]} descr   JSX String can also be passed
 * @param  {[string]} btnName JSX String can also be passed
 * @return void
 */
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
