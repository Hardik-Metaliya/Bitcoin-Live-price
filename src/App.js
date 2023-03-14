import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./cards/Card";
import "./../src/styles.css";
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
function App() {
  const [data, setdata] = useState("");
  const fetchdata = async () => {
    try {
      const res = await axios(url);
      const data = await res.data;
      setdata(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  if (!data) {
    return <div>loading....</div>;
  } else {
    const { time } = data;
    const { USD, GBP, EUR } = data.bpi;
    return (
      <div>
        <p className="disclamer">{data.disclaimer}</p>
        <h1>{data.chartName}</h1>
        <h2>Last Update: {time.updated}</h2>
        <div className="card-container">
          <Card currency={USD} sym={"$"} />
          <Card currency={GBP} sym={"£"} />
          <Card currency={EUR} sym={"€"} />
        </div>
      </div>
    );
  }
}

export default App;
