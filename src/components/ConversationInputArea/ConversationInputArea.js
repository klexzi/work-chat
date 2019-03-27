import React, { Component } from "react";

import ConversationInput from "../ConversationInput/ConversationInput";

export class ConversationInputArea extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="ml-1 row">
          <div className="col-11 py-2 rounded bg-white conversation-input-area shadow">
            <div className="container-fluid">
              <div className="row">
                <div className="col-1">
                  <i className="far fa-grin h3 mb-0 info-text" />
                </div>
                <div className="col-9">
                  <ConversationInput />
                </div>
                <div className="col-1 p-0 pt-1">
                  <i className="fas fa-paperclip info-text h4 mb-0" />
                </div>
                <div className="col-1 p-0 pt-1">
                  <i className="fas fa-camera info-text h4 mb-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConversationInputArea;
