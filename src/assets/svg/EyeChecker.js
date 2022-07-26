import React from "react";

function eye({ color }) {
  return (
    <div
      style={{
        cursor: "pointer",
      }}
    >
      <svg
        width="17"
        height="13"
        viewBox="0 0 17 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1562 6.5C11.1562 7.20448 10.8764 7.88011 10.3783 8.37825C9.88011 8.8764 9.20448 9.15625 8.5 9.15625C7.79552 9.15625 7.11989 8.8764 6.62175 8.37825C6.1236 7.88011 5.84375 7.20448 5.84375 6.5C5.84375 5.79552 6.1236 5.11989 6.62175 4.62175C7.11989 4.1236 7.79552 3.84375 8.5 3.84375C9.20448 3.84375 9.88011 4.1236 10.3783 4.62175C10.8764 5.11989 11.1562 5.79552 11.1562 6.5Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 6.5C0 6.5 3.1875 0.65625 8.5 0.65625C13.8125 0.65625 17 6.5 17 6.5C17 6.5 13.8125 12.3438 8.5 12.3438C3.1875 12.3438 0 6.5 0 6.5ZM8.5 10.2188C9.48627 10.2188 10.4322 9.82695 11.1296 9.12955C11.827 8.43215 12.2188 7.48627 12.2188 6.5C12.2188 5.51373 11.827 4.56785 11.1296 3.87045C10.4322 3.17305 9.48627 2.78125 8.5 2.78125C7.51373 2.78125 6.56785 3.17305 5.87045 3.87045C5.17305 4.56785 4.78125 5.51373 4.78125 6.5C4.78125 7.48627 5.17305 8.43215 5.87045 9.12955C6.56785 9.82695 7.51373 10.2188 8.5 10.2188Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default eye;
