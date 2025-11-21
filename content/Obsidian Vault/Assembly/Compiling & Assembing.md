Notes on converting C into assembly and assembly into binaries.

### GCC + Linux
Make sure proper libraries, compilers, and packages are installed if doing 32-bit
`gcc -S -m32 file.c` - compiles `file.c` into 32-bit assembly, will be output in `file.s`, if you want debug symbols, add `-g`
`gcc -m32 file.s -o file_compiled` - runs the assembler and linker on your assembly.



### GNU as
Not sure how to do this yet