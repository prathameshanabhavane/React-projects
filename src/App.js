import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
    }
  }
  
  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json').
    then((Response) => Response.json()).
    then((getresponse) => {
      //console.log(getresponse.movies);
      this.setState({
        data: getresponse.movies,
      })
    })
  }

  render () {

    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      margin: "15px"
    };

    const headerstyle = {
      color: "black",
    }
    const yearstyle = {
      fontWeight: "700",
      paddingBottom: "10px",
      display: "block"
    }

    return (
      <div className="App">
        <div>
          {this.state.data.map((dynamicdata,key) => 
            <div key={key} style={mystyle}>
                <h2 style={headerstyle}>
                  {dynamicdata.title}
                </h2>
                <span style={yearstyle}>
                  {dynamicdata.releaseYear} 
                </span>
            </div>
            )}
        </div>
      </div>
    );
  }

}

export default App;
