import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from './YourBotArmy'

class BotCollection extends React.Component {
	//your code here



	render() {
		let notInArmy = this.props.bots.filter(bot => bot.inArmy !== true)
		console.log(notInArmy)
		return (
			<div className="ui four column grid">
				<div className="row">
					{notInArmy.map(bot =>
						<BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick} />,

					)}
				</div>

			</div>
		);
	}

};

export default BotCollection;
