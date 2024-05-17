import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  
  constructor() {
    super()
    this.state = {
      bots: []
    }
  }

  toggleEnlist = (bot) => {
    this.setState(state => {
      bot = state.bots.find(foundBot => {
        return foundBot === bot
      })
      bot.inArmy = !bot.inArmy 
      return state
    })
  }

  availableBots = () => {
    return this.state.bots.filter(bot => {
      return !bot.inArmy
    })
  }

  armyBots = () => {
    return this.state.bots.filter(bot => {
      return bot.inArmy
    })
  }

  fetchRobots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(result => {
      let bots = result
      // add inArmy attribute to each bot
      bots.forEach(bot => {
        bot.inArmy = false
      })
      this.setState({
        bots: bots
      })
    })
  }

  sortBots = (category) => {
    this.setState(state => {
      state.bots.sort((a, b) => {
        return b[category] - a[category]
      })
      return state
    })
	}

  componentDidMount() {
    this.fetchRobots()
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.armyBots()} toggleEnlist={this.toggleEnlist} />
        <BotCollection bots={this.availableBots()} toggleEnlist={this.toggleEnlist} sortBots={this.sortBots} />
      </div>
    );
  }

}

export default BotsPage;
