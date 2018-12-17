import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  
  constructor() {
    super()
    this.state = {
      allBots: [],
      allFilteredBots: [],
      armyBots: [],
        health: '',
        damage: '',
        armor: ''

    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(data => this.setState({ 
        allBots: data, 
        allFilteredBots: data
      }))
  }

  findBotByID = (botID, array) => {  
    return array.find((bot) => bot.id === botID)
  }

  toggleBot = (botID) => {
    const alreadyInArmy = !!this.findBotByID(botID, this.state.armyBots)

    if (alreadyInArmy) {
      this.setState({ 
        armyBots: this.state.armyBots.filter((bot) =>
            bot !== this.findBotByID(botID, this.state.armyBots))
      })
    } else {
      this.setState({
        armyBots: [...this.state.armyBots, this.findBotByID(botID, this.state.allBots)]
      })
    }    
  }
  
  classChange = (e) => {
    const robotClass = e.target.value
    if (!!robotClass) {
      this.setState ({ 
        allFilteredBots: this.state.allBots.filter((item) => item.bot_class===robotClass) 
      })
    } else {
      this.setState ({
        allFilteredBots: this.state.allBots
      })
    }
  }

  // findMinStat = (stat) => {
  //   const sortedBots = this.state.allBots.sort((a,b) => {
  //     return a[stat]-b[stat]
  //   })
  //   return sortedBots[0][stat]
  // }
  // placeholder = { this.findMinStat('health') } 

  handleFormChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  statsFilter = (e) => {
    e.preventDefault()
    console.log(e.target)
    // this.state.allFilteredBots.filter
  }

  render() {
    return (
      <div>
        <form>
          <label>Filter Bots: </label>
          <select onChange={this.classChange} >
            <option value="" >All Classes</option>
            <option value="Assault" >Assault</option>
            <option value="Defender" >Defender</option>
            <option value="Support" >Support</option>
          </select>
        </form>
        <form onSubmit={this.statsFilter} >
          <label> Minimum stats: </label>
          <i className="icon large circular red heartbeat" />
          <input size='3' name='health' value={this.state.health} onChange={this.handleFormChange} />
          <i className="icon large circular yellow lightning" />
          <input size='3' name='damage' value={this.state.damage} onChange={this.handleFormChange} />
          <i className="icon large circular blue shield" />
          <input size='3' name='armor' value={this.state.armor} onChange={this.handleFormChange} />
          <button>Submit</button>
        </form>
        <YourBotArmy toggleBot={this.toggleBot} bots = {this.state.armyBots} />
        <BotCollection toggleBot={this.toggleBot} bots = {this.state.allFilteredBots} />
      </div>
    );
  }

}

export default BotsPage;
