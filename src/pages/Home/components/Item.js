const Item = ({id, note, date, time, deleteData, submitState}) => {

  const deleteItem = () => {
    submitState.current = true;
    deleteData((prevData) => {
      return prevData.filter((item)=> {
        return item.id !== id
      })
    })
  }
  return <div className="item">
    <div>
      <p>{note}</p>
      <p>{`${date}${time}`}</p>
    </div>
    <button className="remove" onClick={deleteItem}>Remove</button>
  </div>
}

export default Item