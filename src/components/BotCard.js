import React from "react";

class BotCard extends React.Component {

  handleClick = () => {
    // shows bot specs (BotCollection) or removes from army (YourBotArmy)
    let botID = this.props.bot.id
    this.props.handleClick(botID)
  }

  render(){
    return (
      <div className="ui column">
        <div
          className="ui card"
          key={this.props.bot.id}
          onClick={() => this.handleClick()}
        >
          <div className="image">
            <img alt="oh no!" src={this.props.bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {this.props.bot.name}
            </div>

            <div className="meta text-wrap">
              <small>{this.props.bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {this.props.bot.health}
            </span>

            <span>
              <i className="icon lightning" />
              {this.props.bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {this.props.bot.armor}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default BotCard;
