import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.addItems=this.addItems.bind(this);
        
    }
    addItems(){
        let todo=document.getElementById("todos").value;
        console.log("item Added",todo);
        this.props.add(todo);

    }
    render(){
    return(
        <div className="form-group" >
       <input type="text" id="todos" ></input>
       <button className="btn btn-primary" onClick={()=>this.addItems()}>Add</button>
       </div>
   )
    }
}
export default TodoForm;