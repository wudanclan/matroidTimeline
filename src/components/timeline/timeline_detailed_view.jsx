import React from 'react';
import './timeline.css';


class TimelineDetailedView extends React.Component {

    render() {
        let {event} = this.props;
        const style = {
            backgroundImage: 'url(' + event.imageSource + ')',
        };
        debugger
        return(
            <div className="timeline_detailed_view_container">
                <img src={event.imageSource} alt=""/>
                
                {/* <div className="timeline_detailed_view_image" style={style}></div> */}
            </div>
        )
    }
}

export default TimelineDetailedView;