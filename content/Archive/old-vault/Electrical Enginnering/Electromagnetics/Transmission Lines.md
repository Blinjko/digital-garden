## Why
We need different math to work with transmission lines because they reach a length, or have parameters that cause circuit theory to become invalid. For example, if we have a line of length $L$, for circuit theory to be valid, $L<0.01\lambda$, where $\lambda$ is the wavelength of the AC voltage in the line.

## TEM transmission lines
Transverse electric magnetic (TEM), lines are transmission lines where $E\perp B\perp v_{p}$

Some examples of TEM lines are.
1. Strip Lines
2. Wave Guides
3. Co-axial lines


### Model Derivation
The full derivation of the model that we will use for transmission lines I will not include here, but I will include the general steps.

1. Realize transmission lines have a certain inductance and capacitance value.
2. Approximate a transmission line as a circuit with an inductor and capacitor using circuit theory, note the length of the line, $L$, must satisfy $L<0.01\lambda$. So if we have a line longer, we simply split it up into $n$ small segments that satisfy the requirement.
3. Define $L'=\frac{\text{inductance}}{\text{unit length of line}}$ and $C'=\frac{\text{capacitance}}{\text{unit length of line}}$
4. Write a KVL and KCL to get 2 circuit equations.
5. Divide and take the limit to get the telegraph equations
	1. $\frac{\partial V}{\partial z}=L'\frac{\partial I}{\partial z}$
	2. $\frac{\partial I}{\partial z}=C'\frac{\partial V}{\partial z}$
6. Solve the telegraphers equations.
7. Further the result $Z_{0}=\sqrt{ \frac{L'}{C'} }$
### Characteristic Impedance of TEM Transmission Line
From before we got the equation.
$$
Z_{0}=\sqrt{ \frac{L'}{C'} }
$$
Which is defined as the characteristic impedance of a transmission line, a quantity that is needed in further calculations.

### Definition of Beta ( Wave number )
In the derivation we can a definition of $\beta$ which is.
$$
\omega^{2}L'C'=\beta^{2}
$$
Or, equivalently.
$$
\beta=\omega \sqrt{ L'C' }=\frac{2\pi}{\lambda}=\frac{\omega}{v_{p}}
$$
### Phase Velocity Definition
Now that we know $\beta$ and knowing $v_{p}=\frac{\omega}{\beta}$ we, can derive the phase velocity of an EM wave moving down a transmission line as.
$$
v_{p}=\frac{1}{\sqrt{ L'C' }}=\frac{\omega}{\beta}=\frac{1}{\sqrt{ \mu\epsilon }}=f\lambda
$$
This happens to be true for all transmission lines, not just TEM, lossless ones.

We also have the definition:
$$
\frac{1}{\sqrt{ \mu \epsilon }}=c_{insulator}
$$
Which gives us the phase velocity of light (the speed of light) in the insulator of the transmission line. Since light has different speeds in different materials, we can use this fact to help determine what the insulator is. This fact is only true for *TEM lines*.

For reference we define $\mu$ and $\epsilon$ as:
$$
\mu=\mu_{r}\mu_{0}
$$
$$
\epsilon=\epsilon_{r}\epsilon_{0}
$$
Where $\mu_{r}$ and $\epsilon_{r}$ are given, and:
$$
\mu_{0}=4\pi \times 10^{-7}
$$
$$
\epsilon_{0}=8.85 \times 10^{-12}
$$
### Equations for co-axial Lines
$a$ is the inner diameter of the coaxial line, and $b$ is the outer diameter.
$$
L'=\frac{\mu}{2\pi}\ln\left( \frac{b}{a} \right)
$$
$$
C'=\frac{2\pi\epsilon}{\ln\left( \frac{b}{a} \right)}
$$
Thus,
$$
\large Z_{0}=\sqrt{ \frac{L'}{C'} }=\sqrt{ \frac{\frac{\mu}{2\pi}\ln\left( \frac{b}{a} \right)}{\frac{2\pi\epsilon}{\ln\left( \frac{b}{a} \right)}} } = \frac{\ln\left( \frac{b}{a} \right)\sqrt{ \frac{\mu}{\epsilon} }}{2\pi}$$
Note that:
$$
\sqrt{ \frac{\mu}{\epsilon} }=\sqrt{ \frac{\mu_{r}}{\epsilon_{r}} } \sqrt{ \frac{\mu_{0}}{\epsilon_{0}} }
$$
Also,
$$
\sqrt{ \frac{\mu_{0}}{\epsilon_{0}} }=377\Omega = \text{impedance of free space}
$$

This yields:
$$
Z_{0}=\ln\left( \frac{b}{a} \right)\sqrt{ \frac{\mu_{r}}{\epsilon_{r}} } \frac{377}{2\pi}
$$

We can compute R' from:
$$
R'=\frac{R_{s}}{2\pi}\left( \frac{1}{a} + \frac{1}{b} \right)
$$
Where:
$$
R_{s}=\frac{1}{\sigma\delta}
$$
$\sigma$ is the conductivity of the conductor, and $\delta$ is the skin depth which can computed as such.
$$
\delta = \sqrt{ \frac{1}{\pi f\mu\sigma} }
$$
G' can be computed as follows:
$$
G'=\frac{2\pi\sigma}{\ln\left( \frac{b}{a} \right)}
$$
Where $\sigma$ here is the conductivity of the insulator.

### Lossy Lines
Lossy lines are transmission lines that have losses, i.e they are not perfect conductors. First we need to define a few new terms.
$$
R'= \frac{\text{resistance}}{\text{unit length}}=\frac{\Omega}{m}
$$
#### Computing R'
$$
R'=\frac{R_{s}}{2\pi}\left( \frac{1}{a} + \frac{1}{b} \right)
$$

If our insulator on our transmission lines is not perfect then we have leakage current through them. This leads to another definition of:
$$
G'= \frac{\text{conductance}}{\text{unit length}}=\frac{\Omega^{-1}}{m}
$$
This leads to a new circuit model of our transmission lines:
![[Pasted image 20250905073402.png]]

We use the telegraphers equation to derive the formulas that follow, but I will not be diving into the derivation here.

Similar to before we find:
$$
\beta \approx \omega \sqrt{ L'C' }
$$
And
$$
Z_{0}\approx \sqrt{ \frac{L'}{C'}}
$$
Note that these are not the actual definitions for lossy lines, but they are approximately equal, and will suffice for our work.

#### Attenuation Coefficient and Loss Factor
We also have a new quantity to define.
$$
\alpha \approx \frac{R'}{2Z_{0}} = \text{ attenuation constant}
$$
This constant goes in an exponential of the form $e^{-aL}$ where $L$ is the length of the line. As you can see this is exponential decay, thus the value of the attenuation constant determines how much the signal will decay / be attenuated. This leads into the next definition.
$$
LF=e^{-\alpha L}= \text{loss factor}
$$
Note that:
$$
L=\text{cable length}=v_{p}T
$$
Where $T$ is the period of the wave.

We can also give $LF$ in decibels like so:
$$
20\log_{10}(e^{_-\alpha L})
$$


#### Mitigating Dispersion in Lossy Cables
It is not included in these notes, but the phase velocity in a lossy cable is dependent on $\omega$, thus we will see dispersion in the cable. To prevent this from happening, we have to satisfy the following ratio:
$$
\frac{L'}{G'}=\frac{C'}{G'}
$$
When this is true, the $\omega$ dependence cancels out and there is no more dispersion. This is important because if we have dispersion in our cable, our signal will split up and the integrity will be ruined, which defeats the purpose if we are trying to transmit data and information.

### Reflection Coefficient
We define the reflection coefficient as:
$$
\Gamma= \frac{Z_{L}-Z_{0}}{Z_{L}+Z_{0}} = \frac{\tilde{V}^{-}}{\tilde{V}^{+}}=\frac{\text{reflected wave amplitude}}{\text{input wave amplitude }}
$$
Some special scenarios and the value of $\Gamma$.

| Case          | $\Gamma$ |
| ------------- | -------- |
| Open Circuit  | 1        |
| Short Circuit | -1       |
| $Z_{L}=Z_{0}$ | 0        |

### Input Impedance
We define the input impedance to a lossy transmission line as:
$$
Z_{in}=Z_{0} \frac{Z_{L}+jZ_{0}\tan(\beta L)}{Z_{0}+jZ_{L}\tan(\beta L)}
$$
Note that if $Z_{L}=Z_{0}$ then $Z_{in}=Z_{0}$ 

This quantity is very useful because it allows us to take a lossy transmission line and its load, and reduce it into a single impedance. When this is done, in our circuit we can sub out the transmission line with this impedance and then just use our circuit theory, which then makes our lives simpler, especially for doing power calculations and whatnot.

### Standing Wave Ratio
Often denoted as $S$, it is the ratio between the load impedance and characteristic impedance of a transmission line. In essence it shows how close they are to being matched, the closer to 1, the more matched they are.
$$
S=\frac{Z_{0}}{Z_{L}}=\frac{1+|\Gamma|}{1-|\Gamma|}=\frac{|\tilde{V}_{max}|}{|\tilde{V}_{min}|}=\frac{|\tilde{V}^{+}|+|\tilde{V}^{-}|}{|\tilde{V}^{+}|-|\tilde{V}^{-}|}
$$
### Reflections
Recall that $\Gamma$ is the reflection coefficient and is a measure of how much of our incident wave is reflected back down the line. This can lead to attenuation (if we have reflection). 

For an open circuit we know that the whole wave is reflected, $\Gamma=1$. Thus if we model the voltage in the line as a function of the line distance $z$, then in phasor form we have the equation.
$$
\tilde{V}(z)=\tilde{V}^{+}(z)+\tilde{V}^{-}(z)
$$
Recall $\tilde{V}^{+}$ is the incident wave, and $\tilde{V}^{-}$ is the reflected wave.
This gives us the equation in regular form as:
$$
V(z)=V_{0}\cos(\omega t-\beta z)+\Gamma V_{0}\cos(\omega t+\beta z+\theta_{\Gamma})
$$
If we have an open circuit then, $\Gamma=1$ and we get.
$$
V(z)=V_{0}\cos(\omega t-\beta z)+V_{0}\cos(\omega t+\beta z)
$$
Which can be simplified to:
$$
V(z)=2V_{0}\cos(\omega t)\cos(\beta z)
$$
If we select a particular time values we can see that we get a standing wave, where we have nodes and antinodes. The nodes are always fixed in the same place. We also note that the distance from any node to the max value of the wave is $\frac{\lambda}{4}$. This turns out to be very useful in experimental senses.

If we look at the case where $\Gamma=-1$ we find a similar result, and that is the max distance from the end of the line to the first antinode (maximum) of the waveform is also $\frac{\lambda}{4}$

In general, with a bit of hand waving we can say:
$$
d_{max}=\frac{\lambda}{4}
$$
Or, if $\theta_{\Gamma}< 0$, then we have
$$
d_{max}=\frac{\lambda}{4}+\frac{\lambda}{2}
$$
Where $\theta_{\Gamma}$ is the phase angle of gamma, recall that gamma is a complex number.

This quantity is useful because it can be used to experimentally find the load value.

If we have a $\Gamma<1$ we still have a standing wave, but the cancellation at all nodes is not complete and we end up with partially canceled waves in the line.


### Multiple transmission lines
We know how to reduce 1 transmission line into a simple input impedance that can be used with circuit theory, but what happens when we have multiple lines in sequence? Well, we apply the same process but multiple times. 

Here's how we do it.
1. Reduce the last transmission line with a load into it's input impedance.
2. Use that input impedance as the load impedance of the next transmission line.
3. Repeat until we have fully reduced all transmission lines.

### Matching Impedance's
We know from our reflection coefficient that if $Z_{0} \ne Z_{L}$ then we will get refection and attenuation in our lines. Generally we do not want this so we need a way to match the impedance of our transmission line with the load.
#### Quarter wave matching.
If we add an additional transmission line of length $L=\frac{\lambda}{4}$ we see that something interesting happens when we reduce it to a simple impedance. Recall that $\beta=\frac{2\pi}{\lambda}$, so the $\tan(\beta L)$ in the $Z_{in}$ formula turns into $\tan\left( \frac{\pi}{2} \right)$ which is equal to infinity. The values being added to tangent in the equation then become negligible in reference and thus we can ignore them. This then gives us:
$$
Z_{in}=Z_{m} \frac{jZ_{m}\tan}{jZ_{L}\tan}=\frac{Z_{m}^{2}}{Z_{L}}=Z_{0}
$$
Where $Z_{m}$ is the characteristic impedance of the line we want to add to the end to match the load. We can then solve for $Z_{m}$.
$$
Z_{m}=\sqrt{ Z_{L}Z_{0} }
$$

The only caveat with this technique is that it *only works for real loads*.

#### Quarter wave matching with offset.
A way around having a complex load impedance is to put our quarter wave marching line not at the end of our first transmission line, but rather a distance $d$ from the end. This will allow us to match even a complex load.  So to find $d$ and the characteristic impedance of our matched line $Z_{m}$, we have to collapse the transmission lines down into their input impedances using the known methods.

Note that the length of our added transmission line is still $L=\frac{\lambda}{4}$

1. Collapse the last length $d$ segment into an impedance $Z_{in_{1}}$, which is connected to the load. Note that this line segment has a characteristic impedance of the initial line $Z_{0}$. This will give you an equation with $d$.
2. Then, collapse the quarter wave segment of the line into a respective input impedance $Z_{in_{2}}$, this will give us an equation involving $Z_{m}$, the characteristic impedance of our quarter wave line, and $d$. Note that the load impedance here is $Z_{in_{1}}$, from part 1.
3. Since the previously derived equation is complex, we technichally have 2 equations, 1 is the real part and 1 is the imaginary part.
4. Recall though that we want to match the real part of the quarter wave lines input impedance $Z_{in_{2}}$ to the characteristic impedance of the original line, $Z_{0}$.
5. Same thing as before, except now we are considering the imaginary part, and $Z_{0}$ is always purely real, so we are essentially setting the imaginary part of the $Z_{in_{2}}$ equation to 0.

#### Shunt Impedance Matching
Another technique to match the load impedance, $Z_{L}$, to the line characteristic impedance $Z_{0}$, is to add a shunt impedance, $Z_{S}$, a distance $d$ from the end of the line. The shunt impedance is connected between the supply and return line, just like the load.

Note that it may seem that the shunt and the load are in parralel, but we cannot combine them yet because there is some length, $d$, of transmission line between them. What we have to do before we can combine them is collaplse the end most part of the tranmission line into its input impedance, $Z_{in}$.

Once  we collapse the endmost line, there is essentially 0 distance between the shunt impedance and the equivalent input impedance, so we can consider them in parallel and combine them into a load impedance.
$$
\frac{Z_{S}Z_{in}}{Z_{S}+Z_{in}} = Z_{comb}
$$
Similar to before, $Z_{comb}$ has a real and imaginary part, both of which have to match that of $Z_{0}$, the characteristic line impedance. This gives us two equations to solve,. First we set the imaginary part of the $Z_{comb}$ expression to 0 because $Z_{0}$ has no imaginary part. Second, we set the real part of the $Z_{comb}$ expression to $Z_{0}$. Now that we have 2 equations and 2 unknowns we can solve for $d$ and $Z_{s}$.
