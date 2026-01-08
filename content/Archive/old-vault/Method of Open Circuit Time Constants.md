The Method of Open Circuit Time Constants is a technique to approximate the upper cutoff frequency of a transistor amplifier.

## General Idea
The [[Transfer Function]] has [[Transfer Function Poles|poles]] and [[Transfer Function Zeros|zeros]], but in this case we are only interested in the poles since we are interested in a high frequency drop off, see [[Bode Plots]] if this doesn't make sense. So, we essentially say that one pole will dominate in the high frequency region so, if we can find that pole frequency we can roughly approximate the upper cutoff frequency to be there.

When we say a pole dominates we mean that it is a few orders of magnitude than all other poles or zeros in the transfer function. This is true, or close to true, in many situations with transistor amplifiers so it turns out to be a good approximation in general.

## Method
So, we are assuming we have a pole that looks like
$$
\frac{1}{\frac{s}{\omega_{H}}+1}
$$
we want to find $\omega _H$ and $f_{H}$.

Turns out we can approximate $\omega_{H}$ as
$$
\omega_{H}= \frac{1}{\sum C_{n}R_{n}}
$$
Where $C_{n}$ is the capcitors that we get from our [[MOSFET Amplifier Frequency Analisys|Mosfet HF Model]] or [[BJT Amplifier Frequency Analisys|BJT HF Model]], and $R_{n}$ are the resistances that each capacitor see's when all the other capacitors are *open circuited*.

So, here is the procedure.
1. Draw your HF model of your transistor amplifier & identify internal  capacitance's.
2. Short all external capacitance's.
3. Short all independent Voltage Sources, and Open circuit all independent Current Sources. (Keep $R_{sig}$)
4. Select a capacitor to begin with and replace it with a test voltage source $V_{x}$.
5. Open Circuit all the remaining capacitors.
6. Determine the current through $I_{x}$ , or the resistance that $V_{x}$ see's (by inspection).
7. Calculate $R_{n}=\frac{V_{x}}{I_{x}}$
8. Repeat the steps for each internal capacitor in the HF model, whilst saving the resistance values gotten for each.
9. Calculate the above sum to obtain $\omega_{H}$
10. Calculate $f_{H}$ using $f_{H}=\frac{\omega_{H}}{2\pi}$
