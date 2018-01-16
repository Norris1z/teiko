const { spawnSync } = require('child_process');
const ASMParser = require('../../utils/asm_parser');
const fs = require('fs');
const path = require('path');

class RustCompiler extends ASMParser{
    constructor(){
        super();
        this.cmd = 'rustc';
        this.tmpFile = path.join(__dirname,'files','demo.rs');
        this.outFile = path.join(__dirname,'files','demo.s');
        this.args = ['--emit=asm',this.tmpFile,'--crate-type=lib','-o',this.outFile];
    }

    compile(code){
        var ws = fs.createWriteStream(this.tmpFile);
        ws.write(code);
        ws.end();
        
        spawnSync(this.cmd, this.args);

        if(fs.existsSync(this.outFile)){
            let asm = fs.readFileSync(this.outFile).toString();
            let parsedAsm = this.parse(asm);
            return parsedAsm ? parsedAsm : "<Compilation failed>";
        }else{
            return "<Compilation failed>";
        }
    }
}

module.exports = new RustCompiler();