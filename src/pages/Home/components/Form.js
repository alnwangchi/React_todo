import { useState } from "react";
import { v4 } from "uuid"; // 產生唯一值的 lib

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
      console.log('Enter!');
      addItem()
    }
  }

  return (
    <div>
      <h1>Allen TODO</h1>
      <p>事項:</p>
      <input type="text" value={note} onChange={noteTyping} onKeyDown={(e) => enterAdd(e) }/>
      <div className="input_time">
        <span>日期</span>
        <input type="date" value={date} onChange={dateTyping} />
        <span>時間:</span>
        <input type="time" value={time} onChange={timeTyping} />
      </div>


      <button className="add" onClick={addItem} onKeyPress={() => console.log("Hi")}>
        新增
      </button>
    </div>
  );
};

export default Form;