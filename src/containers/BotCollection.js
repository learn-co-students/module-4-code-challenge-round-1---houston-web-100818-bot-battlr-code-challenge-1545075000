import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    // console.log(this.props.bots)
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
            <BotCard bot={bot} key={bot.id} onClick={this.props.addedToArmy} />
          ))}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
