The Method of Short Circuit Time Constants is used to find an approximation of the lower cutoff frequency of a transistor amplifier. 

## General Idea
Generally the lower cutoff frequency of a transistor amplifier is from external capacitors (like coupling capacitors) in the circuit. You could get the [[Transfer Function]] and plot the [[Bode Plots|Bode Plot]] to find the cutoff frequency but that isn't always easy, hence this technique.

We assume that the circuit's transfer function has a dominant [[Transfer Function Poles|pole]], which is a pole that is a few orders of magnitude less than all other poles and [[Transfer Function Zeros|zeros]] in the transfer function.

We then say that the lower cutoff frequency approximately occurs at this pole, so if we can find the frequency of this pole, we can use that as an approximation of the lower cutoff frequency.

## Method
We assume we have a pole that looks like
$$
1+\frac{s}{\omega_{L}}
$$
Where $\omega_{L}$ is our lower cutoff frequency in radians per second. So how do we find $\omega_{L}$? Well we use this approximation.
$$
\omega_{L} =\sum_{1} \frac{1}{C_{n}R_{n}}
$$
Where $C_{n}$ is an external capacitance, and $R_{n}$ is the resistance that that specific capacitance see's. We sum up this value for all the external capacitances and that is our $\omega_{L}$.

So, how do we find $R_{n}$? Well, simply follow the procedure below.
1. Draw the small signal circuit of your [[MOSFET]] amplifier or [[Bipolar Junction Transistors (BJT)|BJT]] amplifier whilst *including the external capacitance's*. Note we are *not* using the High Frequency Version since we only want to consider the external capacitance's.
2. Short Independent Voltage Sources, and Open Circuit Independent Current Sources. (Keep $R_{sig}$)
3. Select a capacitor, replace it with a Independent Voltage source $V_{x}$.
4. Short Circuit all other capacitors.
5. Either find $I_{x}$, the current through $V_{x}$, or if possible, by inspection, determine the resistance $V_{x}$ sees (which would be $R_{n}$).
6. If you found $I_{x}$ compute $\frac{V_{x}}{I_{x}}=R_{n}$ 
7. Repeat for all capacitors until you get all the $R_{n}$'s
8. Compute $\omega_{L}$ using the formula above.
9. Compute $f_{L}$ using $f_{L}=\frac{\omega_{L}}{2\pi}$