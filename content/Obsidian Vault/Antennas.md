---
tags:
  - electrical_engineering
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