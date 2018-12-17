import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  render(){
		let bots = this.props.botCol
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots.map( (bot, idx) => <BotCard key={idx} bot={bot} viewSpecs={this.props.viewSpecs}/>)}
    		  Collection of all bots
					{console.log(this.props.viewSpecs)}
    		</div>
  	  </div>
  	)
  }

};

export default BotCollection;
