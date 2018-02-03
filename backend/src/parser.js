class ASMParser{
    constructor(){
        this.unwantedDirectives = [
            'file',
            'text',
            'def',
            'align',
            'set',
            'ident',
            'seh',
            'section',
            'type',
            'scl',
            'globl'
        ];
    }
    
    removeEmptyNewLines(asm){
        return asm.replace(/^\s*[\r\n]/gm,'');
    }

    parse(asm){
        this.unwantedDirectives.forEach((directive)=>{
            let pattern = new RegExp(`\.${directive}.*$`,'gm')
            asm = asm.replace(pattern,'');
        });
        return this.removeEmptyNewLines(asm);
    }
}

module.exports = ASMParser;