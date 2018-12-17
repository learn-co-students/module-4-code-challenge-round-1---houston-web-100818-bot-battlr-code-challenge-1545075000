import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here
	constructor() {
		super()
		this.state = {
			shouldShow: false,
			showBot: ''
		}
	}

	showAllBots = () => {
		this.setState({
			shouldShow: false,
			showBot: ''
		})
	}

	showSpecs = (botID) => {	
		this.setState({ 
			shouldShow: true, 
			showBot: this.props.bots.find((bot)=>bot.id===botID)
		})

	}	

  render(){
		let renderThis = ''

		if (this.state.shouldShow) {
			renderThis = <BotSpecs bot={this.state.showBot} showAllBots={this.showAllBots} enlistBot = {this.props.toggleBot} />
			
		} else {
			renderThis = this.props.bots.map((bot) => <BotCard toggleBot={this.showSpecs} key={bot.id} bot={bot}/>)
		}
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
					{/* Collection of all bots */}
					{renderThis}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
