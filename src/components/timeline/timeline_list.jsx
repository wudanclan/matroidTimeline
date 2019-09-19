import React from 'react';
import TimelineListItem from './timeline_list_item'
import './timeline.css';

class TimelineList extends React.Component {

    render() {
        let {events, handleOpen, handleTranslate, handleNextRow, handlePrevRow} = this.props;
        let items = events.map( (event, i) => {
            return <TimelineListItem event={event} key={i} handleOpen={() => handleOpen(i)} translate={handleTranslate}/>
        })
        return(
            <div className="timeline_list_container">
                <button className="timeline_list_button left" onClick={handlePrevRow}><i className="far fa-arrow-alt-circle-left"></i></button>
                <div className="timeline_list_box">
                    <div className="timeline_list_wrapper">
                        {items}
                    </div>
                </div>
                <button className="timeline_list_button right" onClick={handleNextRow}><i className="far fa-arrow-alt-circle-right"></i></button>
            </div>
        )
    }
}

export default TimelineList;