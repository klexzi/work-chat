import React, { Component } from "react";

import "./ConversationInput.scss";
class ConversationInput extends Component {
  state = {
    row: 1,
    value: "",
    maxRows: 5,
    singleLine: true,
    overflowY: "hidden"
  };
  onChange = e => {
    let scrollHeight = e.target.scrollHeight;
    let value = e.target.value.trimLeft();
    this.setState(prevState => {
      let newRow = ~~(scrollHeight / 28);
      let newState = {
        row: newRow > prevState.maxRows ? prevState.maxRows : newRow,
        value,
        singleLine: newRow > 1 ? false : true,
        overflowY: newRow > prevState.maxRows ? "scroll" : "hidden"
      };
      return newState;
    });
  };
  sendMessage = e => {
    if (e.key === "Enter" && !e.shiftKey && this.state.value.length > 0) {
      return setTimeout(() => {
        console.log(this.state.value);
        this.setState({ value: "", row: 1 });
      });
    }
  };
  render() {
    return (
      <form>
        <textarea
          {...this.props.input}
          type="text"
          value={this.state.value}
          style={{ overflowY: this.state.overflowY }}
          rows={this.state.row}
          onChange={this.onChange}
          onKeyDown={this.sendMessage}
          className="conversation-input w-100 text-wrap"
          placeholder="Type a message..."
        />
      </form>
    );
  }
}

export default ConversationInput;
