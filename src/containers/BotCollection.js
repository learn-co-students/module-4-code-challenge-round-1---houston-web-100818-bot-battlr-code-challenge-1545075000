import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => {
            return (
              <BotCard
                bot={bot}
                toggleArmy={this.props.toggleArmy}
                displayBot={this.props.displayBot}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;
