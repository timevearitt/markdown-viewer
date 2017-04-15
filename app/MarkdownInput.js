var React = require('react');
var ReactDOM = require('react-dom');
import PropTypes from 'prop-types';
import MarkdownOutput from './MarkdownOutput';

export default class MarkdownInput extends React.Component {

	constructor() {
		super();
		this.state = {
			userInput: 'xyz',
		};
	}

	handleOnChange(e) {
		this.setState(
			{ userInput: e.target.value, }
		);

		ReactDOM.render(
			<MarkdownOutput name={this.state.userInput} />,
			document.getElementById('markdownOutput')
		);
	}

    render() {
        return(
                <textarea type="text" onChange={(e) => this.handleOnChange(e)}
                value={this.state.userInput} rows="25" cols="50"></textarea>
        );
    }


}

