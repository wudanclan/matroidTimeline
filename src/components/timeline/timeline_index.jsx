import React from 'react';
import { mockResponse } from '../../assets/event_data';

class TimelineIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        this.setState({events: mockResponse.events})
    }

    render() {
        let fetched = this.state.events.length !== 0;
        if (fetched) {
            return(
                <div>
                    
                </div>
            )
        } else {
            return(
                <div>

                </div>
            )
        }
    }
}

export default TimelineIndex;