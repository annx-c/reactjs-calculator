import React from "react";
import "./Switch.css";

export default function Switch(props) {
  const { onChange } = props;
  return(
    <section className="switch">
      <label className="toggle">
        <input type="checkbox" className="check-switch" onChange={onChange} hidden/>
        <span className="slider"></span>
      </label>
    </section>
  )
}