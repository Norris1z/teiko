	.text
	.def	 _ZN4demo6square17hf29263de21cf2bd5E;
	.scl	2;
	.type	32;
	.endef
	.section	.text,"xr",one_only,_ZN4demo6square17hf29263de21cf2bd5E
	.globl	_ZN4demo6square17hf29263de21cf2bd5E
	.p2align	4, 0x90
_ZN4demo6square17hf29263de21cf2bd5E:
.Lcfi0:
.seh_proc _ZN4demo6square17hf29263de21cf2bd5E
	subq	$40, %rsp
.Lcfi1:
	.seh_stackalloc 40
.Lcfi2:
	.seh_endprologue
	imull	%ecx, %ecx
	seto	%al
	testb	$1, %al
	movl	%ecx, 36(%rsp)
	jne	.LBB0_2
	movl	36(%rsp), %eax
	addq	$40, %rsp
	retq
.LBB0_2:
	leaq	panic_loc.2(%rip), %rcx
	callq	_ZN4core9panicking5panic17hbab816c0f9a49864E
	ud2
	.seh_handlerdata
	.section	.text,"xr",one_only,_ZN4demo6square17hf29263de21cf2bd5E
.Lcfi3:
	.seh_endproc

	.section	.rdata,"dr",one_only,str.0
	.p2align	4
str.0:
	.ascii	"C:\\Users\\Norris\\Desktop\\Active Projects\\Super Awesome\\teiko\\backend\\compilers\\rust\\files\\demo.rs"

	.section	.rdata,"dr",one_only,str.1
	.p2align	4
str.1:
	.ascii	"attempt to multiply with overflow"

	.section	.rdata,"dr",one_only,panic_loc.2
	.p2align	3
panic_loc.2:
	.quad	str.1
	.quad	33
	.quad	str.0
	.quad	96
	.long	3
	.long	3


