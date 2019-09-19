import React from 'react';
import { mockResponse } from '../../assets/event_data';
import TimelineList from './timeline_list';
import TimelineDetailedView from './timeline_detailed_view';
import './timeline.css';

class TimelineIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            activeEventIdx: 0,
            rowIdx: 0
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleTranslate = this.handleTranslate.bind(this);
        this.handleNextRow = this.handleNextRow.bind(this);
        this.handlePrevRow = this.handlePrevRow.bind(this);
    }

    componentDidMount() {
        //api request
        this.setState({events: mockResponse.events})
    }

    handleOpen(i) {
        this.setState({
            activeEventIdx: i
        })
    }

    handleTranslate() {
        return {
            transform: 'translateX(' + this.state.rowIdx * -77 + 'vw)',
        }
    }

    handleNextRow() {
        if (this.state.rowIdx === (Math.ceil(this.state.events.length / 5) - 1)) {
            this.setState({ rowIdx: 0, activeEventIdx: 0 });
        } else {
            let currentRowIdx = this.state.rowIdx;
            this.setState({ rowIdx: currentRowIdx + 1, activeEventIdx: 5*(currentRowIdx +1) });
        }
    }

    handlePrevRow() {
        if (this.state.rowIdx === 0) {
            let lastRow = Math.ceil(this.state.events.length / 5) - 1;
            this.setState({ rowIdx: lastRow, activeEventIdx: lastRow*5  });
        } else {
            let currentRowIdx = this.state.rowIdx;
            this.setState({ rowIdx: currentRowIdx - 1, activeEventIdx: 5 * (currentRowIdx - 1) });
        }
    }

    render() {
        let {events, activeEventIdx} = this.state
        let fetched = this.state.events.length !== 0;
        if (fetched) {
            return(
                <div className="timeline_body">
                    <TimelineDetailedView event={events[activeEventIdx]}/>
                    <TimelineList events={events} handleOpen={this.handleOpen} handleTranslate={this.handleTranslate}
                    handlePrevRow={this.handlePrevRow} handleNextRow={this.handleNextRow}/>
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