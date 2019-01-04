import React, { Component } from "react";
import App from "./App"; //This import App.jsx from componants from which we can use App class 
import "../todo.css";

class Todo extends Component {
  state = {
    items: [] //This is used to store list of array in which list contain {id,task}
  };
  render() {
    return (
      <div className="todo-app">
        <h1>
          <strong>TODO</strong>
        </h1>
        <form className="form-inline todo-input m-4" onSubmit={this.addItem}>
          <input
            className="form-control form-input"
            type="text"
            ref={a => (this.element = a)}  //It is used to fetch text from Inpute field
            placeholder="ENTER TASK"
          />

          <button className="add-btn btn btn-primary ">
            <strong>ADD</strong>
          </button>

          <div className="container">
            <ul className="list-group container m-3">
              {this.state.items.length !== 0 &&
                this.state.items.map(item => (
                  <App
                    key={item.id}
                    id={item.id}
                    list={item}
                    value={item.value}
                    delElement={this.deleteElement}
                  >
                    {item.value}
                  </App>
                ))}
            </ul>
          </div>
        </form>
      </div>
    );
  }

  addItem = event => {
    event.preventDefault();
    let newItem = {
      id: Date.now(),
      value: this.element.value
    };
    let { items } = this.state;
    if (this.element.value !== "") {
      console.log(items[this.state.items.indexOf(newItem)]);
      this.setState({ item: this.state.items.push(newItem) });
    }
    this.element.value = "";
  };

  deleteElement = list => {
    delete this.state.items[this.state.items.indexOf(list)];

    this.setState(this.state.items);
  };
}

export default Todo;
