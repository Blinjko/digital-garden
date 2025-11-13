For a [[Normalize Transfer Function|normalized]] [[Transfer Function]] the first order case looks like
$$
H(s) = \frac{1}{\frac{s}{\omega_{c}}+1} \text{ or } \frac{s}{\omega_{c}}+1
$$
Where $\omega_{c}$ is the [[Bode Plot Corner Frequency |corner frequency]].

##  Magnitude Contribution
- Zero $\implies +20 \frac{dB}{dec}$ at $\omega=\omega_{c}$
- Pole $\implies -20 \frac{dB}{dec}$ at $\omega =\omega_{c}$
Note that before $\omega_{c}$ there is no contribution, but after $\omega_{c}$ the contribution becomes valid forever. This is unlike the [[Bode Plot Zero Case]].

## Phase Contribution
Unlike magnitude, which starts at $\omega_{c}$, the phase contribution starts one decade before $\omega_{c}$ and ends one decade after $\omega_{c}$. Keep this in mind as plots can get confusing.
- Zero $\implies +\frac{\pi}{2} \frac{rad}{dec}$
- Pole $\implies -\frac{\pi}{2} \frac{rad}{dec}$

Another important point to bring up here is that the phase contribution begins and ends, unlike the magnitude contribution which begins, but never ends.