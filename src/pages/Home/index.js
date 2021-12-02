import { useState } from "react";

import Form from "./components/Form";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]); // state 改變 react 就會重新選渲染，底下兩個元件共用此狀態

  return <div className="app">
    <Form addData={setData} name="Allen" />
    <List data={data} deleteData={setData}/>
  </div>
};

export default Home;
