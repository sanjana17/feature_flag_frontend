import React from "react";
import SideMenu from "./SideMenu";

export default function Layout(props) {
  return (
    <div>
      <SideMenu />
      {props.children}
    </div>
  );
}
