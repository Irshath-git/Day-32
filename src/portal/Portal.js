import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Navbar/Topbar";

function Portal() {
  return (
    <>
      <div id="wrapper">
        {/* <Sidebar /> */}
        <div id="content-wrapper" className="d-flex flex-colum">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portal;
