const { execSync } = require('child_process');
const ASMParser = require('../../utils/asm_parser');
const fs = require('fs');
const path = require('path');

class CppCompiler extends ASMParser{
    constructor(){
        super();
        this.tmpFile = path.join(__dirname,'files','demo.cpp');
        this.outFile = path.join(__dirname,'files','demo.s');
        this.cmd = `g++ "${this.tmpFile}" -S -o "${this.outFile}"`;
    }

    compile(code){
        fs.writeFileSync(this.tmpFile,code);

        execSync(this.cmd);

        if(fs.existsSync(this.outFile)){
            let asm = fs.readFileSync(this.outFile).toString();
            let parsedAsm = this.parse(asm);
            return parsedAsm ? parsedAsm : "<Compilation failed>";
        }else{
            return "<Compilation failed>";
        }
    }
}

module.exports = new CppCompiler();