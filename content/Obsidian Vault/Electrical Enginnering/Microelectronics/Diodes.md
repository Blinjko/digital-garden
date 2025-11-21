Diodes are the simplest active circuit element. The circuit symbol for a diode is shown below.
![[Pasted image 20250830085631.png]]
## Properties
Diodes are devices that allow current to flow through them when they are forward biased only. So, if the diode is reverse biased then no current will flow.

Essentially with an ideal diode:
1. Forward Bias = Short circuit
2. Reverse Bias = Open circuit

### Forward and Reverse Bias
Forward bias means that the voltage at the anode, the positive terminal, is larger than the voltage at the cathode, the negative terminal. Note that this is **not** the magnitude of the voltage.

So, as a quick reference
1. If $V_{+}\gt V_{-}$ then you are forward biased
2. If $V_{+} \lt V_{-}$ then you are reverse biased.

### Ideal Diode
1. Has no voltage drop across it.
2. If it has any amount of forward bias, it acts as a short circuit
3. If it has any amount of negative bias, it acts as a open circuit

### Real Diodes
Real diodes are made of semiconductors like silicon or germanium. Unlike an ideal diode, real diodes usually need a certain amount of forward bias before they start conducting and allowing any significant amount of current to flow through them. This also results in there being a voltage drop across the diode. Now, what quantity of this voltage is depends on the diode and its properties, but we will generally assume it is 0.7 Volts for a silicon diode.

A real diode also has what is known as a reverse breakdown voltage. This is reverse bias voltage needed to cause the diode to conduct in reverse, which could, and usually does, ruin the diode. Most diodes have a large reverse breakdown voltage, but it is still something we have to consider.

![[Pasted image 20250830091435.png]]
## Diode Exponential Model
The exponential model is one model that is used to mathematically replicate a real diodes' Current - Voltage relationship. It is as follows:
$$
I_{D}=I_{s}(e^{V_{D}/V_{T}}-1)
$$
Where:
1. $I_{D}$ is the current flowing through the diode
2. $I_{s}$ is the scale current, or also known as the saturation current. This is the current that flows through the diode when it is reverse biased (before breakdown).
3. $V_{D}$ is the voltage across the diode.
4. $V_{T}=\frac{kT}{q}$ is the thermal voltage, a constant.
	1. $k$ is the Boltzmann Constant, $1.38\times 10^{-23}$ Joules Per Kelvin
	2. $T$ is the absolute temperature in Kelvin
	3. $q$ is the magnitude of electronic charge, $1.6 \times 10^{-19}$ Coulomb.

Generally we assume that we are operating at room temp, 20 degrees Celcius, and that yields us a value of $V_{T} =0.0253$ Volts, so we will be using this going forward.

### Simplification
Generally for any $I_{D} \gg I_{s}$ we can simplify the above equation to:
$$
I_{D}= I_{s}e^{V_{D}/V_{T}}
$$
This is because the exponential becomes significantly larger than 1, so the 1 doesn't end up really contributing much to the equation.

### Difference of Voltages
We can rearrange the simplified exponential model to give us a difference and voltages and currents, which can be useful in solving for values, as we will see soon.

Suppose we have:
$$
I_{1}= I_{s}e^{V_{1}/V_{T}}
$$
And
$$
I_{2}= I_{s}e^{V_{2}/V_{T}}
$$
If we divide these equations we can get rid of $I_{s}$.
$$
\frac{I_{2}}{I_{1}}=e^{\frac{V_{2}-V_{1}}{V_{T}}}
$$
Taking the logarithm and rearranging yields:
$$
V_{2}-V_{1}=V_{T}\ln\left( \frac{I_{2}}{I_{1}} \right)
$$
So as long as we know three of these values, we can find the remaining one. This will be useful when we need to solve for diode voltages and currents, since it leaves out the need to us to compute or know $I_{s}$.

## Solving for Diode Currents & Voltages

Suppose we have the circuit:
![[Pasted image 20250830093330.png]]
And we are told the diode as a current of 1mA at when $V_{D}=0.7$ Volts.
### Using the Exponential Model and Iteration
From the given circuit we can extract an equation using KVL.
$$
V_{DD}=RI_{D}+V_{D}
$$
We also have the equation from our exponential model:
$$
I_{D}=I_{s}e^{V_{D}/V_{T}}
$$
Assuming that we know $V_{DD}$ and $R$, this leaves us with 2 unknowns, $I_{D},V_{D}$. However, having the exponential makes this a transcendental equation which is rather difficult to solve analytically (if it is even possible). So, that leaves us with a numerical method. It works as follows.
1. Assume an initial value for $V_{D}$ is 0.7 Volts
2. Compute $I_{D}$ via our KVL Equation
3. Use our re-arranged, voltage difference exponential equation from before to solve for the Voltage. 
4. Repeat this process with the new voltage, 2 to 3 times. Every iteration gets closer to the value.

#### Example
$V_{DD}=5$ Volts, $R=1$ k$\Omega$ , and we know when $V_{D}=0.7$ Volts, $I_{D}=0.001$ Amps

So, first we compute the new $I_{D}$ assuming $V_{D}=0.7$
$$
I_{D}=\frac{V_{DD}-V_{D}}{R}=\frac{5-0.7}{1000}=0.0043
$$
Then we compute our new $V_{D}$ value using the exponential equation.
$$
V_{2}-V_{1}=V_{T}\ln\left( \frac{I_{2}}{I_{1}} \right)
$$
$$
V_{2}=0.025\ln\left( \frac{0.0043}{0.001} \right)+0.07= 0.736
$$
We can then repeat the process by plugging our new $V_{D}$ value, $0.736$ into the KVL equation to get the new $I_{D}$, then using the exponential equation again. You will find though, that the value does not change that much, and that we find that $V_{D}=0.73$ Volts roughly, and $I_{D}=4.3$ mA roughly.

While the exponential model is the most accurate, it is not the most efficient in terms of time, and usually when we are designing circuits we do not want to spend much time on analyzing them, because we will often have to make changed and re-analyze them.


## Using The Constant Voltage Drop Model
In this model, we simply just assume that there is a constant voltage drop across the diode. For silicon diodes we experimentally know that this value is around 0.7 volts, so we will be using this value. 

The technique here is not as accurate as the exponential model, but as we found earlier, it yields a pretty close approximation which is often good enough for when we are coming up with schematics and designs initially.

The technique here is simple and self explanatory really, if the forward bias is less than the constant voltage drop, the diode doesn't conduct and acts as an open circuit. If the forward voltage across the diode is larger than the constant drop, then the diode conducts, and we assume a short.

#### Example
$V_{DD}=5$ Volts, $R=1$ k$\Omega$ , and we know when $V_{D}=0.7$ Volts, $I_{D}=0.001$ Amps

Using the circuit above again, we can derive our KVL equation like before. We can use this equation to solve for $I_{D}$
$$
I_{D}=\frac{V_{DD}-V_{D}}{R}=\frac{5-0.7}{1000}=0.0043
$$
This was much quicker than the iteration method, and was only off by 10's of mV's.

## Using the Small Signal Model
The small signal model essentially uses a tangent line approximation of the exponential model to linearize the diode. However, since the tangent line approximation is only valid for values close to the tangent point, a single tangent line can only be used for minor fluctuations in a signal, if they grow larger, a new tangent line must be used.

Approximating the diode as a linear line means it will have some resistance value, this is the inverse of the slope of the tangent line. There of course will also be a voltage offset of the tangent line should we want the absolute voltage across the diode. Using this approximation, we can then replace the diode in our circuit with a resistor and voltage source in series. Where the resistor value is the resistance of the diode, and the value of the voltage source is the voltage value we anchored the tangent line at.

Note that if we only want to solve for the change in voltage across the diode, we do not include the voltage source part of the diode and only replace the diode with its "resistance". The voltage across the resistance is the change in voltage across the diode.

Note that we use the term $V_{Q}$, becuase the voltage we anchor the tangent line at is called the Q-point, or the Quiescent point.

### Derivation of diode resistance
To use the model we described, we need to know how to compute the diode's resistance at a given $V_{Q}$ and $I_{Q}$. We do this by getting the slope of the exponential model at that location.
$$
\frac{d}{dV_{D}}\left( I_{s}e^{\frac{V_{D}}{V_{T}}} \right) = \frac{I_{s}}{V_{T}}e^{\frac{V_{D}}{V_{T}}}=\frac{I_{D}}{V_{T}} = \rho_{D}
$$
Recall that:
$$
I_{D}=I_{s}e^{\frac{V_{D}}{V_{T}}}
$$

The  resistance is defined as the the inverse of the slope, that is the inverse of the conductance, $\rho$ thus:
$$
r_{D}=\frac{V_{T}}{I_{D}}
$$
Assembling the tangent equation then allows us to get a linear equation for the voltage through the diode given a change in current (from the $I_{Q}$).

To calculate the change in current based on the change in voltage we have an equation akin to ohms law.
$$
v_{D}=i_{D}r_{D}
$$
Note that this equation only accounts for the changes relative to the Q point, so to get the absolute values we have to factor in the Q point values to get.
$$
v_{D}=(i_{D}-I_{Q})r_{D}+V_{Q}
$$
Keep in mind that this approximation is only really valid when where are close to the Q point, specifically around 5 mV within it. The more linear the function is near the tangent though, the larger this range becomes.

### Solving for ripple, change in voltage across diode
When using the small signal model of the diode, we can more easily solve for voltage ripple due to changes in the source voltage or due to loads. Recall that the change in voltage across the diode is equal to the voltage across the "resistance" of the diode. However when replacing the diode with its resistance, we must make sure we are modeling the circuit that only includes the ripple effects. That is to say that all the DC components of the circuit are already accounted for and transformed in their proper manner. (DC voltage sources short, Current sources open circuit). It is often useful to model loads not as resistors but as current "sources" pulling current from the regulator circuit.

So the process looks like:
1. Solve the DC circuit with the diode, for the small signal model to be used we need to know the current through the diode here.
2. Create the circuit that has no DC parts and replace the diode with it's resistance.
3. Solve the circuit either using phasors, or regular circuit methods to determine the ripple across the diode and other devices.