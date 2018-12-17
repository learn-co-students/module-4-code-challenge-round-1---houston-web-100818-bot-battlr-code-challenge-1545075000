import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			selectedBot: null
		}
	}
	
	listBots = (bots) => {
		return bots.map((bot, index) => {
			return <BotCard key={index} bot={bot} toggleDisplay={this.toggleDisplay} />
		})
	}

	displayBot = (bot) => {
		return <BotSpecs bot={this.state.selectedBot} toggleEnlist={this.props.toggleEnlist} toggleDisplay={this.toggleDisplay} />;
	}

	toggleDisplay = (bot) => {
		this.setState({
			selectedBot: (bot === this.state.selectedBot) ? null : bot
		})
	}

	handleClick = (e) => {
		e.persist()
		this.props.sortBots(e.target.id)
		this.toggleDisplay(this.state.selectedBot)
	}

  render(){
  	return (
  	  <div className="ui four column grid">
				<button id="health" onClick={this.handleClick} className="ui button fluid" >Sort by Health</button>
				<button id="damage" onClick={this.handleClick} className="ui button fluid" >Sort By Damage</button>
				<button id="armor" onClick={this.handleClick} className="ui button fluid" >Sort By Armor</button>
    		<div className="row">
    		  {(this.state.selectedBot) ? this.displayBot(this.state.selectedBot) : this.listBots(this.props.bots)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
