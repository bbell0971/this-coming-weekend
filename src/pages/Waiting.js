import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

export class Waiting extends Component {
    state = {
        redirect: null
    };
    waitForApi = () => {
        for (let index = 0; index < 100000; index++) {
            console.log(index);
            this.setState({redirect: "/integration-success"})
        };
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        this.waitForApi();
        return (
            <div>
                <p>
                    Please wait</p>
                <p>This may take up to five minutes</p>
            </div>

        );
    }
}
export default Waiting;