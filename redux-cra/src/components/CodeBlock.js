import React, { Component } from "react";
import { docco, github, dark, googlecode } from 'react-syntax-highlighter/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

// All themes and styles for the code block can be found here: https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_HLJS.MD

class CodeBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;
    }

    render() {
        this.state.info = this.props.info;

        return (
            <div>
                <SyntaxHighlighter className="rounded-corners" language={this.state.info.language} style={github}>{this.state.info.code}</SyntaxHighlighter>
            </div>
        );
    }
};

export default CodeBlock;