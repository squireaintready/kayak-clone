import React, { useEffect, useState } from "react";
import "./App.css";
import $ from "jquery";
import { v4 as uuid } from "uuid";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const [data, setData] = useState([]);
  const [checkedValues, setCheckedValues] = useState([])

  const getDataFromJsonP = () => {
    $.ajax({
      url: "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
      jsonp: "jsonp",
      type: "GET",
      headers: { "X-Requested-With": "XMLHttpRequest" },
      crossDomain: true,
      dataType: "jsonp",
    }).then((res) =>
      res.filter((res) => {
        if (
          res.alliance === "ST" ||
          res.alliance === "OW" ||
          res.alliance === "SA"
        ) {
          setData((prevState) => [
            ...prevState,
            {
              logoURL: res.logoURL,
              name: res.name,
              alliance: res.alliance,
              phone: res.phone,
              site: res.site
            },
          ]);
        }
        return null;
      })
    );
  };

  useEffect(() => {
    getDataFromJsonP();
  }, []);

  
  const handleChange = (e) =>{
    if(checkedValues.includes(e.target.value)){
      let temp = checkedValues.filter(value => value !== e.target.value)
      setCheckedValues(temp)
    }else{
      setCheckedValues(prevState => ([...prevState, e.target.value]))
    }
  }


  return (
    <div className="app">
      <Header />
      <h1 className="app__title">Airlines</h1>
      <div className="app__filterContainer">
        <h5 className="app__filterTitle">Filter by Alliances</h5>
        <div className="app__filters">
          <div className="app__filter">
            <input value="OW" name="Oneworld" onChange={handleChange} type="checkbox" />
            <label htmlFor="Oneworld">Oneworld</label>
          </div>
          <div className="app__filter">
            <input value="ST" name="Sky Team" onChange={handleChange} type="checkbox" />
            <label htmlFor="Sky Team">Sky Team</label>
          </div>
          <div className="app__filter">
            <input value="SA" name="Star Alliance" onChange={handleChange} type="checkbox" />
            <label htmlFor="Star Alliance">Star Alliance</label>
          </div>
        </div>
      </div>
      <div className="app__content">
        <div className="app__grid">
          {data?.map((airlineData) => {
            if (checkedValues.length === 0){
              return (<Card key={uuid()} airlineData={airlineData} />)
            }else{
              if(checkedValues.includes(airlineData.alliance)){
                return (<Card key={uuid()} airlineData={airlineData} />)
              }
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;