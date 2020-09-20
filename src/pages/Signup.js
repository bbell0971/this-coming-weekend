import React, {Component} from 'react';

export default class Signup extends Component {

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
            email: this.state.email === "Adam"
                ? "Bob"
                : "Adam",
            postcode: this.state.postcode === "Adam"
                ? "Bob"
                : "Adam",
            range: this.state.range === "Adam"
                ? "Bob"
                : "Adam"
        })
    }
    render() {
        return (
<div>
        <h2>Welcome!</h2>

        < form action="/music" > <label>
            Please enter your email:
        </label> < br /> <input type="text" name="email"/> < br /> <label>
            Please enter your zip code:
        </label> < br /> <input type="text" name="postcode"/> < br /> <label>
            Please choose how far you would like to travel for events:
        </label> < br /> <div>
            <input
                id="typeinp"
                type="range"
                name="range"
                min="0"
                max="50"
                step="1"
                value={this.state.range}/><br/>
        </div> < input type = "submit" value = "Submit" /> </form> 
        </div>
        )
    }
}