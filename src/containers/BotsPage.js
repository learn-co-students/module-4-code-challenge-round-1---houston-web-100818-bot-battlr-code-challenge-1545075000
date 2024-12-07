import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {

  state = {
    bots: [],
    armyBots: [],
    showBots: true,
    currentBot: null
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({bots}))
  }

  componentDidMount() {
    this.fetchBots()
  }

  addToArmy = (botID) => {
    if (!this.state.armyBots.find(bot => bot.id === botID)) {
      let newArmyBot = this.state.bots.find(bot => bot.id === botID)
      this.setState({ armyBots: [...this.state.armyBots, newArmyBot] })
    }
  }

  removeFromArmy = (botID) => {
    let newArmyBots = this.state.armyBots.filter(bot => bot.id !== botID)
    this.setState({ armyBots: newArmyBots})
  }

  showBotSpecs = (botID) => {
    let bot = this.state.bots.find(bot => bot.id === botID)
    this.setState({
      showBots: false,
      currentBot: bot})
  }

  showBotCollection = () => {
    this.setState({showBots: true})
  }

  render() {
    return (
      <div>
        < YourBotArmy bots={this.state.armyBots} removeFromArmy={this.removeFromArmy}/>
        {this.state.showBots ?
        < BotCollection bots={this.state.bots} showSpecs={this.showBotSpecs} />
        : < BotSpecs bot={this.state.currentBot} addToArmy={this.addToArmy} goBack={this.showBotCollection} />
        }
      </div>
    );
  }
}

export default BotsPage;
