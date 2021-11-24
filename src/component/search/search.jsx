/** @format */

import React, { useState } from "react";
import "./index.scss";
import posts from "../../data.json";

export default function Search() {
  const [data, setdata] = useState([...posts.posts]);
  const [Light, setLight] = useState(false);

  const filterHandeler = (event) => {
    setdata(
      posts.posts.filter((p) => {
        return p.title
          .toLowerCase()
          .trim()
          .includes(event.target.value.toLowerCase().trim());
      })
    );
  };
  const changeThemeHandeler = () => {
    setLight(!Light);
  };

  return (
    <div className={`${!Light ? "main_dark" : "main_light"}`}>
      <div id="app">
        <div className={`search-wrapper mx-1 py-2 ${!Light ? "dark" : ""}`}>
          <input
            type="text"
            placeholder="Search title ...."
            onChange={filterHandeler}
          />
          <label className="">Search title</label>
          <button onClick={changeThemeHandeler}>
            {!Light ? "Light" : "Dark"} Theme
          </button>
        </div>
        <div className="wrapper">
          {data.map((p) => {
            return (
              <div className={`card ${!Light ? "card_dark" : ""}`} key={p.id}>
                <a href={p.link}>
                  <img src={p.img} alt="" />
                  <small>posted by: {p.name}</small>
                  {p.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
