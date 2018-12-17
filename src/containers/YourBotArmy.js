import React from "react";
import BotCard from "../components/BotCard";
import BotCollection from '../containers/BotCollection'

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    let inArmy = this.props.bots.filter(bot => bot.inArmy === true)

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {inArmy.map(bot =>
              <BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick} />
            )}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
