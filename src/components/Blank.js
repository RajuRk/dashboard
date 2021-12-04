import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Blank() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div class="container-fluid">
              {/* <!-- Page Heading --> */}
              <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Blank;
