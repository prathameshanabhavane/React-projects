import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }


  render() {
      const totalCount = this.state.todos.length;
    return (
      <div className="App">
          <h1>To Do List {totalCount}</h1>
          {this.state.todos.map((todo, key) => 
            <div className="todo-grid" key={key}>
              <h2> {todo.title} </h2>
              <h6> { todo.completed && 
                  <span className="completed">
                    Completed
                  </span>
                }
                { !todo.completed &&
                  <span className="pending">
                    Pending
                  </span>
                } 
              </h6>
            </div>
          )}
      </div>
    );
  }
}

export default App;
