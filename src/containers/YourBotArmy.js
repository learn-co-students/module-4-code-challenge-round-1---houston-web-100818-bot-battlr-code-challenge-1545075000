import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  listBots = (bots) => {
    return bots.map((bot) => {
      return <BotCard key={bot.id} bot={bot} handleClick={this.props.toggleEnlist} />;
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.listBots(this.props.bots)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
