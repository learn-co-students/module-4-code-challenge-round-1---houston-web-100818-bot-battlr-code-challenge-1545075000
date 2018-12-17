import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          <h1>Collection of all bots</h1>
    		  {this.props.bots.map(bot => <BotCard clickHandler={this.props.clickHandler} bot={bot} />)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
