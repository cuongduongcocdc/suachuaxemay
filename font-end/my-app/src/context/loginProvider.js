import React, { useState } from "react";
import UserDataService from "../service/user.service";
import loginContext from "./loginContext";
import { Link, Redirect } from "react-router-dom";
LoginProvider.propTypes = {};

function LoginProvider(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [note, setNote] = useState("");
  const [role, setRole] = useState("");
  const retrieveUser = (username, password) => {
    if (username === "" && password !== "") {
      setNote("username not null");
    }
    if (password === "" && username !== "") {
      setNote("password not null");
    }
    if (username === "" && password === "") {
      setNote("username and password not null");
    }
    if (username !== "" && password !== "") {
      UserDataService.checkLogin(username, password)
        .then((response) => {
          console.log("dang nhap");
          if (response.data.accessToken) {
            console.log(response.data);
            // console.log("tocken" + response.data.accessToken);
            localStorage.setItem("user", JSON.stringify(response.data));
            setIsLogin(true);
            window.location.reload();
            console.log(response.data.role + " hahaha");
          }

          return response.data;
        })
        .catch((e) => {
          setNote("username or password invalid!!!");
          console.log(e);
        });
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    return <Redirect to={{ pathname: "/" }} />;
  };
  return (
    <loginContext.Provider
      value={{
        isLogin: isLogin,
        retrieveUser: retrieveUser,
        note: note,
        logout:logout,
      }}
    >
      {props.children}
    </loginContext.Provider>
  );
}

export default LoginProvider;
