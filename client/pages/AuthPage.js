import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (err) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
      message(data.message);
    } catch (err) {}
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Shorten</h1>
        <div className="card white darken-1">
          <div className="card-content black-text">
            <span className="card-title">Authorization</span>
            <div className="input-field">
              <i className="material-icons prefix">account_circle</i>
              <input
                placeholder="Input your email"
                id="email"
                type="text"
                name="email"
                value={form.email}
                onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">vpn_key</i>
              <input
                placeholder="Input your password"
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={changeHandler}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn blue darken-4 white-text waves-effect waves-dark"
              style={{ marginRight: 10 }}
              onClick={loginHandler}
              disabled={loading}
            >
              Sign In
            </button>
            <button
              className="btn white lighten-1 black-text waves-effect waves-light"
              onClick={registerHandler}
              disabled={loading}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
