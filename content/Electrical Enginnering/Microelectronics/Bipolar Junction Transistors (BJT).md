BJT's are a type of active 3 terminal device. The three terminals are called:
1. Base
2. Collector
3. Emitter

The devices are made up of 3 regions of silicon, all which touch each other. A NPN transistor has N-type collector and emitter, and the base is P-type. In a similar manner PNP has a P-type collector and emitter, and an N-type base.

Thinking about how a diode works will make the operation here make more sense. A diode is a PN junction where the P is the positive part of the diode (a regular one not zener), and the negative part is the N part. So if the P type is at a certian potential higher than the N type, the diode conducts and current flows. If the diode is reverse biased, then the N part has a higher potential than the P part, current will not flow (assuming we don't have breakdown).

A BJT transistor operates in a similar but slightly different fashion.

## Active Mode
In active mode of operation in an NPN BJT there is a positive bias across the base-emitter junction, denoted as $V_{eb}$. This causes current to conduct and flow from the base into the transistor and out of the emitter. However, in active mode we need the base collector junction to be reverse biased, that is $V_{bc}<0.4$. This means that the collector should not conduct current, but it does, and in fact it conducts most of the current, that is $i_{c}\gg i_{b}$. It is also important to note that in an NPN current flows into the collector and base, and out the emitter, thus $i_{e}=i_{c}+i_{b}$.

### Why Current Flows Through the Collector
To understand this we have to imagine the real direction of current flow, which is the inverse of the flow of conventional current.

In reality electrons are flowing into the emitter and going out the base. However, due to the way BJT's are made, the base is very small and thin, so electrons overshoot and end up passing through it going into the collector region and out the collector terminal. This flow of electrons is our collector current.

### Equivalent Circuit Models
There are equivalent circuit models of the BJT in active mode that involve a diode and a current source, but I will not be including them here because I have yet to find them that useful.

### Active Mode Relations and Quantities
So we have a transistor in active mode, or we are assuming that it is in active mode, so how do we relate all the quantities?

Well, there are equations and there are reasons for why they have their respective parameters, but I do no think there is any significant reason to go to deep into it as it doesn't really help our analysis. In reality analyzing many transistor circuits is a computer job, and the methods we will employ aim to get quick calculations done that are not exact but accurate enough to understand the functioning of the circuit.

So for Active mode we have the following relations
$$
\beta=\frac{i_{c}}{i_{b}}=\frac{\alpha}{\alpha-1}
$$
$$
\alpha=\frac{i_{c}}{i_{e}}= \frac{\beta}{\beta+1}
$$
$$
\large i_{c}=I_{s}e^{V_{be}/V_{T}}
$$
$$
\large i_{b}=\frac{I_{s}}{\beta} e^{V_{be}/V_{T}}
$$
$$
\large i_{e}=\frac{I_{s}}{\alpha}e^{V_{be}/V_{T}}
$$
Where $\beta$ is known as the common-emitter current gain, and $\alpha$ is the common-base current gain.
$$
V_{be}= \text{voltage between base and emitter}=V_{b}-V_{e}
$$
$$
V_{bc}=\text{voltage between base and collector} = V_{b}-V_{c}
$$
$$
V_{ec}=\text{voltage between emitter and collector} = V_{e}-V_{c}
$$
Note that switching the order of the letters simply negates the value i.e:
$$
V_{be}=-V_{be}
$$
### Solving with PNP's
It is exactly the same as with NPN, but we use $V_{eb}$ instead of $V_{be}$, this is because the bias has to be flipped for the transistor to work. For all the the other relations for NPN, we would also flip the order of the way we measure the voltage. I.E if we have $V_{bc}$ in a NPN equation, we would have $V_{c b}$ in the PNP equation.
### Valid Assumptions in Active Mode
When operating in active mode we might have to make a few assumptions to begin solving. One such assumption is that $|V_{be}|=0.7$, that is the magnitude of the voltage across the base-emitter junction is 0.7 volts.  This makes sense when we think about what we know from diodes. Note that we have to be careful if we are using an NPN or PNP because if we are using a PNP then $V_{eb}=0.7$, and if we are using an NPN, $V_{be}=0.7$, just think about what would need to be forward biased and it will make sense.

### Verifying Active Mode Operation
The things we need to satisfy Active Mode Operation are, for an NPN:
1. $V_{be}$ is forward biased, generally around $0.7$ volts
2. $V_{bc}$ is reverse biased, generally less $0.4$ volts, if it is greater than we are likely forward biased and operating in saturation mode.

So to show that a device is not in active mode, or that it is saturation mode, we:
1. Assume in active mode
2. Solve for the quantities.
3. Show that the values violate one of the rules of active mode.
4. Thus we must be in saturation mode.

## Saturation Mode
Occurs when the base-emitter junction and the base-collector junction are forward biased.
![[Pasted image 20250917082526.png]]
As we can see in the above graph, when the base-collector junction starts becoming forward biased the current through the transistor starts heavily depending on the voltage across the collector base junction. Note that in the figure above, going to the left is becoming more forward biased, whilst going to the right is becoming more reverse biased.

This also lines up with what we seen before in active mode. In active mode there is a current flowing through the base, but it is generally very small, and the larger the $\beta$ the smaller it is. Thus $i_{e}\approx i_{c}$ if $\beta\gg$ . We can see in the above figure that as the base-collector junction becomes more reverse biased (assuming that the base emitter junction is still forward biased), the current through the emitter approaches a roughly constant value and doesn't change much when the base collector voltage changes.

### Solving Transistors in Saturation Mode
If we have to solve a transistor in saturation mode, we simply cannot use the equations we had before for active mode. 
What we can assume is:
1. $V_{be}=0.7$ if it is not given and we know we are in saturation mode or are assuming  active mode
2. $V_{ce}=0.2$ volts, for $V_{ce}$ around this value represents a transistor deep into saturation, for a transistor on the edge of saturation we can assume $V_{ce}=0.3$ and $V_{bc}=0.4$.

Once we make these assumptions we can then use KVL and other methods to solve for the terminal voltages and currents.

In saturation mode we have $\beta_{forced}$ which is defined as:
$$
\beta_{forced}=\frac{i_{c}}{i_{b}}
$$
and
$$
\beta_{forced} < \beta
$$
In fact we can generally change the $\beta_{forced}$ by manipulating the base-collector bias.

## Early Effect
For a real transistor operating in active mode we will see that $i_{c}$ depends not only on $i_{b}$ and $V_{be}$ but also $V_{ce}$, the collector voltage. Thus instead of having a flat perfectly horizontal line in active mode, we get a sort of linear line.
![[Pasted image 20250924073009.png]]
We can trace lines from the slopes of these lines, each one representing a different $V_{be}$ value, and find that they meed at some point on the negative $V_{ce}$ axis, we call this point $V_{A}$ and it is known as the early voltage.

Basically what we care about is that our idealized model of the transistor is not really correct and if we include the Early effect, we can make it more accurate. To do this we can modify our equation for $i_c$ from before to become:
$$
i_{c}=I_{s}e^{V_{be}/V_{T}}\left( 1+ \frac{V_{ce}}{V_{A}} \right)
$$
This equation accounts for the early effect and gives us a more accurate model of the transistor in active mode. Note that the equation above is for a npn BJT but this logic still holds for pnp.

Note that in our idealized model we had flat lines in the active region, that is to say they had 0 slope, and thus we could say that the collector had infinite resistance. However, not looking at the early effect, we can see that there is a slope and thus the resistance is not infinite. Thus we define the output resistance, $r_{o}$ as
$$
r_{o} \equiv \left(  \frac{\partial i_{c}}{\partial V_{ce}} \right)^{-1} \text{ for a constant } V_{be}
$$
Using the new $i_{c}$ equation that accounts for early voltage this gives
$$
r_{o}=\frac{V_{A}+V_{ce}}{I_{C}}
$$
Where in this case, $V_{ce}$ and $I_{C}$ are the coordinates on the $i_{c}$ curve, at which the transistor is operating at. Note that on that $i_{c}$ curve we are taking into account the Early effect.

We can decide to not take into account the early effect and rewrite $r_{o}$ as
$$
r_{o} = \frac{V_{A}}{I_{C}'}
$$
Where the $I_{C}'$ represents the $i_{c}$ value on the curve where the Early effect is not accounted for. Normally we will just drop the $'$ and calculate the resistance while not including the early effect.


## Solving For Transistor Qualities
If the circuit looks like something of the form
![[Pasted image 20250925190735.png]]It is easy to solve for the quantities assuming we know $\beta$ or some other quantity, otherwise we cannot solve.

The process.
1. Assume active mode
2. Assume $V_{be}=0.7$
3. Use KVL in some manner to calculate a current.
4. Use other known quantities and equations to solve for the remaining quantities.
5. Verify in active mode, if not proceed with assumption that we are in saturation mode and restart.

Overall it is pretty easy and straightforward.

However if we get a circuit like
![[Pasted image 20250925191109.png]]
It becomes a bit harder...

So what do we do? Well the problem here is the resistor bias network, it is really jacking up our usual solving process. So what we will do is do a thevenin equivalent like so.
![[Pasted image 20250925191247.png]]
Where $A$ is attached to the base of the transistor.

Doing so allows us to simplify the circuit into one like before, where then we can solve it like we normally would.

This is important because this will come up frequently in practice.

## Small Signal Model

The small signal model is used to analyze BJT circuits with small signal (AC) inputs. Note that the signal has to sweep less than 50mV otherwise our linearized version of the model will be inaccurate, but still partially insightful. 

I will not do the derivations here, they are in the book. The summary table is provided below.
![[7.3.png]]

The way we use this model is
1. First solve the DC circuit, ignoring AC components.
2. Replace the transistor with the small signal model, short DC voltage sources, and open circuit DC current sources.
3. Solve like a normal circuit.

There are notes on notation and $A$ and $r_{in}$ that I wrote in the MOSFET section, so look there for those.