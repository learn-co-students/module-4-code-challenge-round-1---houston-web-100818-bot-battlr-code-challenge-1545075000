import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";


class BotsPage extends React.Component {

  state = {
    bots: [],
    armyBots: []
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({bots}))
  }

  componentDidMount() {
    this.fetchBots()
  }

  toggleBot = (botID) => {
    if (!this.state.armyBots.find(bot => bot.id === botID)) {
      let newArmyBot = this.state.bots.find(bot => bot.id === botID)
      this.setState({ armyBots: [...this.state.armyBots, newArmyBot] })
    }
    else {
      let newArmyBots = this.state.armyBots.filter(bot => bot.id !== botID)
      this.setState({ armyBots: newArmyBots})
    }
  }

  render() {
    return (
      <div>
        < YourBotArmy bots={this.state.armyBots} removeFromArmy={this.toggleBot}/>
        < BotCollection bots={this.state.bots} addToArmy={this.toggleBot} />
      </div>
    );
  }

}

export default BotsPage;
