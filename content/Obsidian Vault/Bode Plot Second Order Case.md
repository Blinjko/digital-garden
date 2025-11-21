A second order [[Transfer Function Poles|pole]] or [[Transfer Function Zeros|zero]] looks like the following.
$$
H(s)= \frac{1}{\left( \frac{s}{\omega_{n}} \right)^{2}+\frac{2\zeta}{\omega_{n}}+1}
$$
or
$$
H(s) = \left( \frac{s}{\omega_{n}} \right)^{2}+\frac{2\zeta}{\omega_{n}}+1
$$
## Magnitude Contribution
The magnitude contribution begins at $\omega_{n}$ where the contribution is
- Zeros $\implies +40 \frac{dB}{dec}$
- Poles $\implies -40 \frac{dB}{dec}$
Note that this is double of what we would normally have for a [[Bode Plot First Order Case|first order pole]], and the main reasoning is because the order is 2, so we multiply the typical contribution by 2.

## Phase Contribution
The phase contribution begins 1 decade before $\omega_{n}$ and ends one decade after.
- Zeros $\implies +\frac{\pi}{2} \frac{rad}{dec}$
- Poles $\implies -\frac{\pi}{2} \frac{rad}{dec}$


## The effect of $\zeta$
$\zeta$ is known as the damping coefficient and depending on how large / small it is, the magnitude and phase graphs will change at $\omega_{n}$. 

### For $\zeta \ll  1$
The [[Magnitude Plot]] will gain a "peak" / sharp point at $\omega_{n}$. The direction of this point, weather it points up or down, is dependent on if we have a [[Transfer Function Zeros|zero]], or a [[Transfer Function Poles|pole]].

- Zero $\implies$  Point down
- Pole $\implies$  Point up

The [[Phase Plot]] will have sharper transition, however the overall net change in phase will be $\pi$ radians.

### For $\zeta \ge 1$
We will see a smoothing effect on our [[Magnitude Plot]] at $\omega_{n}$, and the phase transition will be more gradual.