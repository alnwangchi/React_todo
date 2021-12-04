import React from 'react'; // 提供方法
import ReactDOM from 'react-dom'; // 以此 render 頁面
import './index.css';
import Home from './pages/Home' // 引入時後檔名為 index 時不需寫出來



ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

