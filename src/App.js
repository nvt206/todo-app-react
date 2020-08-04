import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { title: "Go to market", isComplete: true },
        { title: "Go to school", isComplete: false },
        { title: "Go home" },
        { title: "Go Go" }
      ],
      hi: [1, 2, 3, 4, 5]
    };
  }

  onItemClicked(index) {
    return event => {
      this.setState(() => {
        return {
          todos: this.state.todos.map((todo, i) => {
            return i === index
              ? { ...todo, isComplete: !todo.isComplete }
              : { ...todo };
          })
        };
      });
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        {todos.length > 0
          ? todos.map((todo, index) => {
              return (
                <TodoItem
                  key={index}
                  todo={todo}
                  itemClick={this.onItemClicked(index)}
                />
              );
            })
          : "Nothing here"}
      </div>
    );
  }
}

export default App;
