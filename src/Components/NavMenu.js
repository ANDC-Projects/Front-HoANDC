import React from "react";
import { Link } from "react-router-dom";
export const NavMenu = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        display: "block",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "10px 50px 10px 10px",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ fontWeight: "bold" }}>
          Humans of ANDC
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item">Your Peers</Link>
                </li>
                <li>
                  <Link className="dropdown-item">Edit Profile</Link>
                </li>
                <li>
                  <Link className="dropdown-item">Resource People</Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item">
                    <button type="button" className="btn btn-outline-danger ">
                      Admin
                    </button>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

// <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark display-block position-fixed" style={{top:'0', left:'0', right:'0', padding:'10px 50px 10px 10px'}}>
// <div classNameName="container-fluid">
// <Link classNameName="navbar-brand" to='\' style={{fontWeight:'bold'}}>Humans of ANDC</Link>
// <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
// <span classNameName="navbar-toggler-icon"></span>
// </button>
// <div classNameName="collapse navbar-collapse" id="navbarNavDropdown" >
// <ul classNameName="navbar-nav ">
//   <li classNameName="nav-item">
//     <Link classNameName="nav-link active" aria-current="page" to='/'>Home</Link>
//   </li>
//   <li classNameName="nav-item">
//     <Link classNameName="nav-link" href="#">About</Link>
//   </li>
//   <li classNameName="nav-item">
//     <Link to='/Form' classNameName="nav-link" href="#">Form</Link>
//   </li>
//   <li classNameName="nav-item dropdown">
//     <Link classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//       more
//     </Link>
//     <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//       <li><Link classNameName="dropdown-item" to="/">New user</Link></li>
//       <li><Link classNameName="dropdown-item" to="/">Edit profile</Link></li>
//       <li><Link classNameName="dropdown-item text-wrap" to="/">Resource Person</Link></li>
//       <li><Link classNameName="dropdown-item" to='/Admin'>
//         <button type="button" classNameName="btn btn-outline-danger"> Admin </button>
//       </Link></li>
//     </ul>
//   </li>
// </ul>
// </div>
// <form className="d-flex">
//     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//     <button className="btn btn-outline-success" type="submit">Search</button>
// </form>
// </div>
// </nav>
