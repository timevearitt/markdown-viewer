var React = require('react');
var ReactDOM = require('react-dom');
import PropTypes from 'prop-types';
import MarkdownOutput from './MarkdownOutput';

export default class MarkdownInput extends React.Component {

	constructor() {
		super();
		this.state = {
			userInput: '# Testing H1\n## Testing *italics* \n#### TestingLists\n + Item 1 \n + Item 2  \n + Item 3',
		};
	}

	handleOnChange(e) {
		this.setState(
			{ userInput: e.target.value, }
		);
	}

	componentDidUpdate() {
		ReactDOM.render(
			<MarkdownOutput name={this.state.userInput} />,
			document.getElementById('markdownOutput')
		);
	}

    render() {
        return(
                <textarea type="text" onChange={(e) => this.handleOnChange(e)}
                value={this.state.userInput} rows="25" cols="50" wrap="hard"></textarea>
        );
    }


}

