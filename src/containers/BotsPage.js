import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const botsUrl = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      add: []
    };
  }

  addedToArmy = armyId => {
    console.log(armyId);
    if (this.state.bots.find(bot => bot.id === armyId)) {
      this.setState(state => {
        let bot = this.state.bots.find(bot => bot.id === armyId);
        console.log(bot);
        state.add.push(bot);
        return state;
      });
    }
  };

  removeFromArmy = armyId => {
    if (this.state.bots.find(bot => bot.id === armyId)) {
      this.setState(state => {
        // let array = this.state.add;
        // let index = array.findIndex(bot => bot.id === armyId);
        // array.splice(index, 1);

        state.add = state.add.filter(bot => bot.id !== armyId);
        return state;
      });
    }
  };

  componentDidMount() {
    fetch(botsUrl)
      .then(resp => resp.json())
      .then(bots =>
        this.setState({
          bots: bots
        })
      );
  }

  render() {
    return (
      <div>
        <YourBotArmy
          add={this.state.add}
          removeFromArmy={this.removeFromArmy}
        />
        <BotCollection bots={this.state.bots} addedToArmy={this.addedToArmy} />
      </div>
    );
  }
}

export default BotsPage;
