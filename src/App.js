import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    styles:{
        backgroundColor: null
    }      
  }
  
  /**
   * Use this function only. Do not write additional class functions
   */
  changeBackgroundColor = () => {
    /**Your Code goes here */
    this.setState({
      styles:{
        backgroundColor: "#eb5202"
      }
    })
    
    //console.log(this.state);

  }

  
  render() {
    const { changeBackgroundColor } = this;

    /** You can use this styles object to add custom styles, will be treated as inline styles in React */
    const styles = this.state.styles;
    

    /** Do NOT change the code below */
    return (
      <div className="App">
        <header className="App-header" style={styles}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <button onClick={changeBackgroundColor}>Change Bakcground Color</button>

        </header>
      </div>
    );
  }
}

export default App;
