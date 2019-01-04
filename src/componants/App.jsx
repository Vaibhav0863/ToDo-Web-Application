import React, { Component } from "react";

class App extends Component {
  state = {
    itemValue: this.props.value
  };
  render() {
    return (
      <li className="m-2 border border-dark list-group-item-info list-group-item d-flex justify-content-between align-items-center">
        <span style={{ fontSize: 18 }} className="badge badge-primary">
          {this.state.itemValue}
        </span>
        <span>
          <button
            className="btn btn-danger btn-sm"
            onClick={() =>
              this.props.delElement(this.props.list, this.props.id)
            }
          >
            <strong>CLEAR</strong>
          </button>
        </span>
      </li>
    );
  }
}

export default App;
