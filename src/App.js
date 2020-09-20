import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './Main';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            range: "25",
            email: "example@example.com",
            postcode: "55555"
        }
    }
    changeStateData = () => {
      this.setState({
          email: this.state.email === "Adam" ? "Bob" : "Adam",
          postcode: this.state.postcode === "Adam" ? "Bob" : "Adam",
          range: this.state.range === "Adam" ? "Bob" : "Adam"
      })
  }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                  <div>
                    <h1>This Coming Weekend</h1>
                  </div>

                
                </header>
                <div>
                <Main/>
                </div>
            </div>
        );
    }
}
