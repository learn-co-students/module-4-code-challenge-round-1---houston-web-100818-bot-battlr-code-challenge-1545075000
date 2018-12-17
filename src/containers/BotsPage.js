import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
let toggleShow = false;

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      bots: [],
    }
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then((bots) => {
        this.setState({ bots: bots })

      })
  }

  addBotToArmy = (botId) => {
    this.setState((state) => {
      let bot = state.bots.find(bot => bot.id === botId)
      bot.inArmy = !bot.inArmy
      return state;
    })

  }

  handleClick = (bot) => {
    let botId = bot.id
    this.addBotToArmy(botId)
    console.log(botId)

  }

  componentWillMount() {
    this.fetchBots()
  }

  render() {
    return (
      <div>
        {<YourBotArmy bots={this.state.bots} addBotToArmy={this.addBotToArmy} handleClick={this.handleClick} />}
        {toggleShow ? <BotSpecs bots={this.state.bots} /> :
          <BotCollection bots={this.state.bots} addBotToArmy={this.addBotToArmy} handleClick={this.handleClick} />}
      </div>
    );
  }

}

export default BotsPage;
