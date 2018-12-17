import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      yourArmy: [],
      displayBot: false,
      currentBot: ""
    };
  }

  fetchBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(response => {
        return response.json();
      })
      .then(bots => {
        this.setState(state => {
          state.bots = bots;
          return state;
        });
      });
  };
  componentDidMount = () => {
    this.fetchBots();
  };

  bots = () => {
    let allBots = this.state.bots;
    // let armyBots = this.state.yourArmy;

    // this.state.bots.forEach(bot => {
    //   if (!armyBots.includes(bot)) {
    //     allBots.push(bot);
    //   }
    // });

    return allBots;
  };

  toggleArmy = botID => {
    let foundBot = this.state.bots.find(bot => bot.id === botID);

    if (this.state.yourArmy.includes(foundBot)) {
      this.setState(state => {
        state.yourArmy.splice(state.yourArmy.indexOf(foundBot), 1);
        return state;
      });
    } else {
      this.setState(state => {
        state.yourArmy.push(foundBot);
        return state;
      });
    }
  };

  displayBot = botID => {
    let foundBot = this.state.bots.find(bot => bot.id === botID);
    this.setState(state => {
      state.currentBot = foundBot;
      return state;
    });
  };

  quitDisplay = () => {
    this.setState(state => {
      state.currentBot = "";
      return state;
    });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.yourArmy}
          toggleArmy={this.toggleArmy}
          displayBot={this.displayBot}
        />
        {this.state.currentBot ? (
          <BotSpecs
            bot={this.state.currentBot}
            toggleArmy={this.toggleArmy}
            quitDisplay={this.quitDisplay}
            currentArmy={this.state.yourArmy}
          />
        ) : (
          <BotCollection bots={this.bots()} displayBot={this.displayBot} />
        )}
      </div>
    );
  }
}

export default BotsPage;
