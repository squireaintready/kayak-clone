import React, { useEffect, useState } from "react";
import "./App.css";
import $ from "jquery";
import { uuid } from "uuidv4";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

const baseURL = `kayak.com/h/mobileapis/directory/airlines/homework`;

function App() {
  const getDataFromJsonP = () => {
    $.ajax({
      url: "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
      jsonp: "jsonp",
      type: "GET",
      headers: { "X-Requested-With": "XMLHttpRequest" },
      crossDomain: true,
      dataType: "jsonp",
      // }).then(res => setData(res));
    }).then((res) =>
      setData(
        res.filter(
          (res) =>
            res.alliance === "ST" ||
            res.alliance === "OW" ||
            res.alliance === "SA"
        )
      )
    );
  };
  useEffect(() => {
    getDataFromJsonP();
    setFilter("none");
  }, []);

  const [data, setData] = useState();
  const [filter, setFilter] = useState("");

  return (
    <div className="app">
      <Header />
      <h1 className="app__title">Airlines</h1>
      <div className="app__filterContainer">
        <h5 className="app__filterTitle">Filter by Alliances</h5>
        <div className="app__filters">
          <div className="app__filter">
            <input name="Oneworld" type="checkbox" />
            <label for="Oneworld">Oneworld</label>
          </div>
          <div className="app__filter">
            <input name="Sky Team" type="checkbox" />
            <label for="Sky Team">Sky Team</label>
          </div>
          <div className="app__filter">
            <input name="Star Alliance" type="checkbox" />
            <label for="Star Alliance">Star Alliance</label>
          </div>
        </div>
      </div>
      <div className="app__content">
        <div className="app__grid">
          {/* {data?.map((airlineData) => {})} */}
          {data?.map((airlineData) => (
            <Card key={uuid()} airlineData={airlineData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
