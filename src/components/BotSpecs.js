import React from "react";

const BotSpecs = props => {
  console.log(props)

  let botType;

  switch (props.selectedBot.bot_class) {
    case "Assault":
      botType = <i className="icon large circular military" />;
      break;
    case "Defender":
      botType = <i className="icon large circular shield" />;
      break;
    case "Support":
      botType = <i className="icon large circular ambulance" />;
      break;
    default:
      botType = <div />;
  }
 
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={props.selectedBot[0].avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {props.selectedBot[0].name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {props.selectedBot[0].catchphrase}
            </p>
            <strong>
              Class: {props.selectedBot[0].bot_class} {botType}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{props.selectedBot[0].health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{props.selectedBot[0].damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{props.selectedBot[0].armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() =>
                props.clearSelected()
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={(e) =>
                props.addBot(props.selectedBot[0])
              }
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
