import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Img from "../img/logo.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./home.css";
import menu from '../menu/menu'
export default function Home() {

  const userStr = JSON.parse(localStorage.getItem("user")|| '{}');

  if (userStr == null) {
    return <Redirect to={{ pathname: "/login" }} />;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    return <Redirect to={{ pathname: "/" }} />;
  };

  return (
    <div className="main1">
    <div className="body">
      <div className="menu-left">
        <nav
          style={{ background: "navy" }}
          className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
        >
          <div className="container-fluid d-flex flex-column p-0">
            <a
              className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
              href="#"
            >
              <div className="logo">
                <a href="#">
                  <img src={Img} alt=""></img>
                </a>
              </div>
            </a>
            <ul className="nav navbar-nav text-light" id="accordionSidebar">
     
                <li
                className="nav-item"
                  role="presentation"
                >
                  <a className="nav-link" href="detail" > 
                    <i className="fas fa-tachometer-alt"></i>
                    <span>Chi tiết phiếu</span>
                    <span style={{ marginLeft: "80px" }}>
                    <i className="fas fa-sort-down"></i>
                  </span>
                  </a>
                </li>

           
                  <li
                    className="nav-item"
                    role="presentation"
                  >
                    <a className="nav-link" href="create">
                      <i className="fas fa-user"></i>
                      <span>Tạo phiếu</span>
                    </a>
                  </li>

                  <li
                    className="nav-item"
                    role="presentation"
                  >
                    <a className="nav-link">
                      <i className="fas fa-user"></i>
                      <span>Phiếu</span>
                    </a>
                  </li>
           
              <li className="nav-item" role="presentation">
                <a className="nav-link" >
                  <i className="fas fa-user"></i>
                  <span>Khách hàng</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link">
                  <i className="fas fa-user"></i>
                  <span>Nhân viên</span>
                </a>
              </li>


              <li onClick={handleLogout} className="nav-item" role="presentation">
                <Link to="/" className="nav-link active">
                  <i className="fas fa-table"></i>
                  <span>Thoát</span>
                </Link>
              </li>
            </ul>
            <div className="text-center d-none d-md-inline">
              <button
                className="btn rounded-circle border-0"
                id="sidebarToggle"
                type="button"
              ></button>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div className="main">
        <div>
          Chào
        </div>
    </div>
  </div>
  );
}
