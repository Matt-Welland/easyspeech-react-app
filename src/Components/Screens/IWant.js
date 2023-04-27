import React from 'react';
import Speech from 'react-speech';

export default class IWant extends React.Component {
  render() {
    return (
      <div>
        <div className="row items">
          <div className="col-md-3 option-2 food">
            <Speech
              text="I would like food."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 drink">
            <Speech
              text="I would like a drink."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 tea">
            <Speech
              text="I would like tea."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 coffee">
            <Speech
              text="I would like coffee."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>
        </div>

        <div className="row items">
          <div className="col-md-3 option-2 bathroom">
            <Speech
              text="I would like to use the bathroom"
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 sit">
            <Speech
              text="I would like to sit."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 stand">
            <Speech
              text="I would like to stand."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 bed">
            <Speech
              text="I would like to go to bed."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>
        </div>
      </div>
    );
  }
}
