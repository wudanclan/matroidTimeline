import React from 'react';
import './timeline.css';


class TimelineListItem extends React.Component {
    render() {
        let {event, handleOpen, translate} = this.props;
        const style = {
            backgroundImage: 'url(' + event.imageSource + ')',
        };
        return(
            <div className="list_item_container" style={translate()}>
                <div className="list_item_content" style={style} onClick={handleOpen}></div>
            </div>
        )
    }
}

export default TimelineListItem;