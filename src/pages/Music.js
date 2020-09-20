import React, {Component} from 'react';

export class Music extends Component {

    render = () => <div className="content">
        <h3>Thank you!</h3>
        <p>Would you like to itegrate frequently played artists from other apps?</p>
        <form action="/waiting">
            <div className="form-control">
                <input type="radio" id="integrate" name="integrate" value="yes"/>
                <label for="integrate">Yes Please</label>
            </div>
            <div className="form-control">
                <input type="radio" id="do-not-integrate" name="integrate" value="no"/>
                <label for="integrate">No Please</label>
            </div>
            <button type="submit">
                Submit
            </button>
        </form>

    </div>

}
export default Music;