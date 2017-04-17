var React = require('react');
var ReactDOM = require('react-dom');
import MarkdownInput  from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';

var app = document.getElementById("markdown");

ReactDOM.render(<MarkdownInput />, markdownInput);
ReactDOM.render(<MarkdownOutput />, markdownOutput);