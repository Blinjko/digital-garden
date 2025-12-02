[Site](https://learninglink.oup.com/access/sedra8e)

Metal Oxide Field Effect Transistors (MOSFET's) a a different type of 3 terminal device similar in operation to the BJT.

![[Pasted image 20250930074258.png]]

## Function
So, how does a MOSFET work? Well, when a potential is applied at the gate a channel is formed betweeen the drain and source regions allowing current to flow from the drain to source. There is an insulating layer between the gate and the channel region, this makes it so that very little current flows from the gate into the channel. The gate and the body form a capacitor like junction where the Oxide region is the dielectric between the two plates.

In order for a channel to be produced the gate must cross a threshold voltage, $V_{tn}$ or $V_{tp}$ depending on if we are taking about NMOS or PMOS. NMOS is like the model shown above, and when a voltage above the threshold is applied to the gate a n-channel is created in the body, PMOS is essentially the opposite. A PMOS has all the n and p type regions swapped with one another, but otherwise is exactly the same.

So if there is no voltage across the drain and source but we apply a gate voltage, we will get a continuous n channel. As we apply more of a drain-source voltage we see that there is a voltage gradient in the body and since the gate voltage is relative to the body, and this difference between the gate voltage and body voltage is what forms the channel, the channel becomes tapered (like a triangle). And eventually if $V_{DS}$ gets large enough it pinches off and the current flowing through the channel will become constant.

A visualization of this
![[Pasted image 20250930075253.png]]

This brings us into our next topic.

## Areas of Operation

Before we begin we must define a quantity, $V_{ov}$, the overdrive voltage.
$$
V_{ov}=V_{GS}-V_{tn}
$$
or for PMOS
$$
V_{ov}=V_{SG}-|V_{pn}|
$$
Essentially the overdrive voltage is how much higher the gate voltage is then the threshold voltage.

So there are 3 areas of operation, 
- Cutoff - no current flowing through the drain $I_{D}=0$
- Tiode - $V_{ov}>V_{DS}$  $I_{D}$ varies with $V_{DS}$
- Saturation - $V_{ov}\leq V_{DS}$ $I_{D}$ is independent of $V_{DS}$


![[Pasted image 20250930080004.png]]

## I-V Relationships

When in the saturation region, $I_{D}$ is given by
$$
I_{D}=\frac{1}{2} k_{n}'\left( \frac{W}{L} \right)V_{ov}^{2} =\frac{1}{2} k_{n}'\left( \frac{W}{L} \right)(V_{GS}-V_{tn})^{2}
$$
Where 
$$
k_{n}'=C_{o x}\mu_{n}
$$
Where $C_{o x }$ is a capacitance parameter of the transistor in units of $\frac{F}{m^{2}}$, $\mu_{n}$ is a parameter in units of $\frac{m^{2}}{V\cdot s}$ and when we multiply them we get units of $\frac{F}{V\cdot s}=\frac{A}{V^{2}}$ . When doing calculations with these just make sure all your units match up otherwise you will get errors.

For the triode region we have a similar equation
$$
I_{D}=k_{n}'\left( \frac{W}{L} \right)\left( V_{ov}-\frac{1}{2}V_{DS} \right)V_{DS}
$$

The following image sums it all up clearly too.
![[Pasted image 20250930081109.png]]

## Early Voltage / Channel Length Modulation
We said before that in saturation $I_{D}$ was constant and independent of $V_{DS}$, but in reality this is not true. In saturation there is a slight slope on the $I_{D}$ $V_{DS}$ curve, thus suggesting there is some sort of resistance. We can also extrapolate the slopes of different lines for different $V_{ov}$'s and find that they meet somewhere on the negative horizontal axis.

![[Pasted image 20250930082609.png]]

The value that these lines meet is $-V_{A}$ and dependent on the process and technology that the MOSFET was made with.

We define
$$
V_{A}= \frac{1}{\lambda}
$$
It can also be written as
$$
V_{A}=V_{A}'L
$$
Where $L$ is the channel length and $V_{A}'$ is a parameter of the device.

We can define the output resistance as
$$
r_{o} \equiv \left[ \frac{\partial I_{D}}{\partial V_{DS}} \right]^{-1}_{V_{GS}\text{ constnat}} 
$$
$$
r_{o} = \left[ \frac{\lambda k_{n}W}{2L}(V_{GS}-V_{tn})^{2} \right]^{-1}=\frac{1}{\lambda I_{D}'} = \frac{V_{A}}{I_{D}'}
$$
Where $I_{D}'$ is the drain current not taking into account the early effect.

We now have to redefine our equation for $I_{D}$ in saturation mode to take into account the early effect, this gives us
$$
I_{D}=\frac{1}{2} k_{n}'\left( \frac{W}{L} \right)V_{ov}^{2}(1+\lambda V_{DS})
$$
Notice that now the current in saturation mode depends both on $V_{ov}$ and $V_{DS}$.

## PMOS Table
A useful table describing the details about PMOS, and the equation with it. Notice that they are exactly the same except that all the voltages are inverted.

![[Pasted image 20250930083812.png]]

## Small Signal Model

For doing AC analysis we use a small signal model, which is derived in the text but I will not derive it here.

The summary table is
![[7.2-table.png]]

A point on notation, $V_{GS}$ means the DC value, $v_{gs}$ is the AC small signal value, and $V_{gs}$ is the combined DC and AC values. So
$$
V_{gs}=V_{GS}+v_{gs}
$$
The process we use to solve circuits like this is:
1. Solve the DC operating point first. This is needed to find $g_{m}$. Sometimes the early effect is ignored here even if a $\lambda$ is given.
2. Replace the transistor with it's equivalent circuit and solve for the desired quantities. Don't forget to neglect DC components, that is short DC voltage sources, open circuit DC current sources.

Generally what we want to find is $A$, the amplification, and $r_{in}$ from the perspective of the terminal we are sending our input signal into. These are defined as:
$$
A=\frac{v_{o}}{v_{i}}
$$
Where $v_{o}$ is the small signal output voltage, taken wherever you want to take it from. $v_{i}$ is the signal you are amplifying. Usually we evaluate this into an expression of the surrounding circuit elements to get an understanding of what is contributing to our amplification. The same formula could be used for current as well, except that would just be current amplification.

$$
r_{in}=\frac{v_{i}}{i_{i}}
$$
The input resistance at the terminal we are applying $v_{i}$ to is the small signal input voltage divided by the current flowing **in terms of the small signal model**. There might or might not actually be current here.
