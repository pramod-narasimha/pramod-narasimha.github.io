import React from "react";

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="a"
        d="M4.889 17.733H19.11c.489 0 .889-.4.889-.889 0-.488-.4-.888-.889-.888H4.89c-.489 0-.889.4-.889.888 0 .49.4.89.889.89zm0-4.977H19.11c.489 0 .889-.4.889-.89 0-.488-.4-.888-.889-.888H4.89c-.489 0-.889.4-.889.889s.4.889.889.889zM4 6.889c0 .489.4.889.889.889H19.11c.489 0 .889-.4.889-.89C20 6.4 19.6 6 19.111 6H4.89C4.4 6 4 6.4 4 6.889z"
      ></path>
    </defs>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="none"
      strokeWidth="1"
      transform="translate(-24 -93) translate(0 80) translate(16 6) translate(8 7)"
    >
      <path fill="#FFF" d="M0 0H24V24H0z"></path>
      <mask fill="#fff">
        <use xlinkHref="#a"></use>
      </mask>
      <use fill="#495057" fillRule="nonzero" xlinkHref="#a"></use>
    </g>
  </svg>
);

export default HamburgerIcon;
