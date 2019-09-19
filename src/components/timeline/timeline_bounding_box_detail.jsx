import React from 'react';
import './timeline.css';

const BoundingBoxDetail = function(props) {
    let {prediction, number} = props;
    let scores = prediction.scores.map( (score, i) => {
        return (
            <div className="legend_box_score_container" key={i}>
                <span className="legend_box_score_label">{score.label}: &nbsp;</span>
                <span className="legend_box_score">{score.score}</span>
            </div>
            )
    })
    return(
        <div className="legend_box_container">
            <div className="legend_box_number">Box: {number}</div>
            {scores}
        </div>
    )
}

export default BoundingBoxDetail;