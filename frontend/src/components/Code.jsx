import React , { Component } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import { connect } from 'react-redux';
import { updateOutput } from '../actions';
import { bindActionCreators } from 'redux';
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/theme/material.css';
import '../../node_modules/codemirror/theme/ambiance.css';
import '../../node_modules/codemirror/theme/dracula.css';
import '../../node_modules/codemirror/theme/cobalt.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/rust/rust';
import '../styles/editor.css';

const API_URL = 'http://localhost:8000/compile';

const LANGUAGE_MODES = {'c++':'clike','rust':'rust'};

class Code extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            code: '',
            language: this.props.language,
            theme: this.props.theme
        };

        this.typingTimer = null;
        this.typingInterval = 2000;
    }

    async compileCode() {
        try{
            let rawResponse = await fetch(API_URL,{
                method: 'post',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({language:this.state.language.toLowerCase(),code:this.state.code})
            });
            let response = await rawResponse.json();
            this.setOutput(response);
        }catch(e){
            this.setOutput('<Compilation failed...>');
        }
    }

    setOutput(output) {
        this.props.updateOutput(output);
    }

    componentWillReceiveProps(props){
        this.setState({language:props.language,theme:props.theme});
    }

    render(){ 
        return(
            <div className="code_container code">
                <CodeMirror
                    value={this.state.code}
                    
                    options={{
                        mode: LANGUAGE_MODES[this.state.language.toLowerCase()],
                        theme: this.state.theme.toLowerCase(),
                        lineNumbers: true
                    }}

                    onBeforeChange={(editor, data, code) => {
                        this.setState({code});
                    }}
                    
                    onChange={(editor, data, value) => {
                        clearTimeout(this.typingTimer);
                        if(this.state.code){
                            let instance = this;
                            this.typingTimer = setTimeout(()=>{
                                instance.setOutput('<Compiling code>');
                                instance.compileCode();
                            },this.typingInterval);
                        }else{
                            this.setOutput('');
                        }
                    }}
                />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ updateOutput },dispatch);
}

function mapStateToProps(state) {
    return Object.assign({},state,{
        language: state.language,
        theme: state.theme,
        output: state.output
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Code);