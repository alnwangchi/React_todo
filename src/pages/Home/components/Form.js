import { useState } from "react";
import { v4 } from "uuid"; // 產生唯一值的 lib
import dayjs from "dayjs"

const Form = ({addData, submitState}) => {

  const [note, setNote] = useState("");
  const noteTyping = (e) => {
    setNote(e.target.value);
  };
  const [date, setDate] = useState("");
  const dateTyping = (e) => {
    setDate(e.target.value);
  };
  const [time, setTime] = useState("");
  const timeTyping = (e) => {
    setTime(e.target.value);
    console.log(e.target.value);
  };
  // console.log(note, date, time);
  // const [formData, setFormData] = useState({ note: "", time: "", date: "" });
  // const onChangeForm = (type, e) => {
  //   if (e.target.value === "") console.log("");
  //   formData.note = e.target.value;
  //   setFormData(newFormData);
  // };

  const addItem = () => {
    submitState.current = true;
    addData((prevData)=> {
      return [{
        id: v4(),
        note,
        date,
        time
        },
        ...prevData
      ]
    });
  };

  const enterAdd = (e) => {
    if (e.keyCode === 13) {
      addItem()
    }
  }
  // 自動取時功能按鈕
  const selectNow = () => {
    const nowDate = dayjs().format('YYYY-MM-DD') // 拿到當前日期
    const nowTime = dayjs().format('HH:mm') // 拿到當前時間
    setDate(nowDate)
    setTime(nowTime)
  }
  


  return (
    <div>
      <h1>Allen TODO</h1>
      <p>事項:</p>
      <input type="text" value={note} onChange={noteTyping} onKeyDown={enterAdd}/>
      <div className="input_time">
        <label>日期
          <input type="date" value={date} onChange={dateTyping} />
        </label>
        <label>時間:
          <input type="time" value={time} onChange={timeTyping} />
        </label>
        <button className="now_btn" onClick={selectNow}>JUST NOW</button>
      </div>


      <button className="add" onClick={addItem} onKeyPress={() => console.log("Hi")}>
        新增
      </button>
    </div>
  );
};

export default Form;