const { execSync } = require('child_process');
const ASMParser = require('../../src/parser');
const fs = require('fs');
const path = require('path');

class RustCompiler extends ASMParser{
    constructor(){
        super();
        this.tmpFile = path.join(__dirname,'files','demo.rs');
        this.outFile = path.join(__dirname,'files','demo.s');
        this.cmd = `rustc --emit=asm "${this.tmpFile}" --crate-type=lib -o "${this.outFile}" -Awarnings`;
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

module.exports = new RustCompiler();