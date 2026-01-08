Circuits can be described using netlist files. The way that this is done is by stating the components, their type, name, and what nodes they are connected to. There are also commands that can be put into the file and executed by the SPICE simulator.

## Useful Links
[LTSpice MOSFET](https://www.ltwiki.org/LTspiceHelp/LTspiceHelp/M_MOSFET.htm)

## Rules to follow
1. First line of the file is always taken as the name
2. `0` is always the ground node
3. Every component must have a  unique name
4. The first letter of a components name is taken as its component type identifier (resistor, capacitor, etc..)
5. Lines that begin with a dot, like `.model` are commands to be executed by the simulator.
6. Comments begin with `*` and are line based.
7. The file must end with the `.end` directive.


## Letters and their corresponding components
- `V` - independent voltage source 
- `I` - independent current source
- `Rname node node value` - Resistor
- `Cname node node value` - Capacitor
- `Lname node node value` - Inductor
- `Dname node_pos node_neg model_name` - Diode
- `Qname collector base emitter model_name` - BJT
- `J` - JFET
- `M drain gate source body model_name` - MOSFET
- `T` - Lossless transmission line
- `E<name> <+node> <-node> <+controlling node> <-controlling node> <gain>` - VCVS
- `F<name> <+node> <-node> <controlling voltage source name> <gain>` - CCCS
- `G<name> <+node> <-node> <+controlling node> <-controlling node><transconductance>` - VCCS
- `H<name> <+node> <-node> <controlling voltage source name> <transresistance>` - CCVS
## Analysis Directives
- `.DC SOURCE_NAME START STOP STEP` - DC voltage sweep
- `.AC SOURCE_NAME LIN/DEC NUM_POINTS START_FREQ END_FREQ` - AC analysis
- `.TRAN STEP_SIZE STOP_TIME START_TIME` - Transient analysis
- `.OP` - do a steady state DC analysis.
- `.meas <type> <name> <operation> <what to measure> <conditions>` - Measure a value, outputs in spice log

## Model Directive
- `.MODEL MODEL_NAME MODEL_TYPE (PARAMETERS)` - define a model to use.

## Model types
- `D` - Diode
- `NPN` - NPN BJT
- `PNP` - PNP BJT
- `NMOS` - N Channel Mosfet
- `PMOS` - P Channel Mosfet

## Output Directives
- `.print ANALYSIS_TYPE WANTED_VALUES` - Includes printed sets of node voltages and currents of the circuit components included on the line
- `.probe` - Include if using PSpice, it prepares the output for the post processor. Other spice programs do this automatically (LTSpice), so you don't need it.


## Example Of Transistor Circuit
```
Common Emitter Transistor Amplifier

*Define an AC voltage source
VS 1 0 AC .01 SIN 0 .01 10K

* Resistor named 'S' connected between nodes 1 and 2, with a value of 50 ohms
RS 1 2 50

* Capacitor named 'B1' connected between nodes 2 and 3 with a value of 10 micro farads*
CB1 2 3 10UF

* More resistors *
RB1 3 0 10K
RB2 3 4 40K

* Define a DC voltage source connected between nodes 4 and 0, with a value of 20*
VCC 4 0 20

* Define a BJT transistor using model bjt1 *
Q 5 3 6 bjt1

RE 6 0 2K
CE 6 0 20UF
RC 5 4 4K
CB2 5 7 1UF
RL 7 0 1K

* Define our transistor model along with its parameters*
.MODEL BJT1 NPN(IS=100F BF=100 BR=4 CJE=.5P VJE=0.7 MJE=0.5 CJC=2P VJS=0.7 MJS=0.5)

* Perform AC analysis, decade, 10 points per decade, start at 0.001 Hz and end at 1GHz*
.AC DEC 10 0.01 1G

.end
```