const { spawn } = require('child_process');
const streamToPromise = require('stream-to-promise');
const fs = require('fs');
const path = require('path');

class CppCompiler{
    constructor(){
        this.cmd = 'g++';
        this.tmpFile = path.join(__dirname,'files','demo.cpp');
        this.outFile = path.join(__dirname,'files','demo.s');
        this.args = [this.tmpFile,'-S','-o',this.outFile];
    }

   async compile(code){
        var ws = fs.createWriteStream(this.tmpFile);
        ws.write(code);
        ws.end();

        const p = spawn(this.cmd, this.args);

        let error = await streamToPromise(p.stderr);

        return {filename: this.outFile, output:error.toString('utf-8')};
    }
}

module.exports = new CppCompiler();