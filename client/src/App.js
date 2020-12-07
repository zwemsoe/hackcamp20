import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: false,
      text: "",
    };
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleClick = () => {

  }

  
  render(){
    return (
      <div>
        <h6>HackCamp 2020</h6>
        <h2>Smart Text Analytics</h2>
        
      <div className="App __display-grid-center">
          <div className="card" style={{boxShadow: "3px 3px 3px #888888"}}>
            <div className="card-body">
              <p>Please enter some text:</p>
              <textarea name="text" rows="4" cols="50" 
                onChange={this.handleTextChange} value= {this.state.text}/>
              <br/>
              <a className="btn btn-secondary" onClick={this.handleClick} href = "javascript:void(0)">
                Submit
              </a> 
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
