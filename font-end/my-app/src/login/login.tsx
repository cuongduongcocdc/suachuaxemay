import React, { useState } from "react";
import "./login.scss";
import loginContext from "../context/loginContext";
import LoginProvider from "../context/loginProvider";
import { Link, Redirect } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

    const userStr = JSON.parse(localStorage.getItem("user")|| '{}');
  // console.log(userStr);
  // if (userStr != null) {
  //   return <Redirect to={{ pathname: "/home" }} />;
  // }
  return (
     <LoginProvider>
      <loginContext.Consumer>
        {({ retrieveUser, isLogin, note }) =>
          isLogin ? (
             <Redirect to={{ pathname: "/home" }} />
          ) : (
    <div className="container">
      <div id="login">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 form">
          {note}
            <form>
              <table>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>Nhập UserName:</td>
                  <td>
                    <input
                      className="input"
                      placeholder="Username"
                      type="text"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Nhập Password:</td>
                  <td>
                    <input
                      className="input"
                      placeholder="Password"
                      type="Password"
                      name="passowrd"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    <button className="button" type="submit"  onClick={() => retrieveUser(username,password)}>
                      Đăng Nhập
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
      )
        }
      </loginContext.Consumer>
    </LoginProvider>
  );
}
