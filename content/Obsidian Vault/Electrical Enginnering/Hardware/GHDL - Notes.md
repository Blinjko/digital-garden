## Links
[Docs](https://ghdl.github.io/ghdl/index.html)
[Source](https://github.com/ghdl/ghdl)
https://github.com/ghdl/ghdl/issues/1291 -> Resources for learning VHDL, many possibly useful links.

## Usage
- Analysis `-a` -> convert VHDL to internal representation: `ghdl -a --std=08 --work=mylib myfile.vhdl`
- Elaboration `-e` -> generate executable machine code for the target module: `ghdl -e --std=08 top_module_name`
- Run `-r` -> execute the design to test the behavior (test bench): `ghdl -r top_module_name --wave=output.ghw` 
**NOTE: Use the same options for analysis and elaboration.**

### Options
`--std=08` -> Specify to use VHDL 2008 standard.
`--work=LIB_NAME` -> analyze the specified files into LIB_NAME, to specify a specific path use `-P/path/to/files/`

### Creating Libraries
To compile code into a specific library use the `--work=libname` command when running `-a`.  
```
ghdl -a --std=08 --work=complex complex_fixed.vhdl
ghdl -a --std=08 --work=fft butterfly.vhdl fifo.vhdl stage.vhdl core.vhdl
```
#### Special "work" Library
By default if no `--work=` is used on the CLI, then all the entities  nd packages implicitly go into the `work` library. It is special, in that you usually don't need to use `library work;` to use the entities you have spread across files, I believe you do need to use it if you have a package though. Also, do not name you library `work` as this will lead to weird errors, just name it something else.
#### Library Tips:
- Be sure to note the order of compilation, i.e if `fileb` has something that is in `filea` pass `filea` on the CLI first. 
- Also know that with GHDL you do not have to specify what libraries are used when invoking the command, this is already done with the `library libname;` statement in your VHDL files.
- Just because two files are in the same library doesn't mean you don't need the `library` statement before you use the part you need. For example, looking at the commands below, `stage` requires parts referenced in `fifo`, so we need to add `library fft;` and `use fft.all;` to `stage` so that we can use those pieces.



```
ghdl -a --std=08 --work=complex complex_fixed.vhdl
ghdl -a --std=08 --work=fft butterfly.vhdl fifo.vhdl stage.vhdl core.vhdl
```
## Examples

### Hello World
```
--  Hello world program
use std.textio.all; -- Imports the standard textio package.

--  Defines a design entity, without any ports.
entity hello_world is
end hello_world;

architecture behaviour of hello_world is
begin
  process
    variable l : line;
  begin
    write (l, String'("Hello world!"));
    writeline (output, l);
    wait;
  end process;
end behaviour;

```
Save as `hello-world.vhdl` and run the following to execute it.
- `ghdl -a --std=08 hello-world.vhdl` -> analyze
- `ghdl -e --std=08 hello_world` -> elaborate
- `ghdl -r hello_world`
It should print out "Hello World!" in the terminal.

### Heartbeat / Clock
```
library ieee;
use ieee.std_logic_1164.all;

entity heartbeat is
  port ( clk: out std_logic);
end heartbeat;

architecture behaviour of heartbeat
is
  constant clk_period : time := 10 ns;
begin
  -- Clock process definition
  clk_process: process
  begin
    clk <= '0';
    wait for clk_period/2;
    clk <= '1';
    wait for clk_period/2;
  end process;
end behaviour;
```

Save as `heartbeat.vhdl` and run the following to execute and view the waveform.
- `ghdl -a --std=08 heartbeat.vhdl`
- `ghdl -e --std=08 heartbeat`
- `ghdl -r heartbeat --wave=heartbeak.ghw`
To view the waveform use GTK wave or another software.
**Note that the top module is run continuously as to simulate real hardware, hence the run part doesn't terminate**

