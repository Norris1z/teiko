import React , { Component } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/codemirror/theme/material.css';
import 'codemirror/mode/clike/clike';
import '../styles/editor.css';

const API_URL = 'http://localhost:8000/compile';

class Code extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            code: '',
            output: ''
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
                body: JSON.stringify({language:'c++',code:this.state.code})
            });
            let response = await rawResponse.json();
            this.setState({output: response});
        }catch(e){
            this.setState({output: '<Compilation failed...> Something went wrong'});
            console.log(e);
        }
    }

    render(){
        return(
            <div>
                <div className="code_container code">
                    <CodeMirror
                        value={this.state.code}
                        
                        options={{
                            mode: 'clike',
                            theme: 'material',
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
                            mode: 'clike',
                            theme: 'material',
                            lineNumbers: true,
                            readOnly: true
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Code;