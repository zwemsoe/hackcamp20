import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: false,
      text: "",
      sentiment: "",
    };
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleClick = async () => {
    this.setState({
      isLoading: true,
    })
    const {text} = this.state;
    let data = new FormData();
    data.append('text', text);
    try{
      const res = await axios.post(`/textAnalysis`, data);
      console.log(res);
      this.setState({
        isLoading: false,
        sentiment: res.data,
      })
      } catch (err) {
        console.log(err);
      }
  }

  renderSentiment = () => {
    const {sentiment} = this.state;
    if(sentiment === ""){
      return;
    }
    if(sentiment === "mixed"){
      return <h3>I'm not sure about this one.</h3>
    } else if (sentiment === "positive"){
      return <h3>Sounds pretty good to me!</h3>
    } else {
      return <h3>I don't like this one.</h3>
    }
  }

  
  render(){
    const {isLoading} = this.state;
    return (
      <div>
        <h6>HackCamp 2020</h6>
        <h2>Smart Text Analytics</h2>
        
      <div className="App __display-grid-center">
          {isLoading && <div className="__loading"></div>}
          <div style={{backgroundColor: "white"}}>
            {this.renderSentiment()}
          </div>
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
