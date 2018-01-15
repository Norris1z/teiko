	.file	"demo.cpp"
	.section .rdata,"dr"
_ZStL19piecewise_construct:
	.space 1
.LC0:
	.ascii "Teiko\0"
	.text
	.globl	_Z6myNameB5cxx11v
	.def	_Z6myNameB5cxx11v;	.scl	2;	.type	32;	.endef
	.seh_proc	_Z6myNameB5cxx11v
_Z6myNameB5cxx11v:
.LFB998:
	pushq	%rbp
	.seh_pushreg	%rbp
	pushq	%rbx
	.seh_pushreg	%rbx
	subq	$56, %rsp
	.seh_stackalloc	56
	leaq	128(%rsp), %rbp
	.seh_setframe	%rbp, 128
	.seh_endprologue
	movq	%rcx, -48(%rbp)
	leaq	-81(%rbp), %rax
	movq	%rax, %rcx
	call	_ZNSaIcEC1Ev
	leaq	-81(%rbp), %rax
	movq	%rax, %r8
	leaq	.LC0(%rip), %rdx
	movq	-48(%rbp), %rcx
.LEHB0:
	call	_ZNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEC1EPKcRKS3_
.LEHE0:
	leaq	-81(%rbp), %rax
	movq	%rax, %rcx
	call	_ZNSaIcED1Ev
	jmp	.L5
.L4:
	movq	%rax, %rbx
	leaq	-81(%rbp), %rax
	movq	%rax, %rcx
	call	_ZNSaIcED1Ev
	movq	%rbx, %rax
	movq	%rax, %rcx
.LEHB1:
	call	_Unwind_Resume
.LEHE1:
.L5:
	movq	-48(%rbp), %rax
	addq	$56, %rsp
	popq	%rbx
	popq	%rbp
	ret
	.def	__gxx_personality_seh0;	.scl	2;	.type	32;	.endef
	.seh_handler	__gxx_personality_seh0, @unwind, @except
	.seh_handlerdata
.LLSDA998:
	.byte	0xff
	.byte	0xff
	.byte	0x1
	.uleb128 .LLSDACSE998-.LLSDACSB998
.LLSDACSB998:
	.uleb128 .LEHB0-.LFB998
	.uleb128 .LEHE0-.LEHB0
	.uleb128 .L4-.LFB998
	.uleb128 0
	.uleb128 .LEHB1-.LFB998
	.uleb128 .LEHE1-.LEHB1
	.uleb128 0
	.uleb128 0
.LLSDACSE998:
	.text
	.seh_endproc
	.ident	"GCC: (GNU) 7.1.0"
	.def	_ZNSaIcEC1Ev;	.scl	2;	.type	32;	.endef
	.def	_ZNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEC1EPKcRKS3_;	.scl	2;	.type	32;	.endef
	.def	_ZNSaIcED1Ev;	.scl	2;	.type	32;	.endef
	.def	_Unwind_Resume;	.scl	2;	.type	32;	.endef
