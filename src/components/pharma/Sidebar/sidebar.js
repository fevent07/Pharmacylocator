import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", overflow: "scroll initial", height: "auto" }}
    >
      <CDBSidebar textColor="#00AADB" backgroundColor="#000">
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to={`/PharmaHome/${localStorage.getItem("token")}`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to={`/ViewMedicine/${localStorage.getItem("token")}`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="list">View Medicine</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to={`/ManageMedicine/${localStorage.getItem("token")}`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="clipboard-check">
                Manage Medicine
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to={`/ManageProfile/${localStorage.getItem("token")}`}
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">
                Manage Profile
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/FeedbackPh/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="comment-alt">
                Send Feedback{" "}
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          ></div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
