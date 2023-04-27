import React from 'react';
import Speech from 'react-speech';

export default class Responses extends React.Component {
  render() {
    return (
      <div>
        <div className="row items">
          <div className="col-md-3 option-2 yes">
            <Speech
              text="Yes."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 no">
            <Speech
              text="No."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 please">
            <Speech
              text="Please."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 thank">
            <Speech
              text="Thank you."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>
        </div>

        <div className="row items">
          <div className="col-md-3 option-2 how-are-you">
            <Speech
              text="How are you?"
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 good">
            <Speech
              text="I am good."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 okay">
            <Speech
              text="I am okay."
              voice="Google Uk English Male"
              pitch="0.7"
              volume="2"
            />
          </div>

          <div className="col-md-3 option-2 not-great">
            <Speech
              text="I am not great."
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
