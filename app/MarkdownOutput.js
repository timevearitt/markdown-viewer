var React = require('react');
import PropTypes from 'prop-types';

export default class MarkdownOutput extends React.Component {

    render() {
        return <div>{this.props.name}</div>;
    }
}

MarkdownOutput.propTypes = {
	name: PropTypes.string
};

MarkdownOutput.defaultProps = {
	name: 'xyz'
};

