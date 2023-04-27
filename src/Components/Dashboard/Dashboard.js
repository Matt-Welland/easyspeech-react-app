import React from 'react';
import Speech from 'react-speech';
import IAm from '../Screens/IAm';
import IWant from '../Screens/IWant.js';
import Responses from '../Screens/Responses';
import Phrases from '../Screens/Phrases';

export default class Dashboard extends React.Component {
  // Begin on the dashboard.
  constructor(props) {
    super(props);
    this.state = {
      page: 'Dashboard',
      custom: [],
    };
  }

  // On submit of form, prevent default browser interaction
  preventDefault = (event) => {
    event.preventDefault();
    this.setState({
      custom: [this.state.custom],
    });
  };

  // Get input field value and set a state
  onChange = (event) => {
    this.setState({
      custom: event.target.value,
    });
  };

  // Homepage
  switchHome = () => {
    this.setState({
      page: 'Dashboard',
    });
  };

  // Switch screens to "I am"
  switchIAm = () => {
    this.setState({
      page: 'I am',
    });
  };

  // Switch screens to "I want"
  switchIWant = () => {
    this.setState({
      page: 'I want',
    });
  };

  // Switch screens to responses
  switchResponses = () => {
    this.setState({
      page: 'Responses',
    });
  };

  // Switch screens to phrases
  switchPhrases = () => {
    this.setState({
      page: 'Phrases',
    });
  };

  render() {
    if (this.state.page === 'Dashboard') {
      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col-md-3">
              <button className="option" onClick={this.switchIAm}>
                I am
              </button>
            </div>

            <div className="col-md-3">
              <button className="option" onClick={this.switchIWant}>
                I want
              </button>
            </div>

            <div className="col-md-3">
              <button className="option" onClick={this.switchPhrases}>
                Phrases
              </button>
            </div>

            <div className="col-md-3">
              <button className="option" onClick={this.switchResponses}>
                Responses
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 help-please">
              <Speech
                text="Help."
                voice="Google UK English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <form className="custom-speech" onSubmit={this.preventDefault}>
                <div className="inner-content">
                  <h1>Alternatively, say something else...</h1>
                  <input value={this.state.term} onChange={this.onChange} />
                  <Speech
                    text={this.state.custom}
                    voice="Google UK English Male"
                    pitch="0.7"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 'I am') {
      return (
        <div className="dashboard container">
          <h5 class="title">I am...</h5>
          <p className="back option" onClick={this.switchHome}>
            Back
          </p>
          <IAm />

          <div className="row">
            <div className="col-md-12">
              <form className="custom-speech" onSubmit={this.preventDefault}>
                <div className="inner-content">
                  <h1>Alternatively, say something else...</h1>
                  <input value={this.state.term} onChange={this.onChange} />
                  <Speech
                    text={this.state.custom}
                    voice="Google UK English Male"
                    pitch="0.7"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 'I want') {
      return (
        <div className="dashboard container">
          <h5 class="title">I want...</h5>
          <p className="back option" onClick={this.switchHome}>
            Back
          </p>
          <IWant />

          <div className="row">
            <div className="col-md-12">
              <form className="custom-speech" onSubmit={this.preventDefault}>
                <div className="inner-content">
                  <h1>Alternatively, say something else...</h1>
                  <input value={this.state.term} onChange={this.onChange} />
                  <Speech
                    text={this.state.custom}
                    voice="Google UK English Male"
                    pitch="0.7"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 'Phrases') {
      return (
        <div className="dashboard container">
          <h5 class="title">Phrases...</h5>
          <p className="back option" onClick={this.switchHome}>
            Back
          </p>
          <Phrases />

          <div className="row">
            <div className="col-md-12">
              <form className="custom-speech" onSubmit={this.preventDefault}>
                <div className="inner-content">
                  <h1>Alternatively, say something else...</h1>
                  <input value={this.state.term} onChange={this.onChange} />
                  <Speech
                    text={this.state.custom}
                    voice="Google UK English Male"
                    pitch="0.7"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (this.state.page === 'Responses') {
      return (
        <div className="dashboard container">
          <h5 class="title">Responses...</h5>
          <p className="back option" onClick={this.switchHome}>
            Back
          </p>

          <Responses />

          <div className="row">
            <div className="col-md-12">
              <form className="custom-speech" onSubmit={this.preventDefault}>
                <div className="inner-content">
                  <h1>Alternatively, say something else...</h1>
                  <input value={this.state.term} onChange={this.onChange} />
                  <Speech
                    text={this.state.custom}
                    voice="Google UK English Male"
                    pitch="0.7"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="error">
          <p>View not found. Please contact Matt.</p>
        </div>
      );
    }
  }
}
