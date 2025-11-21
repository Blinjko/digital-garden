The hertzian antenna, also known as the dipole antenna, is essentially a signal source with 2 wires extending out from it's terminals.

## Criteria
We define the length, $L$, as the distance between the two ends of the wire that are connected to the source. For the math we are about to do to be valid the following condition needs to be satisfied.
$$
L < \frac{\lambda}{50}
$$
Where $\lambda$ is the wavelength

## Finding $\tilde{H}$ and $\tilde{E}$
The derivation uses the [[Antennas|workhorse]] equation but I will not go through it here. We eventually get
$$
\tilde{H} = \hat{\phi} \frac{\tilde{I}L}{4\pi} \frac{j\beta}{R}e^{-j\beta R}\sin(\theta)+O\left( \frac{1}{\beta R} \right)+O\left( \frac{\lambda}{R} \right)
$$
Where $O()$ indicates order, (not exactly sure what this means).

We call the first part, the parts before the $O()$ the **far field**, which is the field when we are far away from the antenna. We ignore the other components since they approach zero. Considering the whole equation we call this the **near field**, which is when we are close to the antenna, and the other effects are more prominent.

Also note that $\theta$ and $\phi$ are the variables involved in the cylindrical coordinate system since $\tilde{H}$ is radiating outward radially.
- $\theta$ is the angle from the $+z$ axis
- $\phi$ is the angle from the $+x$ axis

We can get $\tilde{E}$ from [[Maxwell's Equations]]
$$
\tilde{E}=\frac{\tilde{I}L}{4\pi}\eta_{0} \frac{j\beta}{R}e^{-j\beta R}\sin(\theta)\hat{\theta}
$$
### Insight about $\tilde{H}$ and $\tilde{E}$
The radiation field we derived in the previous section decays at a rate of $\frac{1}{R}$. But a typical static E field decays at a rate of $\frac{1}{R^{2}}$, and a static B field $\frac{m}{R^{3}}$. So, the radiation field decays at a significantly less rate than just a static E or B field.

## Power
Using the formula of average power density of a [[Plane Waves|plane wave]] we can derive
$$
\vec{S}_{ave}=\frac{\eta_{0}\beta^{2}I_{0}^{2}L^{2}}{32\pi^{2}R^{2}}\sin ^{2}(\theta)\hat{R}
$$
Or more simply
$$
\vec{S}_{ave}=S_{0}\sin ^{2}(\theta)\hat{R}
$$
Where
$$
S_{0}=\frac{15\pi I_{0}^{2}}{R^{2}} \left( \frac{L}{\lambda} \right)^{2} \frac{W}{m^{2}}
$$
Which is the average power of the radiation produced by the antenna at a distance $R$ from the antenna, and an angle $\theta$ measured from one of the poles of the antenna.

## Normalized Radiation Intensity
The [[Normalized Radiation Intensity]] is
$$
F(\theta,\phi)=\sin ^{2}(\theta)
$$
### Evaluation Pattern
In the below picture, which is a plot of $F(\theta)$, the thicker black bar in the center is the antenna, it is along the Z axis. The following graph is obtained by varying $\theta$ as a parameter and looking at the antenna from the appropriate perspective.

Note that the circle peaks at $\frac{1}{2}$ on the Z axis, and $1$, or $-1$, on the Y axis. Also this is plotted in polar coordinates.
![[Pasted image 20251118181404.png]]

### Azimuth Pattern / H pattern
$F(\phi)$ graph is the below picture. It is viewed from the top down perspective where we are essentially viewing the antenna down one of it's wires. 

Note that the radius of this circle is 1 and is plotted in polar coordinates.
![[Pasted image 20251118181726.png]]


## Radiation Resistance
Using the definition in [[Antennas]] we can derive
$$
P=\frac{1}{2}80\pi^{2}\left( \frac{L}{\lambda} \right)^{2}I_{0}^{2}
$$
And realize that
$$
R_{r}=80\pi^{2}\left( \frac{L}{\lambda} \right)^{2}
$$