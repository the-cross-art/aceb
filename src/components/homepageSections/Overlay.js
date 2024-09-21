

import React from 'react';
import "./homepage.css"
class FlamelabConversationWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWidget: true // Set to false to hide the widget by default
    };
  }

  handleCloseWidget = () => {
    this.setState({ showWidget: false });
  };

  render() {
    const { showWidget } = this.state;

    return (
      <>
        {showWidget && (
          <div id="flamelab-convo-widget" className="flamelab-cw-widget">
            <img src="https://flamelab.io/img/avatar-sm.png" alt="Avatar Image" />
            <div className="flamelab-cw-msg-box">
              <span>Hey! have any query?<br/>Feel free to ask..</span>
              <div className="flamelab-cw-buttons">
                <a
                  href="/contactus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flamelab-cw-button flamelab-cw-button-yes"
                >
                  Ask Now
                </a>
                <div className="flamelab-cw-button flamelab-cw-button-no" onClick={this.handleCloseWidget}>
                  Later
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default FlamelabConversationWidget;
