import React from "react";

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <defs>
      <path
        id="a"
        d="M6.519 23.644H25.48c.652 0 1.186-.533 1.186-1.185s-.534-1.185-1.186-1.185H6.52c-.652 0-1.186.533-1.186 1.185s.534 1.185 1.186 1.185zm0-6.637H25.48c.652 0 1.186-.533 1.186-1.185s-.534-1.185-1.186-1.185H6.52c-.652 0-1.186.533-1.186 1.185s.534 1.185 1.186 1.185zM5.333 9.185c0 .652.534 1.185 1.186 1.185H25.48c.652 0 1.186-.533 1.186-1.185S26.133 8 25.48 8H6.52c-.652 0-1.186.533-1.186 1.185z"
      ></path>
    </defs>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="none"
      strokeWidth="1"
      transform="translate(-16 -36) translate(0 24) translate(16 12)"
    >
      <path fill="#FFF" d="M0 0H32V32H0z"></path>
      <mask fill="#fff">
        <use xlinkHref="#a"></use>
      </mask>
      <use fill="#0057D1" fillRule="nonzero" xlinkHref="#a"></use>
    </g>
  </svg>
);

export default HamburgerIcon;
