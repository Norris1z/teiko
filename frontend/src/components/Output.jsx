import React , { Component } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import { connect } from 'react-redux';
import '../../node_modules/codemirror/lib/codemirror.css';
import 'codemirror/mode/gas/gas';
import '../styles/editor.css';


class Output extends Component{
    constructor(props) {
        super(props);
        this.state = {
            output: '',
            theme: this.props.theme
        };
    }

    componentWillReceiveProps(props){
        this.setState({output:props.output,theme:props.theme});
    }

    render() {
        return (
            <div className="code_container code">
                <CodeMirror
                    value={this.state.output}
                    options={{
                        mode: 'gas',
                        theme: this.state.theme.toLowerCase(),
                        lineNumbers: true,
                        readOnly: true
                    }}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return Object.assign({},state,{
        language: state.language,
        theme: state.theme,
        output: state.output
    })
}

export default connect(mapStateToProps,null)(Output);