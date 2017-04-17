var React = require('react');
import PropTypes from 'prop-types';
var marked = require('marked');

export default class MarkdownOutput extends React.Component {

	createMarkup() {
		var markup = marked(this.props.name, {sanitize: true});
		return { __html: markup };
	}

    render() {
        return <div dangerouslySetInnerHTML={ this.createMarkup() } />;
    }
}

MarkdownOutput.propTypes = {
	name: PropTypes.string
};

MarkdownOutput.defaultProps = {
	name: '# Testing H1\n## Testing *italics* \n#### TestingLists\n + Item 1 \n + Item 2  \n + Item 3'
};

