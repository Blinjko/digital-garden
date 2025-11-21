[[GHDL - Notes]] - For simulation and testing
[[vhdlqrc.pdf]] - Cheat sheet
### General
- Comments begin with a `--`, there are no multi line comments
- White space is ignored
- Parentheses can alter the order of operations
- VHDL is not case sensitive
- All statements end in a semicolon
### Identifiers
The names given to variables, signals, and ports. Must follow the following rules.
- Valid characters are `A-Z` ,`a-z`, `0-9`, and `_` (the underscore)
- Must begin with an alphabetic character
- Cannot contain two consecutive underscores OR end in an underscore
- Cannot be a reserved word

### Bundles / Vectors 
```
library IEEE;
use IEEE.std_logic_1164; -- this is needed to use std_logic and std_logic_vector

-- example declaration
entity adder is
	port(L_IN : in  std_logic_vector(7 downto 0); -- 8 bit vector
	     OUT  : out std_logic);
end adder;
```
Difference between `downto` and `to`:
`downto` -> MSB is the first bit on the left, Little Endian
`to` -> MSB is the first bit on the right , Big Endian

Selecting Bits
`my_vector(0)`  -> select bit 0
`my_vector(3 downto 0)` -> select the first 4 bits

### Entity
Entities can be thought of as the black box abstraction for a circuit. They state the inputs and outputs for a circuit but none of the logic that *is* the circuit.
The following is the code to create an entity
```
-- A basic entity statment
entity my_entity is  
    port(  
    port_name_1 : in std_logic ;  
	port_name_2 : out std_logic;  
	port_name_3 : inout std_logic ); --do not forget the semicolon  
end my_entity;                       -- do not forget this semicolon either
```
The ports are the various inputs and outputs that the entity, or circuit, has. As can be seen the format is `port_name`, `:` , then weather the the port is `in`, `out`, or `inout` (input and output).  The last piece is the datatype of the port, in the cases above it is `std_logic`, and finally the semicolon. The ports of an entity are sometimes refereed to as the interface of the entity / circuit.

### Architecture
```
architecture my_arc of entity_name is
	signal temp_val : std_logic; -- signals are declared before the begin
begin

-- details

end my_arc;
```
### Concurrent, Conditional, and Selected signal assignment
All are executed in parallel to each other. If all conditions are not exhausted a latch could be generated.
```
-- Concurrent
<target> <= <expression>;

-- Conditional 
<target> <= <expression> when <conditional> else
           <expression> when <conditional> else
           <expression>;
-- Selected
with <choose_expression> select
	<target> <= <expression> when <choices>,
	            <expression> when <choices>; -- for a catch all use 'when others'
```

### Process Statement
The process statement itself is executed in parallel, whilst the lines inside the process statement are executed sequentially. The sensitivity list states what signals should be monitored for changes, so that the process statement can be evaluated accordingly. (only when signals in the sensitivity list change).
```
my_label: process(sensitivity_list) is
	<item_declaration>
begin
	<sequential_statements>
end process my_label;
	
```

### If, Case
To be used inside process statements, note that if all possibilities are not exhausted, then a latch could be generated.
```
-- if-then
if (conditional) then
	<statements>
elsif (conditional) then
	<statements>
else
	<statements>
end if;

-- Case statement
case (expression) is
	when choices => 
		<sequential_statements>
	when choices =>
		<sequential_statements>
	when others =>
		<sequential_statements>
end case;
```

### Operators
These are ordered for lowest to highest precedence

Logical
- `and`, `or`, `nand`, `nor`, `xor`, `xnor`
Relational
-  `=`, `\=`, `<`, `<=`, `>`,`>=`
-  equal, not equal, ... 
Shifts - Need to include `ieee.numeric_std` or `i.ee.numeric_bit`
- `sll` -> shift left logical, pushes bits out left side, fills right side with 0's
- `srl` -> shift right logical, pushes bits out right side, fills left with 0's
- `sla` -> shift left arithmetic, pushes bits out left side, fills right with the rightmost bit, also doesn't change sign bit
- `sra` -> shift right arithmetic, pushes bits out the right side, fills left with the leftmost bit, sign bit doesn't change.
- `rol` -> rotate on left, grab left most bit and put in the right end
- `ror` -> rotate on right, grab right most bit and put it in the left end
Adding
- `+`,`-`
- `&` -> concatenation operator for bit strings
Multiplication
- `*`, `\`
- `mod` -> Rules below, generally avoided when working with negative numbers
	- sign of `(X mod Y)` is the same as `Y`
	- `abs(X mod Y) < abs(Y)`
	- `(X mod Y) = (X*(Y-n))` for some `n`
- `rem` -> rules below
	-  sign of `(X rem Y)` is the same as `X`
	- `abs(X rem Y) < abs(Y)`
	- `(X rem Y) = (X - (X/Y)*Y)`
Sign
- `+`, `-`
Misc
- `**` -> exponent
- `abs` -> absolute value
- `not`
### Latch Generation
Latch generation will occur when an conditional statement, if, case, etc, does not account for all possibilities, i.e there is no else clause or `when others`. When all scenarios are accounted for the circuit will be generated as combinatoric logic.
```
entity register is
	port (A   : in  std_logic;
	      CLK : in  std_logic;
	      B   : out std_logic);
end register;

architecture behav of register is
begin
	reg: process(CLK)
	begin
		if (rising_edge(CLK)) then
			B <= A;
		end if; -- No else here so latch is generated
	end process reg;
end behav;
```

### Finite State Machines
Very useful for implementing behaviors in VHDL. Note that the real design is in making the FSM itself not writing it in VHDL. Writing it in VHDL is generally trivial, and a simple template is included below.
```
entity my_fsm2 is
	port ( TOG_EN  : in  std_logic;
		   CLK,CLR : in  std_logic;
              Y,Z1 : out std_logic);
end my_fsm2;

-- architecture
architecture fsm2 of my_fsm2 is

	type state_type is (ST0,ST1); -- the states of the FSM
	signal PS,NS : state_type;

begin
	-- Deals with actually chaning the state
	sync_proc: process(CLK,NS,CLR)
	begin
	    -- Example of asynchronous clear
		if (CLR = '1') then
			PS <= ST0;
			
		elsif (rising_edge(CLK)) then
			PS <= NS;
		end if;
		
	end process sync_proc;

	-- Deals with the logic regarding what the next state will be
	comb_proc: process(PS,TOG_EN)
	begin
	
		Z1 <= '0'; -- Prime the value initially
	
		case PS is
		
			when ST0 => -- items regarding state ST0
				Z1 <= '0'; -- Moore output
				if (TOG_EN = '1') then NS <= ST1;
				else NS <= ST0;
				end if;
				
			when ST1 => -- items regarding state ST1
				Z1 <= '1'; -- Moore output
				if (TOG_EN = '1') then NS <= ST0;
				else NS <= ST1;
				end if;
				
			when others => -- the catch-all condition
				Z1 <= '0'; -- arbitrary; it should never
				NS <= ST0; -- make it to these two statements
			end case;
			
	end process comb_proc;
	
	-- assign values representing the state variables
		with PS select
			Y <= '0' when ST0,
				 '1' when ST1,
				 '0' when others;
end fsm2;
```

### Structural Modeling
A hierarchical approach, building larger pieces out of smaller ones. Can make models simpler to understand and read. To do so we need the following elements.
- Entity declaration of the part you want to include
- Architectural definition of that same part
- Component Definition
- Component declaration and port mapping
The following example illustrates.
```
-- First component
entity 3to1decoder is  
   port (L_IN  : in  std_logic_vector(2 downto 0);  
         L_OUT : out std_logic_vector(7 downto 0));  
end 3to1decoder;  
   
   
architecture behaviour of 3to1decoder is  
begin  
   with L_IN select  
       L_OUT <= "00000001" when "000",  
                "00000010" when "001",  
                "00000100" when "010",  
                "00001000" when "011",  
                "00010000" when "100",  
                "00100000" when "101",  
                "01000000" when "110",  
                "10000000" when "111",  
                "00000000" when others;  
end 3to1decoder;  

-- Second Component
entity 4or is  
   port (A,B,C,D : in  std_logic;  
         E       : out std_logic);  
   
architecture behaviour of 4or is  
begin  
   E <= A or B or C or D;  
end behaviour;

entity ckt1 is  
   port (A,B,C : in  std_logic;  
         F     : out std_logic);  
end ckt1;

architecture behav4 of ckt1 is  

	-- Component definition, essentially a copy paste of the
	-- entity.
	-- NOTE we are before the begin line
   component 3to1decoder is  
       port (L_IN  : in  std_logic_vector(2 downto 0);  
             L_OUT : out std_logic_vector(7 downto 0));  
   end component;  
   
   component 4or is  
       port (A,B,C,D : in  std_logic;  
             E       : out std_logic);  
   end component;  
   
	-- Intermediate signals
   signal x : std_logic_vector(7 downto 0);  
   
begin  
	-- port mapping, label is optional
	-- this is explicit port map, order doesn't matter here
   dec: 3to1decoder port map (L_IN(2) => A,  
                              L_IN(1) => B,  
                              L_IN(0) => C,  
                              L_OUT => x);  
   -- implicit port mapping
   -- order matters
   o4: or4 port map (x(0),  
                     x(1),  
                     x(3),  
                     x(4),  
                     F);  
    -- If a local name overlaps with a name in the component
    -- dont worry as there won't be name collisions.
   
end behav4;
```

#### Alternative Way to Declare Components & Changing Component Names
Instead of declaring the `component` in before an architectures `begin` and doing a
```
label: COMPONENT_NAME port map ();
```
You can skip declaring the `component` and use the entity name directly, like this
```
lable: entity ENTITY_NAME port map ();
```
This other option can be useful when your entity only has one architecture corresponding to it. If it has more than one architecture, the default will be chosen, if you don't want this to happen, then you need to create a `component` as we did before, but you have to give it a different name than the `entity` you are using. That brings us into the next section on how to properly map this `componen` you have declared to an actual entity and architecture.

### Configurations
Configurations allow use to have multiple `architecture` statements for a single `entity`. They take the following form.
```
configuration CONFIG_NAME of ENTITY_NAME is

	for ARCHITECHTURE_NAME
	
		for LABEL_NAME : COMPONENT NAME
		
			-- This is the entity name that corresponds to the component
			use entity COMPONENT_ENTITY_NAME(ARCHITECTURE_NAME_YOU_WANT_TO_USE)
			-- The part in the () is the name of the architecture you want to use
		    -- From the entity
		    
		end for;
	end for;
	
end configuration CONFIG_NAME;
```
For reference to what parts the names in the above block correspond to in the `architecture` statement observe the following:
```
ENTITY_NAME is
	ports ( .... )
end ENTITY_NAME;

architecture ARCHITECTURE_NAME of ENTITY_NAME is

	component COMPONENT_NAME is
		ports ( ... );
	end component COMPONENT_NAME;

begin

	LABEL_NAME: COMPONENT_NAME port map ();
	
end ARCHITECTURE_NAME;
```

#### Nesting
Configurations can have a nesting structure. That is to say, you need to specify the mappings of components in the component you are mapping. Take this example from the FFT project as an example:
```
configuration EIGHTPT of STAGE is  
              
     for behav  
    
         -- Select the right fifo  
         for buff : FIFO_COMP  
             use entity FIFO(eight_pt_arch);  
                  
             -- Inside that fifo select the right BRAM  
             for eight_pt_arch  
                  
                 for ram : BRAM_COMP  
                     use entity BRAM(eight_pt_arch);  
                 end for;      
                  
             end for;  
                  
                  
         end for;  
     end for;  
                                               
 end configuration EIGHTPT;
```

#### Declaring and Using a Configuration
Using a configuration is almost identical to declaring a component port map.
```
LABEL_NAME: configuration CONFIG_NAME port map (...);
```
Note that we do not specify a component in the architecture here.

### Data Objects
The 3 different type of data objects are
- signals
- variables
- files
- constants
Example Declarations
```
signal my_sig : std_logic;
variable my_var : integer;
constant my_const : integer range (0 to 255) := 0;

-- Generic version
<data_object> <name> : <data_type> := <initial_value>;
```
**Data objects are not the same as data types.**

### Signals v.s. Variables
Signals are meant to represent a physical wire or connection, variables are not. Signals are also scheduled, meaning they take on different values at different times, this scheduling nature is not true for variables.

Variables can only be declared and used in process statements due to their sequential nature.

In process statements a signal data object is assigned its value only *after* the process statement ends, i.e it can be assigned multiple times within the process statement but its value doesn't change. This is unlike a variable, where the variable takes the assigned value immediately and can be updated and checked within the same process statement.

When assigning values to variables use the `:=` operator.

### Datatypes
- `std_logic`
- `std_logic_vector`
- `boolean`
- `boolean vector`
- `integer`
- `positive` - positive integers
- `integer_vector`
- `character` - 256 symbol enumerated type
- `string` - vector form of character
### User defined types
Types can be defined like so; this specifically is a custom integer type.
`type my_type is range 0 to 100;
`constant my_const : my_type := 31;`
Another
`type state_type is (ST1,ST2,ST3);` - Enumerated type

### Integers
When used as a signal datatype it allows for easier addition and arithmetic operations, and generally speaking integers should be used if a signal is going to be treated as such, rather than a std_logic_vector.
To use integer types make sure to use the `numeric_std` library
`use ieee.numeric_std.all;`
This gives access to the `unsigned` type
Ex: `signal my_data : unsigned(7 downto 0)` - an 8 bit unsigned number
### Fixed Point
For fixed decimal places. Include `ieee.fixed_float_types.all;` and `ieee.fixed_pkg.all;` to get access.
Ex: `signal my_data : sfixed(3, -4)` - 8 bit fixed point, upper 4 is for the left hand side, and lower for is for the right hand side. So this can hold numbers form +/- 2^3 + 2^-4 
```"00000000"
     ^
     |
     This is the left hand side bits (and the sign bit)
     The rest is the right hand side (after the decimal) bits.
```

To cast to a `std_logic_vector` use `to_slv` or `to_std_logic_vector`, this is needed due to the negative index used in sfixed. 

To cast to `sfixed`, use `to_sfixed(number, upper_bits, lower bits`. EX: `to_sfixed(1.0, 3, -4)`

When arithmetic operations are done the output datatype is always sized to fit garuntee that the new number will fit. To resize it to a size, do `resize(num, my_var'high, my_var'low)` there also optional rounding parameters that I didn't use here.

To print out fixed point numbers first convert them to `real` using `to_real` and then use the `real'image(my_num)` function to turn it into a string.

### For loops
Only work in process statements, should generally be used when the number of iterations is known.
```
my_label: for index in a_range loop
	sequential statements...
end loop my_label;
```
The index variable is automatically created and will overshadow other variables of the same name. The range can be given as a type or a range statement, `for index in 0 to 24 loop`
If the range is specified as a type, it can be any kind of enumerated type.

### While loops
Work only in process statements, should be used when the number of iterations is unknown or varies.
```
my_label: while (condition) loop
	sequential statements...
end loop my_label;
```

### Loop control
`exit` and `next` can be used in loops to break out, and move to the next iteration respectively.

### Reserved Words in VHDL
```
abs downto library postponed srl  
access else linkage procedure subtype  
after elsif literal process then  
alias end loop pure to  
all entity map range transport  
and exit mod record type  
architecture file nand register unaffected  
array for new reject units  
assert function next rem until  
attribute generate nor report use  
begin generic not return variable  
block group null rol wait  
body guarded of ror when  
buffer if on select while  
bus impure open severity with  
case in or signal xnor  
component inertial others shared xor  
configuration inout out sla  
constant is package sll  
disconnect label port sra
```

### Useful Libraries
```
library IEEE;
-- essential IEEE libraries
use IEEE.std_logic_1164.all;
use IEEE.numeric_std.all;

-- more IEEE libraries
use IEEE.numeric_signed.all;
use IEEE.numeric_unsigned.all;

use IEEE.numeric_bit.all;
use IEEE.math_real.all;
use IEEE.math_complex.all;

-- Fixed floating point
use IEEE.fixed_pkg.all;
uxe IEEE.fixed_float_types.all
```

### Packages
To create a package follow the following syntax.
```
library ieee.
-- things you need to use here

package my_pkg is
-- Include type definitions you want throughout the whole package here
-- Include function prototypes here (essentially the function with no body)
end package;

package body my_pkg is
	-- function definitions
	-- entities and architechtures (don't foreget to redeclare the library 
	-- and component you need before the entity statement!)
end package body;
```

### Functions and Procedures
Functions -> return values
Procedures -> like functions but return nothing

Function and procedure prototype
```
function  compute(a : integer) return integer;
procedure helper (b : integer);
```

Definitions
```
function compute(a: integer) return integer is
	-- variable declarations here
begin
	-- code here
end function;

procedure helper(b: integer) is
	-- variable declarations here
begin
	-- code here
end procedure;
```