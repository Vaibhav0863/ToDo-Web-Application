import React, { Component } from "react";
import App from "./App";

class Main extends Component {
  state = {
    list: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        <button
          onClick={() => this.resetElements()}
          className="btn btn-info m-4"
        >
          RESET
        </button>
        {this.state.list.map(list => (
          <App
            key={list.id}
            list={list}
            onInc={this.incrementElement}
            onDec={this.decrementElement}
            onDelete={this.deleteElement}
          />
        ))}
      </div>
    );
  }

  incrementElement = list => {
    const lis = [...this.state.list];
    const id = lis.indexOf(list);
    lis[id].value++;
    this.setState({ lis });
  };

  decrementElement = list => {
    const lis = [...this.state.list];
    const id = lis.indexOf(list);
    lis[id].value--;
    this.setState({ lis });
  };

  deleteElement = elementId => {
    let list = this.state.list.filter(c => c.id != elementId);
    this.setState({ list });
  };

  resetElements = () => {
    const lis = this.state.list.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ lis });
  };
}

export default Main;
