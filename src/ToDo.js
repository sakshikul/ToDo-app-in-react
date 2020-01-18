import React from "react";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
  }
  AddList = event => {
    this.setState({
      text: event.target.value
    });
  };
  submitHandle = event => {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    this.setState({
      items: this.state.items.concat(this.state.text),
      text: ""
    });
  };
  render() {
    return (
      <div>
        
        <form onSubmit={this.submitHandle}>
          <label>
            To Do App List
            <br />
            <br />
            <input
              placeholder={this.state.text}
              value={this.state.text}
              onChange={this.AddList}
            ></input>
          </label>
        </form>
        <ul>
          {this.state.items.map(item => (
            <li key={item }>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;
