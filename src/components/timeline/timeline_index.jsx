import React from 'react';
import { mockResponse } from '../../assets/event_data';
import TimelineList from './timeline_list';
import TimelineDetailedView from './timeline_detailed_view';
import FilterForm from './timeline_filter_form';
import './timeline.css';

class TimelineIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            filteredEvents: [],
            errorFiltering: false,
            activeEventIdx: 0,
            rowIdx: 0,
            labelFilter: "",
            scoreFilter: 0,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleTranslate = this.handleTranslate.bind(this);
        this.handleNextRow = this.handleNextRow.bind(this);
        this.handlePrevRow = this.handlePrevRow.bind(this);
        this.handleForm = this.handleForm.bind(this);
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
            transition: 'transform 0.8s ease-in-out'
        }
    }

    handleForm(formData, e) {
        e.preventDefault();
        let {labelFilter, scoreFilter} = formData;
        let filteredEvents = this.state.events.filter( event => {
            let filtered = false;
            for(let i = 0; i < event.predictions.length; i++) {
                for (let j = 0; j < event.predictions[i].scores.length; j++) {
                    let score = event.predictions[i].scores[j]
                    if (score.label.includes(labelFilter) && score.score >= scoreFilter) {
                        filtered = true;
                    }
                }
            }
            return filtered;
        });
        let errorFiltering = filteredEvents.length === 0;
        debugger
        this.setState({filteredEvents, labelFilter, scoreFilter, errorFiltering});
    }

    handleNextRow() {
        let {events, filteredEvents} = this.state
        let displayEvents = filteredEvents.length === 0 ? events : filteredEvents;
        if (this.state.rowIdx === (Math.ceil(displayEvents.length / 5) - 1)) {
            this.setState({ rowIdx: 0, activeEventIdx: 0 });
        } else {
            let currentRowIdx = this.state.rowIdx;
            this.setState({ rowIdx: currentRowIdx + 1, activeEventIdx: 5*(currentRowIdx +1) });
        }
    }

    handlePrevRow() {
        let { events, filteredEvents } = this.state
        let displayEvents = filteredEvents.length === 0 ? events : filteredEvents;
        if (this.state.rowIdx === 0) {
            let lastRow = Math.ceil(displayEvents.length / 5) - 1;
            this.setState({ rowIdx: lastRow, activeEventIdx: lastRow*5  });
        } else {
            let currentRowIdx = this.state.rowIdx;
            this.setState({ rowIdx: currentRowIdx - 1, activeEventIdx: 5 * (currentRowIdx - 1) });
        }
    }

    render() {
        let {events, filteredEvents, activeEventIdx, errorFiltering} = this.state
        let fetched = this.state.events.length !== 0;
        let displayEvents = filteredEvents.length === 0 ? events : filteredEvents;
        let errorFilterMessage = errorFiltering ? "No Results Found.  Showing all items." : "";
        if (fetched) {
            return(
                <div className="timeline_body">
                    <FilterForm handleForm={this.handleForm}/>
                    <div>{errorFilterMessage}</div>
                    <TimelineList events={displayEvents} handleOpen={this.handleOpen} handleTranslate={this.handleTranslate}
                    handlePrevRow={this.handlePrevRow} handleNextRow={this.handleNextRow}/>
                    <TimelineDetailedView event={displayEvents[activeEventIdx]}/>
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