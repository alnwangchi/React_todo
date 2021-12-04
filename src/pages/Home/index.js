import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from '../../global/constants';

import Form from "./components/Form";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]); // state 改變 react 就會重新選渲染，底下兩個元件共用此狀態
  const submitState = useRef(false) // 一個標準值 不會影響渲染

  async function fetchData(setData) { // 包裝 fetch 回來的 Promise 物件
    const res = await fetch(API_GET_DATA) // await 就是等這步完成
    const {data} = await res.json() // 解構只拿 data 
    setData(data)
  }

  async function fetchAddData(data) {
    await fetch(API_GET_DATA, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data }) // 送出 data 到我的 db.json
    }) 
  }

  useEffect(() => {
    if(!submitState.current) return

    fetchAddData(data)
      .then(() => {
        submitState.current = false
      })
  }, [data]) // 當我在 form 中 click 新增時資料發生變動就會執行
  
  useEffect(() => { // reload都會先執行一次
    fetchData(setData);
  }, []) // 這邊如果綁 data 的話會無限執行

  // window.addEventListener('keydown',function(e) {
  //   console.log(e.which);
  // })
  // 不明白這邊為何會執行 4 次然後 which 跟 keyCode 被棄用

 



  return <div className="app">
    <Form addData={setData} name="Allen" submitState={submitState} />
    <List data={data} deleteData={setData} submitState={submitState}/>
  </div>
};

export default Home;

/* 純 fetch 寫法
fetch(API_GET_DATA)
.then(res => res.json())
.then((data) => {
  console.log(data);
})
*/

/*
useEffect(() => { // reload都會先執行一次
  // 綁定的內容寫在這
  return () => {
    // 取消綁定的內容寫在這
  }
},[data])
*/