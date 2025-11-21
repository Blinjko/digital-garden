Notes on using GDB to debug assembly

### Registers
`info registers` - shows the registers
`i r` - abbreviation of the above
`info register REGISTER` - view the specified registers value, like eax or esp



### Useful Commands
`stepi` - step 1 instruction at a time also enters function calls
`step` - steps 1 line of code, not instruction, at a time, enters function calls
`nexti` - next instruction skips function calls
`next` - goes 1 line of code at a time, skips function calls
`break LOCATION` - set a break point at the location
`disassemble SYMBOL` - disassembles a symbol location
`print (int) *0xDEADBEEF` - print the value at the specified address as an integer, NOTE: you can change the datatype and address.


### Memory
`info address SYMBOL` - get the address that the specified symbol refers to

