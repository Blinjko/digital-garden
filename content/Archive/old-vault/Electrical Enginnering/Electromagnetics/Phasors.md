Phasors are a way to represent [[Sinusoids]] as [[Complex Numbers]], specifically complex exponential. This generally allows the math involved to become significantly easier and less laborious.

## Definition
Usually we only use the real, cosine, part of the complex exponential.
$$
\mathrm{Re}(Ae^{j(\omega t+\phi)}) = A\cos(\omega t+\phi)
$$
Also, the $\omega t$ is usually left out and an alternate notation is used, only involving the amplitude and phase.
$$
A \angle \phi
$$
So, really the phasor part is:
$$
\tilde{V}=Ae^{j\phi}
$$

## Phasor Arithmetic
When doing math with phasors we can rewrite them back in their complex form and do the math there, as we are already familiar with that form. Note, though, that to do arithmetic with phasors, they must be of the same frequency.

### Adding
Convert to complex exponential.
$$
Ae^{j(\omega t+\phi)}+Be^{j(\omega t+\theta)}=e^{j\omega t}(Ae^{j\phi}+Be^{j\theta})
$$
To compute this, $Ae^{j\phi}$ and $Be^{j\theta}$ need to be converted into Cartesian form, added element wise, then converted back into polar form. This will allow them to merge into one complex exponential with a different amplitude and phase shift.

### Multiplication
Since we are in polar form already, this is very easy. Note, we don't include the $\omega t$ because phasors are time independent.
$$
A\angle\phi \times B\angle\theta=AB\angle\phi+\theta
$$
### Division
Very similar to multiplication
$$
\frac{A\angle\phi}{B\angle\theta}= \frac{A}{B}\angle\phi-\theta
$$
## Phasors and Derivatives
Using phasors can make solving differential equations a lot easier, but we have to be careful because the phasor is usually not what we are taking the derivative of. We are usually taking the derivative of the whole function, and the phasor only represents part of the function. That being said this is the derivative:
$$
\frac{d}{dt}(Ae^{j(\omega t+\phi)})=Aj\omega e^{j(\omega t+\phi)}=j\omega \tilde{V}
$$
Where $\tilde{V}=Ae^{j\phi}=A\angle\phi$

