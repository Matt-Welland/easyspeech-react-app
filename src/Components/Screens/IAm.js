import React from 'react';
import Speech from 'react-speech';

export default class IAm extends React.Component {
  render() {
    return (
      <div>
        <div className="row items">
          <div className="col-md-3 option-2 hungry">
            <Speech
              text="I am hungry."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 thirsty">
            <Speech
              text="I am thirsty."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 hot">
            <Speech
              text="I am too hot."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 cold">
            <Speech
              text="I am too cold."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>
        </div>

        <div className="row items">
          <div className="col-md-3 option-2 uncomfy">
            <Speech
              text="I am uncomfortable"
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 tired">
            <Speech
              text="I am tired."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 pain">
            <Speech
              text="I am in pain."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 bored">
            <Speech
              text="I am bored."
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
