## Function Definitions
We can define a wave as a function like such:
$$
f(x-vt)
$$
Or
$$
f(x+vt)
$$
Where:
1. $x$ is our horizontal axis
2. $v$ is our velocity
3. $t$ is our time variable

Note that if the sign of $vt$ is negative, our wave is propagating in the positive $x$ direction. And inversely, if the sign is positive, out wave is propagating in the negative $x$ direction.

### Definition as a Sinusoid
We can also define a wave as a cosine function, which generally has the form:
$$
A_{0}\cos\left( 2\pi ft-\frac{2\pi x}{\lambda}+\phi \right)
$$
Where:
1. $A_{0}$ is the amplitude of the wave from 0. (Not peak-to-peak)
2. $f$ is the frequency of the wave in Hertz
3. $t$ is our time variable
4. $x$ is the variable representing our horizontal axis
5. $\lambda$ is the wavelength in meters
6. $\phi$ is the phase shift in radians.

Note that this cosine function is written under the assumption that we are using radians.

We can make a few more simplifications if we define a few new variables.
1. $\omega=2\pi f$   This is the angular velocity in radians per second.
2. $\beta=\frac{2\pi}{\lambda}$   This quantity is known as the wave number. Larger wave number means smaller wavelength, i.e a higher frequency wave. The inverse is also true.
3. $\lambda=\frac{2\pi}{\beta}$  A simple rearrangement of the above.

Now we can rewrite our cosine function.
$$
A_{0}\cos(\omega t-\beta x+\phi)
$$
## Phase Velocity and Group Velocity
The phase of a wave is defined as the items we had within the cosine function before. There is a derivation of phase velocity we can go through, but I will skip it because I don't think it is too worthwhile to include here.

So, we have some definitions.
1. $\frac{\omega}{\beta}=\frac{2\pi f}{\frac{2\pi}{\lambda}}=f\lambda =\frac{\lambda}{T}$ This is the definition of **Phase Velocity**. If we imagine following a particular point on a wave, and measuring it's velocity at which it moves, that would be the phase velocity of the wave.
2. $\large\frac{\partial\omega}{\partial\beta}$ This is the group velocity definition. Group velocity is defined as the speed at which a *wave packet* travels. A wave packet can be thought of as a group of  waves / oscillations. When were transmitting data or information we send information in wave packets, so what determines our speed is not our phase velocity but our group velocity.

**Phase and group velocity do not have to be equal**

### Dispersive and Non-Dispersive Waves
Let $v$ be the phase velocity of a wave.
1. If $v$ is constant, then the wave is considered non-dispersive. Examples of this are sound waves, and light in a vacuum.
2. If $v$ is a function of frequency, $v(\omega)$, then the wave is said to be dispersive. This is because the phase velocity of the wave is determined by it's frequency. Examples of dispersive waves are, light in medium.
3. 
The reason that a prism can break light into its pieces is because light is dispersive in a medium.


## Attenuation
Attenuation can be thought of as the dampening of a wave, we are taking something and making it smaller, i.e we are attenuating it. We can mathematically express this as:
$$
A_{0}e^{-\alpha x}\cos(\omega t-\beta x+\phi)
$$
Where $\alpha$ is called the attenuation coefficient.


## Phase Lead and Lag
In reference to the expression:
$$
A_{0}\cos(\omega t-\beta x+\phi)
$$
We say the phase is:
1. Lagging if $\phi \lt 0$ , i.e we have shifted the cosine to the right
2. Leading if $\phi \gt 0$, i.e we have shifted to the left.


