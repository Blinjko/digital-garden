When making a [[MOSFET]] amplifier one of the things we design for is a particular [[Bode Plots|frequency response]]. So then, using the [[MOSFET|Mosfet Small Signal Model]] how can we account for frequency?

The answer is simple, include the capacitive effects in the model. Specifically internal capacitances and external capacitances.

What we generally find is that
- External Capacitors (Coupling Capacitors) $\implies$ give a Lower Cutoff Frequency
- Internal Capacitances $\implies$ give an Upper cutoff frequency.

We can improve the lower cutoff frequency by removing the external capacitors, but unfortunately we cannot get rid of the parasitic capacitance of the transistor. Nonetheless, we have techniques to find good approximations of the upper and lower cutoff frequencies.

## The High Frequency Small Signal Model

Take a look at the table
![[mosfet-hf-model.png]]

Usually we are working with Mosfets where the source and body are connected so we neglect $C_{sb}$ and the dependent current source $g_{mb}V_{bs}$. Also, it is common to neglect $C_{db}$ and only really include $C_{gs}$ and $C_{gd}$.

So, simply put, to make the Mosfet small signal model account for frequency we add 2 capacitors (assuming that we following what the previous paragraph says).
1. $C_{gs}$ between the gate and source
2. $C_{gd}$ between the gaite and drain.
## Acquiring the Frequency Response
For the frequency response of a transistor, we generally see something like a bandpass filter, except the gain in the midband is not 1, its just the normal amplifier gain we have been finding using the small signal model. So, how do we find the frequency response? 

Well there are roughly 3 ways.
1. Include the capacitors in your circuit and model them as impedances and get the [[Transfer Function]].
2. Find the lower cutoff frequency and upper cutoff frequency using 
	1. The [[Method of Open Circuit Time Constants]] to find the upper cutoff frequency.
	2. The [[Method of Short Circuit Time Constants]] to find the lower cutoff frequency.

Note that when using the Method of Open Circuit Time Constants, we short all external capacitors. 

Similarly when using the Method of Short Circuit Time Constants, we open circuit, or just don't include, the internal capacitors of the transistor (I.E we use the normal small signal model but include only the external capacitors).
