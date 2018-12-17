import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'
import BotSpecs from '../components/BotSpecs.js'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    myBots: [],
    selectedBot: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => this.setState({allBots: data}))
  }

  addBot = (bot) => {
    if (this.state.myBots.includes(bot)) {
      return null
    } else {
    this.setState(state => {
      state.myBots.push(bot)
      return state
    })}
  }

  clearSelected = () => {this.setState(state => {
    state.selectedBot = []
    return state
    })
  }


  viewSpecs = (bot) => {
    this.clearSelected()
    this.setState(state => {
      state.selectedBot.push(bot)
      console.log(state.selectedBot)
      return state
    })
  }

  shouldSpecsRender = () => {
    if (this.state.selectedBot.length > 0) {
      return <BotSpecs addBot={this.addBot} selectedBot={this.state.selectedBot} clearSelected={this.clearSelected}/>
    } else {
      return <div></div>
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} viewSpecs={this.viewSpecs}/>
        {this.shouldSpecsRender()}
        <BotCollection botCol={this.state.allBots} viewSpecs={this.viewSpecs}/>
      </div>
    );
  }

}

export default BotsPage;
