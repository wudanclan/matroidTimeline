import React from 'react';
import './timeline.css';

class TimelineBoundingBox extends React.Component {

    position(prediction, imgDimensions, divDimensions) {
        if (imgDimensions.width !== undefined) {
            let top = ((divDimensions.height - imgDimensions.height) / 2) + (imgDimensions.height*prediction.boundingBox.top);
            let left = ((divDimensions.width - imgDimensions.width) / 2) + (imgDimensions.width*prediction.boundingBox.left);
            let width = imgDimensions.width*prediction.boundingBox.width;
            let height = imgDimensions.height*prediction.boundingBox.height;
            
            return {
                top,
                left,
                width,
                height
            };
        }
    }

    render() {
        let {prediction, imgDimensions, divDimensions, number} = this.props;
        const style = this.position(prediction, imgDimensions, divDimensions);
        return(
            <div className="timeline_bounding_box" style={style}>
                <div className="bounding_box_number">{number}</div>
            </div>
        )
    }
}

export default TimelineBoundingBox;