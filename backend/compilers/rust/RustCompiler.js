const { spawn } = require('child_process');
const streamToPromise = require('stream-to-promise');
const fs = require('fs');
const path = require('path');

class RustCompiler{
    constructor(){
        this.cmd = 'rustc';
        this.tmpFile = path.join(__dirname,'files','demo.rs');
        this.outFile = path.join(__dirname,'files','demo.s');
        this.args = ['--emit=asm',this.tmpFile,'--crate-type=lib','-o',this.outFile];
    }

   async compile(code){
        var ws = fs.createWriteStream(this.tmpFile);
        ws.write(code);
        ws.end();

        const p = spawn(this.cmd, this.args);

        let error = await streamToPromise(p.stderr);

        return {filename: this.outFile,output:error.toString('utf-8')};
    }
}

module.exports = new RustCompiler();