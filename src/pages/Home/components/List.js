import Item from "./Item";

const List = ({ data, deleteData, submitState}) => {
  // console.log(data);

  return (
    <div className="list">
      {data.map((item) => {
        const { note, date, time, id } = item;
        return <Item key={id} id={id} note={note} date={date} time={time} deleteData={deleteData} submitState={submitState} />;
      })}
    </div>
  );
};

export default List;
