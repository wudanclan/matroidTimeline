import React from 'react';
import { mockResponse } from '../../assets/event_data';
import TimelineList from './timeline_list';
import TimelineListItem from './timeline_list_item';
import TimelineDetailedView from './timeline_detailed_view';
import './timeline.css';

class TimelineIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            activeEventIdx: 0,
        };
    }

    componentDidMount() {
        //api request
        this.setState({events: mockResponse.events})
    }

    render() {
        let {events, activeEventIdx} = this.state
        let fetched = this.state.events.length !== 0;
        debugger
        if (fetched) {
            return(
                <div className="timeline_body">
                    <TimelineDetailedView event={events[activeEventIdx]}/>
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