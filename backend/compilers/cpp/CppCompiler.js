const { spawn } = require('child_process');
const streamToPromise = require('stream-to-promise');
const fs = require('fs');
const path = require('path');

class CppCompiler{
    constructor(){
        this.cmd = 'g++';
        this.tmpFile = path.join(__dirname,'files','demo.cpp');
        this.outFile = path.join(__dirname,'files','demo.s');
    }

   async compile(code){
        var wstream = fs.createWriteStream(this.tmpFile);
        wstream.write(code);
        wstream.end();

        const child = spawn(this.cmd,[this.tmpFile,'-S','-o',this.outFile]);

        let data = await streamToPromise(child.stderr);

        return {filename: this.outFile,output:data.toString('utf-8')};
    }
}

module.exports = new CppCompiler();