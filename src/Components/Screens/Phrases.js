import React from 'react';
import Speech from 'react-speech';

export default class Phrases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'Home',
    };
  }

  switchWeShould = () => {
    this.setState({
      section: 'We Should',
    });
  };

  switchCanI = () => {
    this.setState({
      section: 'Can I',
    });
  };

  switchCanYou = () => {
    this.setState({
      section: 'Please',
    });
  };

  switchCanWe = () => {
    this.setState({
      section: 'Can We',
    });
  };

  switchLook = () => {
    this.setState({
      section: 'Look',
    });
  };

  switchHelp = () => {
    this.setState({
      section: 'Help',
    });
  };

  switchThisIs = () => {
    this.setState({
      section: 'This Is',
    });
  };

  switchImUsing = () => {
    this.setState({
      section: 'Im Using',
    });
  };

  switchGetReady = () => {
    this.setState({
      section: 'Get Ready',
    });
  };

  switchBookTaxi = () => {
    this.setState({
      section: 'Book Taxi',
    });
  };

  switchCallThem = () => {
    this.setState({
      section: 'Call Them',
    });
  };

  switchDrink = () => {
    this.setState({
      section: 'Drink',
    });
  };

  switchTea = () => {
    this.setState({
      section: 'Tea',
    });
  };

  switchCoffee = () => {
    this.setState({
      section: 'Coffee',
    });
  };

  switchFood = () => {
    this.setState({
      section: 'Food',
    });
  };

  switchOtherFood = () => {
    this.setState({
      section: 'Other Food',
    });
  };

  switchCanYou = () => {
    this.setState({
      section: 'Can You',
    });
  };

  switchLook = () => {
    this.setState({
      section: 'Look',
    });
  };

  switchHelp = () => {
    this.setState({
      section: 'Help',
    });
  };

  switchThisIs = () => {
    this.setState({
      section: 'This Is',
    });
  };

  switchImUsing = () => {
    this.setState({
      section: 'Im Using',
    });
  };

  render() {
    /*
     * Home Screen.
     *
     */

    if (this.state.section === 'Home') {
      return (
        <div>
          <div className="row items">
            <div className="col-md-3 option-2 please-switch">
              <button className="option" onClick={this.switchWeShould}>
                We should...
              </button>
            </div>

            <div className="col-md-3 option-2 can-i">
              <button className="option" onClick={this.switchCanI}>
                Can I...
              </button>
            </div>

            <div className="col-md-3 option-2 can-you">
              <button className="option" onClick={this.switchCanYou}>
                Can You...
              </button>
            </div>

            <div className="col-md-3 option-2 can-we">
              <button className="option" onClick={this.switchCanWe}>
                Can We...
              </button>
            </div>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 look">
              <button className="option" onClick={this.switchLook}>
                Look...
              </button>
            </div>

            <div className="col-md-3 option-2 help">
              <button className="option" onClick={this.switchHelp}>
                Help...
              </button>
            </div>

            <div className="col-md-3 option-2 this-is">
              <button className="option" onClick={this.switchThisIs}>
                This is...
              </button>
            </div>

            <div className="col-md-3 option-2 im-using">
              <button className="option" onClick={this.switchImUsing}>
                I'm using...
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'We Should') {

    /*
     * WE SHOULD options
     *
     */
      return (
        <div>
          <div className="row">
            <h5 className="title">We should...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 get-ready">
              <button className="option" onClick={this.switchGetReady}>
                Get Ready...
              </button>
            </div>

            <div className="col-md-3 option-2 book-a-taxi">
              <button className="option" onClick={this.switchBookTaxi}>
                Book a Taxi...
              </button>
            </div>

            <div className="col-md-3 option-2 call-them">
              <button className="option" onClick={this.switchCallThem}>
                Call them...
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Get Ready') {

    /* SUBSECTION: We should get ready */
      return (
        <div>
          <div className="row">
            <h5 className="title">We should get ready...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 get-ready-now">
              <Speech
                text="We should get ready now"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 get-ready-soon">
              <Speech
                text="We should get ready soon."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 get-ready-later">
              <Speech
                text="We should get ready later."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Book Taxi') {

    /* SUBSECTION: Book a taxi */
      return (
        <div>
          <div className="row">
            <h5 className="title">We should book a taxi...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 taxi-now">
              <Speech
                text="We should book a taxi now"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 taxi-soon">
              <Speech
                text="We should book a taxi soon."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 taxi-later">
              <Speech
                text="We should book a taxi later."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Call Them') {

    /* SUBSECTION Call Them */
      return (
        <div>
          <div className="row">
            <h5 className="title">We should call them...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 taxi-now">
              <Speech
                text="We should call them now"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 taxi-soon">
              <Speech
                text="We should call them soon."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 taxi-later">
              <Speech
                text="We should call them later."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Can I') {

    /*
     * CAN I options
     *
     */
      return (
        <div>
          <div className="row">
            <h5 className="title">Can I...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2">
              <button className="option" onClick={this.switchDrink}>
                Drink...
              </button>
            </div>

            <div className="col-md-3 option-2">
              <button className="option" onClick={this.switchFood}>
                Food...
              </button>
            </div>

            <div className="col-md-3 option-2 have-look">
              <Speech
                text="Can I have a look?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2">
              <button className="option" onClick={this.switchGoTo}>
                Go to...
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Drink') {

    /* Drinks */
      return (
        <div>
          <div className="row">
            <h5 className="title">Can I have a (SELECT DRINK)...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2">
              <button className="option" onClick={this.switchTea}>
                Tea...
              </button>
            </div>

            <div className="col-md-3 option-2">
              <button className="option" onClick={this.switchCoffee}>
                Coffee...
              </button>
            </div>

            <div className="col-md-3 option-2 coke">
              <Speech
                text="Can I have a coke."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 lemonade">
              <Speech
                text="Can I have a lemonade."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 water">
              <Speech
                text="Can I have water."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 juice">
              <Speech
                text="Can I have juice."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Coffee') {

    /* Coffee */
      return (
        <div>
          <div className="row">
            <h5 className="title">Can I have a coffee...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 milk">
              <Speech
                text="Can I have a coffee with milk."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 milk-one">
              <Speech
                text="Can I have a coffee with milk and one sugar."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 milk-two">
              <Speech
                text="Can I have a coffee with milk and two sugars."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 no-milk">
              <Speech
                text="Can I have a coffee with no milk."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 no-one">
              <Speech
                text="Can I have a coffee with no milk and one sugar."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 no-two">
              <Speech
                text="Can I have a coffee with no milk and two sugars."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Tea') {

    /* Tea */
      return (
        <div>
          <div className="row">
            <h5 className="title">Can I have a tea...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 milk">
              <Speech
                text="Can I have a tea with milk."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 milk-one">
              <Speech
                text="Can I have a tea with milk and one sugar."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 milk-two">
              <Speech
                text="Can I have a tea with milk and two sugars."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 no-milk">
              <Speech
                text="Can I have a tea with no milk."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 no-one">
              <Speech
                text="Can I have a tea with no milk and one sugar."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 no-two">
              <Speech
                text="Can I have a te with no milk and two sugars."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Tea') {

    /* Tea */
      return (
        <div>
          <div className="row">
            <h5 className="title">Can I have a tea...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 milk">
              <Speech
                text="Can I have a tea with milk."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 milk-one">
              <Speech
                text="Can I have a tea with milk and one sugar."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 milk-two">
              <Speech
                text="Can I have a tea with milk and two sugars."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 no-milk">
              <Speech
                text="Can I have a tea with no milk."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 no-one">
              <Speech
                text="Can I have a tea with no milk and one sugar."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 no-two">
              <Speech
                text="Can I have a tea with no milk and two sugars."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Food') {

    /* Food */
      return (
        <div>
          <div className="row">
            <h5 className="title">Can I have...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 breakfast">
              <Speech
                text="Can I have breakfast?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 lunch">
              <Speech
                text="Can I have lunch?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 dinner">
              <Speech
                text="Can I have dinner?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 snack">
              <Speech
                text="Can I have a snack?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2">
              <button className="option" onClick={this.switchOtherFood}>
                Other Food Options
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Other Food') {

    /* Other Food Items */
      return (
        <div>
          <div className="row">
            <h5 className="title">Can I have (FOOD)...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 fruit">
              <Speech
                text="Can I have fruit?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 sandwich">
              <Speech
                text="Can I have a sandwich?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 spaghetti">
              <Speech
                text="Can I have spaghetti?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 steak">
              <Speech
                text="Can I have a steak?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 burger">
              <Speech
                text="Can I have a burger?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 curry">
              <Speech
                text="Can I have a curry?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 takeaway">
              <Speech
                text="Can I have takeaway?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 chocolate">
              <Speech
                text="Can I have a chocolate?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 fish">
              <Speech
                text="Can I have a fish?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 sausages">
              <Speech
                text="Can I have a sausages?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 roast">
              <Speech
                text="Can I have a roast?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 pie">
              <Speech
                text="Can I have a pie?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Go To') {

    /* Go to */
      return (
        <div>
          <div className="row">
            <h5 className="title">Can I go to...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 bathroom">
              <Speech
                text="Can I go to the bathroom"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 bedroom">
              <Speech
                text="Can I go to the bedroom"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 kitchen">
              <Speech
                text="Can I go to the kitchen"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 outside">
              <Speech
                text="Can I go outside"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Can You') {

    /*
     *  Can You
     *
     */
      return (
        <div>
          <div className="row">
            <h5 className="title">Can you...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 help-me">
              <Speech
                text="Can you help me please?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 get-item">
              <Speech
                text="Can you pass me that please?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 give-item">
              <Speech
                text="Can you take this from me please?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Can We') {

    /*
     *  Can You
     *
     */
      return (
        <div>
          <div className="row">
            <h5 className="title">Can we...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 go-home">
              <Speech
                text="Can we go home?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 go-out">
              <Speech
                text="Can we go out?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 watch-tv">
              <Speech
                text="Can we watch tv?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Look') {

    /*
     *  Can You
     *
     */
      return (
        <div>
          <div className="row">
            <h5 className="title">Look...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 behind">
              <Speech
                text="Look Behind You"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 left">
              <Speech
                text="Look To Your Left"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 right">
              <Speech
                text="Look To Your Right"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 point">
              <Speech
                text="Look Where I'm Pointing"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Help') {

    /*
     * Help
     *
     */
      return (
        <div>
          <div className="row">
            <h5 className="title">Can you help...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 help-please">
              <Speech
                text="Can you help me please?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 help-this">
              <Speech
                text="Can you help me with this?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 help-you">
              <Speech
                text="Can I help you at all?"
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'This Is') {

    /*
     * Help
     *
     */
      return (
        <div>
          <div className="row">
            <h5 className="title">This is...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 fun">
              <Speech
                text="This is fun."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 boring">
              <Speech
                text="This is boring."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 painful">
              <Speech
                text="This is painful."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 okay">
              <Speech
                text="This is okay."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 funny">
              <Speech
                text="This is funny."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>

            <div className="col-md-3 option-2 scary">
              <Speech
                text="This is scary."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.section === 'Im Using') {

    /*
     * I'm using
     *
     */
      return (
        <div>
          <div className="row">
            <h5 className="title">I'm using...</h5>
          </div>

          <div className="row items">
            <div className="col-md-3 option-2 communicate">
              <Speech
                text="I'm using this app to communicate."
                voice="Google Uk English Male"
                pitch="0.7"
                volume="2"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <p>No view found, please contact Matt.</p>;
    }
  }
}
