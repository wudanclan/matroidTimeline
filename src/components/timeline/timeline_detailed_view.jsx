import React from 'react';
import './timeline.css';
import TimelineBoundingBox from './timeline_bounding_box';
import BoundingBoxDetail from './timeline_bounding_box_detail';

class TimelineDetailedView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            imgDimensions: {},
            divDimensions: {},
        };
        this.onImgLoad = this.onImgLoad.bind(this);
        this.setDivDimensions = this.setDivDimensions.bind(this);
        this.getDivDimensions = this.getDivDimensions.bind(this);
    }

    // componentDidMount() {
    //     window.addEventListener('resize', this.setDivDimensions);
    // }

    setDivDimensions() {
        this.setState({
            divDimensions: this.getDivDimensions()
        })
    }

    getDivDimensions() {
        const divWidth = document.getElementsByClassName("timeline_detailed_view_image")[0].offsetWidth;
        const divHeight = document.getElementsByClassName("timeline_detailed_view_image")[0].offsetHeight;
        return {
            height: divHeight,
            width: divWidth
        }
    }

    onImgLoad({ target: img }) {
        this.setState({
            imgDimensions: {
                height: img.offsetHeight,
                width: img.offsetWidth
            },
            divDimensions: this.getDivDimensions()
        });
    }

    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.setDivDimensions);
    // }

    render() {
        let {event} = this.props;
        let boundingBoxes = [];
        let boxLegends = [];
        event.predictions.forEach( (prediction, i) => {
            boundingBoxes.push(<TimelineBoundingBox prediction={prediction} key={i} number={i+1}
            imgDimensions={this.state.imgDimensions} divDimensions={this.state.divDimensions}/>);
            boxLegends.push(<BoundingBoxDetail prediction={prediction} number={i+1} key={i}/>);
        })
        let date = new Date(event.timestamp * 1000);
        return(
            <div className="timeline_detailed_view_container" >
                <div className="bounding_box_legend_container">
                    <div className="event_time">{date.toDateString()}</div>
                    {boxLegends}
                </div>
                <div className="timeline_detailed_view_image">
                    <img src={event.imageSource} onLoad={this.onImgLoad} alt=""/>
                    {boundingBoxes}
                </div>
            </div>
        )
    }
}

export default TimelineDetailedView;