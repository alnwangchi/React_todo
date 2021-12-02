const Item = ({id, note, date, time, deleteData}) => {

  const deleteItem = () => {
    deleteData((prevData) => {
      const aa = prevData.filter((item)=> {
        console.log(item.id, id);
        return item.id !== id
      })
      console.log(aa);
      return aa
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