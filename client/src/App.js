import React, {Component} from 'react';
import axios from 'axios';
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

  handleClick = async () => {
    const {text} = this.state;
    let data = new FormData();
    data.append('text', text);
    try{
      const res = await axios.post(`/textAnalysis`, data);
      console.log(res);
      } catch (err) {
        console.log(err);
      }
  }

  
  render(){
    return (
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
    );
  }
}

export default App;
