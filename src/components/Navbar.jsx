import React from "react";

const Navbar = ({acounter}) => {
  // console.log(acounter);
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar navbar-expand-md bg-body-secondary fixed-top ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Kain
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                
                
                <li className="nav-item">
                  <a className="nav-link fw-bolder" href="#" >
                    Total counter : {acounter}
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
