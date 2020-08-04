import React from "react";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.delete=this.delete.bind(this);
  }
delete(e){
    let idx=e.target.id;
    this.props.function(idx);

}
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">Task</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
              {this.props.items.map((item,index)=>{
                  return(
                      <tr>
                          <td>{index+1}</td>
                          <td>{item}</td>
                          <td><button className="btn btn-outline-danger" id={index} onClick={(e)=>this.delete(e)}>Delete</button></td>
                      </tr>
                  )
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TodoList;
