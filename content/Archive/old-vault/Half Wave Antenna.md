---
See Also: "[[Hertzian Antenna]]"
---
Half wave [[Antennas]] are [[Hertzian Antenna]]'s where $L=\frac{\lambda}{2}$. So, all the information on hertzian antennas still applies here, but if we make $L=\frac{\lambda}{2}$ we get a more desirable antenna.

## Power Flux Expression
The [[Plane Waves|poynting vector]] for a half wave hertzian antenna is
$$
S=\frac{15I_{0}^{2}}{\pi R^{2}} \left[ \frac{\cos\left( \frac{\pi}{2}\cos(\theta) \right)}{\sin(\theta)} \right]^{2}
$$
Where
$$
S_{0}=\frac{15I_{0}^{2}}{\pi R^{2}}
$$
and the normalized radiation intensity
$$
F(\theta,\phi)=\left[ \frac{\cos\left( \frac{\pi}{2}\cos(\theta) \right)}{\sin(\theta)} \right]^{2}
$$
## Directivity
The directivity of a half wave antenna needs to be computed numerically because, if you remember the formal definition of directivity, we have to integrate the monster expression that is $F(\theta,\phi)$. Nonethe less we find tthat
$$
D=1.64
$$
## Radiation Resistance
$R_{r}$ also needs to be computed numerically because it involves a monster integral again. Nonetheless we find
$$
R_{r}=73\Omega
$$
Which is a nice value because it is decently far from 0 and it satisfies the condition for high $\zeta$, because $73 \gg R_{l}$ (usually).