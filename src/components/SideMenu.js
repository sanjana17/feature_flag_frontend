import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./sidemenu.scss";

export default function SideMenu() {
  return (
    <div className="sidemenu">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>
            Admin
            <Link to="/" />
          </MenuItem>
          <MenuItem>
            Create Feature
            <Link to="/editFeature" />
          </MenuItem>
          <MenuItem>
            View Feature
            <Link to="/features" />
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
}
