A plane wave is a wave that has an infinite wave front and propagates in one direction.
## Lossless
We assume that $\rho_{f}=J_{f}=0$, because we are far away from the wave source. Imagine a spherical dispersion of waves, where we are, and the following is derived, is somewhere very far away from the source. That is to say the radius of the circle at that point is so large that at a point the wave is flat and infinite (the front).

We define $\vec{v}$ as the phase velocity of the wave, which has the direction of propagation. We are talking about  electric and magnetic field waves here also. We find that
$$
\vec{E}_{0} \perp \vec{v}_{0}
$$
That is the electric field has a direction perpendicular to the propagation velocity.

We also find, not derived here of course.
$$
\beta = \omega \sqrt{ \mu\epsilon }
$$
$$
v_{p}=\frac{\omega}{\beta}=\frac{1}{\sqrt{ \mu\epsilon }}
$$
We use maxwells equations to get $\vec{B}$ and find
$$
B = \sqrt{ \mu\epsilon }E_{0}
$$
Also
$$
\vec{B} \perp \vec{E}
$$
and
$$
\vec{B} \perp \vec{v}_{p}
$$
### Overall Generalizations
- Direction of polarization = the direction of $\vec{E}$
- Direction of propagation = the direction of $\vec{E} \times \vec{H}$ or $\vec{E} \times \vec{B}$, which is the direction of $v_{\vec{p}}$

Also
$$
\frac{E}{H}= \sqrt{ \frac{\mu}{\epsilon} } = \eta = \eta_{0}\sqrt{ \frac{\mu_{r}}{\epsilon _{r}} }=377\sqrt{ \frac{\mu_{r}}{\epsilon_{r}} }
$$
Or similarly
$$
\frac{\tilde{E}}{\tilde{H}}=\eta_{c} \text{ or } \eta
$$
We find that with the phasor form, we get $\eta_{c}$ when we have a high loss media (which is discussed further below). $\eta$ is when we have not very lossy media, which is also discussed later.

Also Note that
$$
\sqrt{ \frac{\mu_{0}}{\epsilon_{0}} } = 377 = \text{ impedance of free space }
$$

Also it is important to note that $\vec{E}$ and $\vec{B}$ or $\vec{H}$ are in phase. 

If we know $E$ or $H$ or $B$ it is easier to find the other using relations stated above, but how do we find the direction? Well recall a wave as the form:
$$
A_{0}\cos(\omega t-\beta x+\phi)
$$
This wave propagates in the +x direction, since $\beta$ is always positive. So we look inside the sinusoid to find the direction of propagation, that is the direction of $\vec{v}_{p}$. Then we use the other information we know to determine the direction of the remaining quantity.


## Lossy

There is context from a derivation that is not included here so this may seem a bit disconnected at first.

A few definitions
$$
\epsilon_{c} = \epsilon' - j\epsilon'' = \epsilon + \frac{\sigma}{j\omega}
$$
$\epsilon_{c}$ is a complex form of $\epsilon$ and comes up in the derivation and results.

We find
$$
\epsilon' = \epsilon
$$
$$
\epsilon'' = \frac{\sigma}{\omega}
$$
For a media to be lossless we would need $\sigma=0$. That is to say we would need a perfect non conductor. Note that $\sigma$ is conductivity.

Definition of $\gamma$
$$
-\gamma^{2}=\mu\epsilon_{c}\omega^{2}
$$
Where $\gamma$ is known as the propagation constant.
$$
\gamma = \alpha + j\beta
$$
Yes this is the same $\beta$ from before.

We then delve into 2 different scenarios.

### Low Loss Media

Also referred to as weakly damped / not good conductors.

The condition is
$$
\alpha \ll \beta
$$
Or similarly stated
$$
\frac{\alpha}{\beta} = \frac{1}{2} \frac{\sigma}{\omega\epsilon} \ll 1
$$
The above is how we discern if we are in a low loss media or not. If it doesn't hold we aren't int a low loss media.

We can also derive
$$
\beta = \omega \sqrt{ \mu\epsilon } = \frac{2\pi}{\lambda}
$$
Which we knew from before in transmission lines.

$$
\alpha = \frac{\sigma}{2}\sqrt{ \frac{\mu}{\epsilon} }
$$
Note the order here was kind of backwards since the latter was used to construct the former, but nonetheless.

Also
$$
\delta = \frac{1}{\alpha}
$$


### High Loss Media
Also known as good conductors.

The condition here is
$$
\frac{\sigma}{\omega\epsilon} = \frac{\epsilon''}{\epsilon'}\gg 1
$$
We generally find that
$$
\alpha \approx \beta
$$
and
$$
\alpha = \sqrt{ \frac{\omega \mu\sigma}{2} }= \sqrt{ \pi f\mu\sigma } \approx \beta
$$
Which is only valid when we have high loss, hence why we have to different scenarios.

Recall
$$
\alpha = \text{ attenuation coeff }= \frac{1}{\text{attenuation length}}=\frac{1}{\delta}
$$
Where
$$
\delta = \frac{1}{\sqrt{ \pi f\mu\sigma }} = \text{ skin depth}
$$
The skin depth, $\delta$, is how far an EM wave penetrates into a conductor / media. Recall in AC circuits that we said the current travels on the outside of the wire, this is because of the fact that the energy is carried in EM waves outside the wire, and they can only penetrate so deeply. We can also see that it is frequency dependent.

Some other useful equations
$$
\frac{\tilde{E}}{\tilde{H}}=\eta_{c}=\sqrt{ \frac{\mu}{\epsilon_{c}} } = (1+j)\sqrt{ \frac{\pi f\mu}{\sigma} }=(1+j) \frac{\alpha}{\sigma}
$$
Note that
$$
\eta = \sqrt{ \frac{\mu}{\epsilon} }
$$
One $\eta$ is complex ($\eta_{c}$) and that involves $\epsilon_{c}$ which is the complex variant of epsilon, which was defined above. The other is the normal one and just involves the normal $\epsilon$.


## Polarization Of a Plane Wave
The polarization is essentially the direction that $\vec{E}$ is oscillating or wiggling if you will. The more formal definition is "The trace of $\vec{E}$ in time at a fixed point in space." 

So, in other words we find the direction the wave is travelling in (the direction of $v$) and choose a fixed value for that variable. For example if this was $x$ we would evaluate $\vec{E}$  when $x=0$ or something similar. This is what the trace is. Then essentially what we have left is a parametric equation in terms of $t$. What we can then do is see what this equation does as $t$ increases. The beviour of this equation is the polarization.

Linear polarization is when $\vec{E}$ just oscillates along a straight line.
The equation looks of the form
$$
\vec{E} = a_{x}\vec{E}_{x}+a_{y}\vec{E}_{y}
$$
Where $a_{x}$ and $a_{y}$ are the x and y coordinates in wich the line that $\vec{E}$ oscillates on intersects.

We then define
$$\psi = \tan^{-1}\left( \frac{a_{y}}{a_{x}} \right)$$
which is the angle with the $x$ axis.


We can also get a non linear polarization. In which we will have an equation of the form
$$
\vec{E} = a_{x}\hat{x}\cos(\omega t-\beta z) + a_{y}\hat{y}\cos(\omega t-\beta z+\delta)
$$
If you plug in $z=0$ you get a parametric equation like I said before. If we look at this equation we see that if.
$$
a_{x}=a_{y}
$$
and
$$
\delta = -\frac{\pi}{2}
$$
Then the equation traces a circle going in the counter clockwise direction. This is the right hand, circular polarization.

If $\delta=\frac{\pi}{2}$ then we get the left hand circular polarization (because now we rotate clockwise.)

We have a general rule
**Put your thumb along the velocity vector, fingers curling in the direction of polarization**

If you need to use your right hand, its right hand polarization, left hand, so on so forth.

If
$$
a_{x} \not= a_{y}
$$
and
$$
\delta = -\frac{\pi}{2}
$$
We get a right hand elliptical polarization.

If $\delta=\frac{\pi}{2}$ then we get left hand elliptical.

In general the values of $a_{x}$ and $a_{y}$ determine the shape, and $\delta$ determines the direction of rotation.


## Power Of Plane Wave

In general we define the poynting vector as
$$
\vec{S} = \vec{E} \times \vec{H}
$$
Which is valid for all $\vec{E}$ and $\vec{H}$ fields not just plane waves.

For plane waves we find
$$
S_{ave}=\frac{1}{2}E_{0}H_{0}
$$
Where $S$ has units of $\frac{W}{m^2}$

More generally
$$
\vec{S}_{avg}= \frac{1}{2}\mathrm{Re}[\tilde{E} \times \tilde{H}^*]
$$
Where $\tilde{H}^{*}$ is the complex conjugate of $\tilde{H}$.

When calculating the power in dB we use
$$
10\log_{10}(S)
$$
Not the typical $20$ we have when doing amplitudes. The reason for this is simply that this the way it is defined.

## Other Nomenclature
Terms used often and what they mean in terms of what we already know.

$$
\alpha = \text{attenuation constant}
$$
$$
\frac{1}{\alpha} = \delta = \text{attenuation length}
$$
$$
\text{Attenuation Rate} = A = \frac{P(z)_{dB}}{P(0)_{dB}}= \frac{\text{power in dB at z}}{\text{power in dB at z=0}}
$$
We find that this can be simplified to
$$
A_{dB}=-8.68\alpha z
$$


## Wave Reflection and Transmission at Boundaries (Normal Case)

What happens when EM waves hit a boundary between media? We will only consider the case where the wave hits the media normal to its surface (perpendicular). But what we find is that part of the wave is reflected and part of it is transmitted.

Let
- $E_{0} = \text{ incident amplitude}$
- $E_{r} = \text{ reflected amplitude}$
- $E_{t}=\text{ transmitted amplitude}$

It is not derived here, but we define
$$
\Gamma = \frac{E_{r}}{E_{0}}= \frac{\eta_{2}-\eta_{1}}{\eta_{2}+\eta_{1}} = \text{ reflection coefficient}
$$
Where $\eta_{1}$ is the $\eta$ of the media the incident wave is travelling in, and $\eta_{2}$ is the $\eta$ of the media the transmitted wave is travelling in.

We also define
$$
\tau = \frac{E_{t}}{E_{0}} = \frac{2\eta_{2}}{\eta_{2}+\eta_{1}}=1+\Gamma = \text{transmission coefficient}
$$

The standing wave ratio
$$
S = \frac{1+|\Gamma|}{1-|\Gamma|} = \text{ standing wave ratio}
$$
which is the same as before from transmission lines, more on this later.

### Multiple Layers & Transmission Line Analogy

Initially we only considered the case where we had an EM wave going from one media into another, i.e one boundary. What about the case where we had multiple boundaries, something like the side of a fish tank for example. The light is in the air, it enters the glass, then from the glass it enters the water. 

Well it turns our this is very similar to the transmission line where we had different line segments with different characteristic impedance's. The only difference here is that our characteristic impedance, and load impedance, are the $\eta$'s

Using the fish tank example from before, suppose we start in the air, go through a piece of glass of thickness $L$ and eventually into the water.  Then
- $\eta_{1} \implies \text{ for the air}$
- $\eta_{2}\implies \text{ for the glass}$
- $\eta_{3} \implies \text{ for the water}$

In the transmission line analogy we say that 
- $\eta_{3} \implies Z_{L}$
- $\eta_{2}\implies Z_{1}, \text{ characeristic impedance of an ending wire segment of length } L$
- $\eta_{1} \implies  Z_{0} \text{ characteristic impedance of an initial wire segment}$

Once we make this connection we can use our known formulas and techniques from transmission lines.

In this case we would collapse $\eta_{3}$ and $\eta_{2}$ into an input impedance using the formula
$$
Z_{in}=Z_{0} \frac{Z_{L}+jZ_{0}\tan(\beta L)}{Z_{0}+jZ_{L}\tan(\beta L)}
$$
Where, in this case $\eta_{3} \implies Z_{L}$, and $\eta_{2} \implies Z_{0}$. 

Once we collapse this into an input impedance, the analogy goes back to the EM wave boundary case where we now just have one boundary, which is the problem we already solved and are familiar working with. Note that the $\eta$ of the second "media" here is the value of the input impedance we just calculated using the transmission line analogy.

### Thickness Needed for no Reflection

To compute the thickness $L$ for this intermediate layer such that there is no reflection, we can use the transmission line analogy and our techniques from there to derive
$$
L= \frac{\lambda_{2}}{4}=\frac{\lambda_{0}}{4} \frac{1}{\sqrt{\mu_{r}\epsilon_{r} }}
$$

Where
- $\lambda_{2}\implies \text{ wavelenght in medium 2 (middle medium)}$
- $\lambda_{0} \implies \text{ wavelength in free space}$
- $\mu_{r}\epsilon_{r} \implies \text{ correspond to medium 2 (middle medium)}$


## Wave Reflection at Boundaries (Oblique)
I will not derive the results here but, we can show with a visual diagram.
$$
\theta_{i}=\theta_{r}
$$
Or in words, the angle of incidence is equal to the angle of reflection, with respect to the normal of the surface.

### Snells Law

$$
n_{1}\sin(\theta_{1})=n_{2}\sin(\theta_{2})
$$
Where $n_{1}$ and $n_{2}$ are the refractive indices, and $\theta_{1}$ is the incident angle with respect to the normal, and $\theta_{2}$ is the transmitted wave's angle with respect to the normal.

We find that if
- $n_{1} > n_{2}$ then the transmitted wave bends away from the normal, $\theta_{2}>\theta_{1}$
- $n_{1} < n_{2}$ then the transmitted wave bends toward the normal, $\theta_{2}< \theta_{1}$
- $n_{1}=n_{2}$ then there is no bending

### Total Internal Reflection Angle

The angle of $\theta_{1}$ that results in total internal reflection, i.e $\theta_{2}=90$ is
$$
\sin(\theta_{c})=\frac{n_{2}}{n_{1}}
$$
Different mediums are used to transmit EM waves and information, and what determines what media we use is the frequency. Fiber Optics are good for optical wavelengths, transmission lines are good up to around 3 GHz, and metallic wave-guides are in between transmission lines and optics.