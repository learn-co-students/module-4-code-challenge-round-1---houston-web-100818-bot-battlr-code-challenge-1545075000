import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {

  constructor(){
    super()
    this.state = {
      bots: [],
      botsArmy: [],
      selectedBot: null
    }
  }

  clickHandler = (bot) => {
    if(!this.state.botsArmy.includes(bot)){
      this.setState({ selectedBot: bot })
    }else{
      let changeBotArmy = [...this.state.botsArmy]
      let index = changeBotArmy.indexOf(bot)
      if(index !== -1){
        changeBotArmy.splice(index, 1)
        this.setState({ botsArmy: changeBotArmy })
        this.setState({ selectedBot: null })
      }
    }
  }

  removeSelectedBot = () => {
    this.setState({ selectedBot: null })
  }

  addBotToArmy = (bot) => {
    this.setState({ botsArmy: [...this.state.botsArmy, bot] })
    this.setState({ selectedBot: null })
  }

  showHandler = () =>{
    if(this.state.selectedBot){
      return <BotSpecs clickHandler={this.clickHandler} removeSelectedBot={this.removeSelectedBot} addBotToArmy={this.addBotToArmy} bot={this.state.selectedBot} />
    }else{
      return <BotCollection clickHandler={this.clickHandler} bots={this.state.bots} />
    }
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => {
      console.log(bots)
      this.setState({ bots: bots })})
  }

  componentDidMount(){
    this.fetchBots()
  }

  render() {
    return (
      <div>
        <YourBotArmy clickHandler={this.clickHandler} bots={this.state.botsArmy}/>
        {this.showHandler()}
      </div>
    );
  }

}

export default BotsPage;
