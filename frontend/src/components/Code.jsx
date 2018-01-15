import React , { Component } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import { connect } from 'react-redux';
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/theme/material.css';
import '../../node_modules/codemirror/theme/ambiance.css';
import '../../node_modules/codemirror/theme/dracula.css';
import '../../node_modules/codemirror/theme/cobalt.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/rust/rust';
import 'codemirror/mode/gas/gas';
import '../styles/editor.css';

const API_URL = 'http://localhost:8000/compile';

const LANGUAGE_MODES = {'c++':'clike','rust':'rust'};

class Code extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            code: '',
            output: '',
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
            this.setState({output: response});
        }catch(e){
            this.setState({output: '<Compilation failed...>'});
            console.log(e);
        }
    }

    componentWillReceiveProps(props){
        this.setState({language:props.language,theme:props.theme});
    }

    render(){ 
        return(
            <div>
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
                                    instance.setState({output: '<Compiling code>'})
                                    instance.compileCode();
                                },this.typingInterval);
                            }
                        }}
                    />
                </div>
                    {/** The output **/}
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
            </div>
        )
    }
}


function mapStateToProps(state) {
    return Object.assign({},state,{
        language: state.language,
        theme: state.theme
    })
}

export default connect(mapStateToProps,null)(Code);