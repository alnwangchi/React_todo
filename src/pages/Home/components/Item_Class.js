class Item extends React.Component {
  deleteItem() {
    submitState.current = true;
    deleteData((prevData) => {
      return prevData.filter((item)=> {
        return item.id !== id
      })
    })
  }
  render() {
    return (
      <div className="item">
        <div>
          <p>{this.props.note}</p>
          <p>{`${this.props.date} and ${this.props.time}`}</p>
        </div>
        <button className="remove" onClick={this.deleteItem()}>Remove</button>
      </div>
    )
  }
}





// const Item = ({id, note, date, time, deleteData, submitState}) 