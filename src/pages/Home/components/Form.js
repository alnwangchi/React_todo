import { useState } from "react";
import { v4 } from "uuid"; // 產生唯一值的 lib

const Form = ({addData}) => {

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

  return (
    <div>
      <h1>Allen TODO</h1>
      <p>事項:</p>
      <input type="text" value={note} onChange={noteTyping}
      />
      <p>日期</p>
      <input type="date" value={date} onChange={dateTyping} />
      <p>時間:</p>
      <input type="time" value={time} onChange={timeTyping} />

      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};

export default Form;