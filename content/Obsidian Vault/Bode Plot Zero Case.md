This is when we have a [[Transfer Function Poles|pole]] or [[Transfer Function Zeros|zero]] at 0. I.E we have a lone $s$ in our denominator or numerator respectively.

EX:
$$
H(s) = \frac{1}{s} \text{ or } \frac{s}{\frac{s}{a}+1}
$$

## Magnitude Contribution
$\pm 20 \frac{dB}{dec}$ for a [[Transfer Function Zeros|zero]] and [[Transfer Function Poles|pole]] respectively at $\omega=1$
Note that this case is special because it is simply just a line through $\omega=1$. It is not flat before like the [[Bode Plot First Order Case]]. This was something that confused me before so don't make the same mistake.

## Phase Contribution
The phase contribution is a constant offset.
- Zero $\implies +\frac{\pi}{2}$
- Pole $\implies -\frac{\pi}{2}$