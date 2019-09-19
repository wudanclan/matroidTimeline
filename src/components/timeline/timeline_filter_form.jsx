import React from 'react';
import './timeline.css';

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labelFilter: "",
            scoreFilter: 0,
        }
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    render() {
        let { handleForm } = this.props;
        return (
            <div>
                <form onSubmit={(e) => handleForm(this.state, e)}>
                    <label> Label
                        <input type="text" name="" onChange={this.update('labelFilter')} className="form_input"/>
                    </label>
                    <label> Score
                        <input type="text" name="" onChange={this.update('scoreFilter')} className="form_input"/>
                    </label>
                    <input type="submit" value="Filter" className="form_input form_submit"/>
                </form>
            </div>
        )
    }

}

export default FilterForm;