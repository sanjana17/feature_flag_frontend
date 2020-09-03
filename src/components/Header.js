import React from "react";

export default function Header({ title }) {
  return (
    <div className="header">
      <h3 className="text-color">{title}</h3>
    </div>
  );
}
