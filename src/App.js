import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
 class App extends React.Component{
     constructor(props){
        super(props);
        this.state={items:["Watch Something","Read a Book","Listen to a song"]};
        this.addItems=this.addItems.bind(this);
        this.deleteItems=this.deleteItems.bind(this);
     }
     addItems(item){
         this.setState({items:this.state.items.concat(item)});
        
     }
     deleteItems(id){
         let idx=+id;
        this.setState({items:this.state.items.filter((item,index)=>idx!==index)});
        
     }
     render(){
         return(
         <div>
             <h1>Todo</h1>
             <TodoForm add={this.addItems}/>
             <TodoList items={this.state.items} function={this.deleteItems}/>
         </div>
         );
 }
 }

 

 

 export default App;