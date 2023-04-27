import React from 'react';
import './App.css';

// Our Components
import Header from '../src/Components/Header/Header.js';
import Dashboard from '../src/Components/Dashboard/Dashboard.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lightMode: false
    }
  }

  // Light mode 
  toggleLightMode = () => {
    this.setState({
        lightMode: !this.state.lightMode
    })
  }

  render() {
    return (
      <div className="App" id={this.state.lightMode ? 'light' : 'dark'}>
        <span role="img"  aria-label="toggle-theme" onClick={this.toggleLightMode} id="theme" class={this.state.lightMode ? 'display' : 'hide'} >🌕</span>
        <span role="img"  aria-label="toggle-theme" onClick={this.toggleLightMode} id="theme" class={this.state.lightMode ? 'hide' : 'display'}>🔆</span>
        <div className="topbar">
          <Header />
          
        </div>

        <div className="main">
          <Dashboard />
        </div>
      </div>
    );
  }
} 