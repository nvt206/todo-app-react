import React, { Component } from 'react';
import './App.css'
import checkDone from './images/checkDone.svg'
import TodoItem from './components/TodoItem';
class App extends Component {
  constructor() {
    super();
    if(!localStorage.getItem('todos'))
      localStorage.setItem('todos',JSON.stringify([]));
    //bind
    this.onCheckAll = this.onCheckAll.bind(this);
    this.onEnterUp = this.onEnterUp.bind(this);
  }

  onItemClicked(index) {
    return (event) => {
      const data = JSON.parse(localStorage.getItem('todos'));
      data[index].isComplete = ! data[index].isComplete;
      localStorage.setItem('todos',JSON.stringify(data));
      this.setState({});
    }
  }
  onEnterUp(event){
    if(event.keyCode == 13)
    {
      const text = event.target.value;
      if(text.length){
        let data = JSON.parse(localStorage.getItem('todos'));
        console.log(data);
        data.push({title:text,isComplete:false});
        console.log(data)
        localStorage.setItem('todos',JSON.stringify(data));
        this.setState({});
        console.log(this.state)
        event.target.value="";
      }
    }
  }
  onCheckAll(){
    let data = JSON.parse(localStorage.getItem('todos'))
    data = data.map(item=>{return {...item,isComplete:true}});
    localStorage.setItem('todos',JSON.stringify(data));
    this.setState({});
  }
  onItemDelete(index){
    return (event)=>{
      const data = JSON.parse(localStorage.getItem('todos'));
      data.splice(index,1);
      localStorage.setItem('todos',JSON.stringify(data));
      this.setState({});
    }
  }

  render() {
    const todos= JSON.parse(localStorage.getItem("todos"));
    return (
      <div className="App">
        <h2>Todo App React</h2>
        <div className="todo-header">
          <img title="Selected all" src={checkDone} onClick={this.onCheckAll}/>
          <input className="todo-input" type="text" onKeyUp={this.onEnterUp} placeholder="Enter new work"/>
        </div>
        {
          todos.length > 0
            ? todos.map((todo, index) => {
              return <TodoItem
                key={index}
                todo={todo}
                checkboxClick={this.onItemClicked(index)}
                deleteClick ={this.onItemDelete(index)}
              />
            })
          : "Nothing here"}
      </div>
    );
  }
}

export default App;
