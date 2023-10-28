import * as React from "react";
const Close = (props) => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.3809 1.0332L1.38086 14.0332"
      stroke="#FF4D00"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.38086 1.0332L14.3809 14.0332"
      stroke="#FF4D00"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Close;
