---
tags:
---
Antennas are devices that transmit and receive [[Electromagnetic Waves]]. The changing currents in the wires create an oscillating [[Electromagnetic Dynamics|magnetic field]] along with an [[Electromagnetic Dynamics|electric field]] that propagates though space.

## Kinds of Antennas
- [[Hertzian Antenna]] 
- [[Wave Guide With Horn]]
- [[Dish Antenna]]

## Workhorse Equation
Original $\vec{A}$, the vector potential, is from [[Magneto Statics]], but we will borrow it. The below form is the phasor version of that equation, but I will not detail the derivation in these notes.
$$
\tilde{A}=\frac{\mu_{0}}{4\pi}\int \frac{\tilde{J}e^{-j\beta R}}{R}dv
$$
Where $R$ is the distance from the antenna, and $\tilde{J}$ is the current density phasor.

We use this equation to derive the formulas for the different types of antennas detailed before.

## Radiation Resistance
We define $R_{r}$ as the radiation resistance of an antenna. Essentially, it is a resistive model of the antenna that we can use to model the antenna in a typical circuit. Antennas dissipate power, so it makes sense to model the antenna as a resistive element in a circuit. $R_{r}$ differs for different antenna types and styles, so the expression for it varies.

### Deriving Radiation Resistance
From [[Plane Waves]] we have the poynting flux, $\vec{S}$, which is the power per unit area. If we integrate this over some area we get the power $P$. The area you integrate over likely depends on the radiation pattern of the antenna, but I'm not really to sure.

Once you've gotten your expression for power, $P$, at an arbitrary distance from your antenna, you want to make your equation look like the one from circuit theory.
$$
P=\frac{1}{2}I^{2}R
$$
Whatever has to go into $R$ to make the equation look like this is your expression for $R_{r}$

It is also useful to realize that
$$
P=\frac{1}{2} R_{r}I_{0}^{2}
$$
is true in general for any antenna.

## Radiation Efficiency
Radiation Efficiency of an antenna is denoted as
$$
\zeta=\frac{P_{radiated}}{P_{total}}=\frac{R_{r}}{R_{r}+R_{loss}}
$$
Where $R_{loss}$ is the resisitive losses of the circuit.

We can derive the above expression if we transform the antenna into it's $R_{r}$ and look at the circuit as a [[Transmission Lines]] where the load is $R_{r}$, and $Z_{0}$ is matched to the load. We then can use circuit theory and we get a simple voltage divider circuit. We add $R_{Loss}$ to model possible resistivity losses in the transmission lines. 

An insight we can gain here is, we want $R_{r}\gg R_{loss}$ for good Radiation Efficiency (which means most of the power we put into the antenna is actually transmitted).

## Directivity
Directivity represents the ratio of power radiated in the peak direction, to the power you would get if the antenna were isotropic (same in all directions). I.E a lower value (around 1) means the antenna is not very directional.
$$
D=\frac{S_{max}}{S_{\text{average over sphere}}}=\frac{S_{max}}{\frac{1}{4\pi}\int_{0}^{\pi}\int_{0}^{2\pi}S(R,\theta,\phi)\sin(\theta )\,d\theta \,d\phi} =\frac{S_{max}}{\frac{P_{rad}}{4\pi R^{2}}}
$$


Or if we look at the definition of [[Normalized Radiation Intensity]]
$$
D=\frac{1}{\frac{1}{4\pi}\int_{0}^{\pi}\int_{0}^{2\pi}F(\theta,\phi)\,d\Omega}
$$
Where
$$
d\Omega=\sin(\theta)d\theta\, d\phi
$$

## Beam Solid Angle / Pattern Solid Angle
In simple terms:
- It's a measure of how "concentrated" the antenna's radiated power is.
- A smaller $\Omega_{P}$ means a more focused, sharper beam (high directivity).
- A larger $\Omega_{P}$ means a broader, wider beam (low directivity).

Beam solid angle is defined as
$$
\Omega_{p}=\frac{4\pi}{D}
$$
## Gain
Gain is a measure of directivity including ohmic loss.
We define it as:
$$
G=D\zeta
$$
## Beam Width
Denoted as $\beta$ as well... is defined as
$$
\beta = \theta_{\frac{1}{2}power}-\theta_{-\frac{1}{2}power}
$$
Where the angles are the angles which we get $\frac{1}{2}$ of peak power. 

## Receiving Antennas
What makes an antenna a good receiver? Is a good receiver antenna also a good transmitting antenna? Are they related? Short anwser - yes.

Good transmitting antennas are good receiving antennas and there is a mathematical reason for this we will get to shortly. Before we do though, we should talk about how we can model and think about receiving antennas from a circuits perspective.

### Circuit Perspective
Imagine we have an antenna connected to a circuit that matches the antenna's Radiation resistance, $R_{r}$.  Assuming that the antenna is receiving here, we can model it as a voltage source since, from [[Maxwells Equations Summary|Maxwell's Equations]] we know
$$
\oint \vec{E}\cdot d\vec{l}=V_{ind}
$$
What we then end up with is a circuit with 2 impedance's in series.
$$
Z_{atn}=R_{r}+j X_{atn} \implies \text{ antenna impedance}
$$
and
$$
Z_{L}=R_{L}+j X_{L} \implies \text{ Load impedance }
$$
Since we can choose the load impedance here, $Z_{L}$, it makes sense to chose a value such that
$$
X_{L}+X_{atn}=0
$$
So that we end up with a purely restive circuit. We can then, going forward, use this circuit realization to help derive the desired quantities we want, like Power.

### Power
Use the circuit model from before, we can easily determine what the power the load receives is, because from [[Circuit Theory]] we know.
$$
P_{L}=\frac{1}{2}I^{2}R_{L}
$$
Where $I$ in this case is 
$$
I=\frac{V}{R_{L}+R_{r}}
$$
Where, $V$ is the expression for the voltage the antenna will create (since we modeled it as a voltage source).

Rewriting $P_{L}$ we get
$$
P_{L}=\frac{1}{2} \left( \frac{V}{R_{L}+R_{r}} \right)^{2}R_{r}
$$
Were going to want maximum power at the load, so we have to choose $R_{L}$ such that
$$
R_{L}=R_{r}
$$
Which is usually possible.
So, assuming $R_{L}=R_{r}$
$$
P_{L}=\frac{V^{2}}{8R_{r}}
$$
That is about as simple as it will get, because we cannot expand $V$ unless we know what antenna we are talking about. I recommend seeing [[Hertzian Antenna]] to see the full development of this, as it leads into the next section.

### Effective Area
We can think of the effective area quite literally, it is the effective area an antenna can receive over. I recommend reading the relevant section in [[Hertzian Antenna]] it makes it a bit more clear why it is called the effective area, and where it comes from.

In general though we have the expression
$$
A_{eff}=D \frac{\lambda^{2}}{4\pi} \implies \text{ effective area}
$$
Which tells us why good transmitters are good receivers; because directive is a transmitting quantity and effective area is a receiving quantity, and they are directly related. So the more directional an antenna is, the larger area it can receive over, which seems kind of odd at first.


> [!NOTE]
> The effective area can be similar to the actual area of the antenna, but in general the area of the antenna is not a gauge of the effective area, or visa versa.


### Friis Formula
The friis formula aims to answer the question, what is the power that we receive?

Well, if we suppose that we have an antenna transmitting a power $P_{t}$ and one recieving some power $P_{r}$, intuitively it makes sense to say
$$
P_{r} \approx \frac{\text{power}}{\text{area}}\bigg|_{\text{reciever}} \times A_{\text{effective reciever}}
$$
We can similarly express the power per unit area at the receiver as
$$
 \frac{\text{power}}{\text{area}}\bigg|_{\text{reciever}}=D_{t} \frac{P_{t}}{4\pi R^{2}}
$$
To understand the above, think about each term
- $P_{t}$ is the power transmitted isotropically
- $\frac{1}{4\pi R^{2}}$ models the decay of the power, we can think as it being even spread over the surface of a sphere (hence isotropic).
- $D_{t}$ is a scaling factor to boost the power depending on how directional the antenna is, which make intuitive sense; a less directional antenna will not radiate isotropically so we need to scale the previous term accordingly.

If we then expand $A_{eff}$ we get
$$
P_{r}=D_{t} \frac{P_{t}}{4\pi R^{2}} \times D_{r} \frac{\lambda^{2}}{4\pi^{2}}=P_{t}D_{t}D_{r}\left( \frac{\lambda}{4\pi R} \right)^{2}
$$
Then if we take into account resistive power losses of the circuits by replacing $D$ with $G$,
recall
$$
G=\zeta D
$$
We finally get the Friis Formula
$$
P_{r}=P_{t}G_{t}G_{r}\left( \frac{\lambda}{4\pi R} \right)^{2} \implies \text{ Friss Formula}
$$
Where the $r$ and $t$ subscripts denote the receiver and transmitter respectively.


