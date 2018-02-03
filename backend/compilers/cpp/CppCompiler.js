const { execSync } = require('child_process');
const ASMParser = require('../../src/parser');
const fs = require('fs');
const path = require('path');

class CppCompiler{
    constructor(){
        this.tmpFile = path.join(__dirname,'files','demo.cpp');
        this.outFile = path.join(__dirname,'files','demo.s');
        this.cmd = `g++ "${this.tmpFile}" -S -o "${this.outFile}"`;
        // parses compiler output
        this.parser = new ASMParser();

    }

    compile(code){
        fs.writeFileSync(this.tmpFile,code);

        execSync(this.cmd);

        if(fs.existsSync(this.outFile)){
            let asm = fs.readFileSync(this.outFile).toString();
            asm = this.parser.parse(asm);
            return asm ? asm : "<Compilation failed>";
        }else{
            return "<Compilation failed>";
        }
    }
}

module.exports = new CppCompiler();