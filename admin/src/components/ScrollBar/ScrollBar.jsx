import React, { useState, useCallback } from "react";
import "./onHoverStyle.css";

export default function CustomScrollDiv({ children, className, ...restProps }) {
  const [hovering, setHovering] = useState(false);

  const handleMouseOver = useCallback(() => {
    setHovering(true);
  }, []);
  const handleMouseOut = useCallback(() => {
    setHovering(false);
  }, []);

  return (
    <div
      className={"scrollhost-container"}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div
        ref={"scrollHostRef"}
        className={`scrollhost ${className}`}
        {...restProps}
      >
        {children}
        <div
          className={"scroll-bar"}
          style={{ opacity: hovering ? 1 : 0 }}
        ></div>
      </div>
    </div>
  );
}
