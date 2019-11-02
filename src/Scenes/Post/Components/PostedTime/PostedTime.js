import React from "react";
import './PostedTime.less';
/**
 * Accepts the description for Notification and the button Name if present or else pass empty string
 * @param  {[string]} descr   JSX String can also be passed
 * @param  {[string]} btnName JSX String can also be passed
 * @return void
 */
export const postedTime = (descr, btnName) => {
  return <span className="asked-time" style={{ float: "right" }}>Asked 3 hrs Ago</span>
};
