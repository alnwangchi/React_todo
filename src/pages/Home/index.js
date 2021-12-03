import { useState, useEffect } from "react";
import { API_GET_DATA } from '../../global/constants';

import Form from "./components/Form";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]); // state 改變 react 就會重新選渲染，底下兩個元件共用此狀態

  //
  async function fetchData() { // 包裝 fetch 回來的 Promise 物件
    const res = await fetch(API_GET_DATA)
    const data = await res.json()
    console.log(data);
  }
  
  useEffect(() => { // reload都會先執行一次
    fetch(API_GET_DATA)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    })
  },[data])

  /*
  useEffect(() => { // reload都會先執行一次
    // 綁定的內容寫在這
    return () => {
      // 取消綁定的內容寫在這
    }
  },[data])
  */

  return <div className="app">
    <Form addData={setData} name="Allen" />
    <List data={data} deleteData={setData}/>
  </div>
};

export default Home;
