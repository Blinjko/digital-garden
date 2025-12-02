
The equations involved when dealing with fields that are changing.

## Faraday's Law
$$
V_{iduced}=\oint \vec{E} \cdot d\vec{l} = -\frac{\partial}{\partial t} \int \vec{B} \cdot d\vec{s} = -\frac{\partial \Phi_{B}}{\partial t}
$$

Where $V$ is the voltage induced in the wire due to the changing magnetic field $\vec{B}$.

In differential form it is
$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
$$

## Lenz's Law

The induced current is in a direction to produce an induced $\vec{B}$ that *opposes* the change in the external magnetic field.

Note that if the field is increasing the induced B field will attenuate.
If the field is decreasing the induced B field will enhance.
Best to be careful.

## Final Form of Maxwell's Equations

Not derived here but Maxwell discovered some issues with Ampere's law and fixed it so that it is correct. Thus we finally have the complete form of maxwells equations.

$$
\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}
$$
$$
\nabla \times \vec{E} = \frac{-\partial \vec{B}}{\partial t}
$$
$$
\nabla \cdot \vec{B} = 0
$$
$$
\nabla \times \vec{B} = \mu_{0}\vec{J} + \mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}
$$
Where $\vec{J}$ is the current density with direction same of the current.

Note that
$$
\mu_{0}\epsilon_{0}\frac{\partial \vec{E}}{\partial t} = \text{ displacement current}
$$


## Faradays Law Problems

There are 5 ways to change the magnetic flux.
1. Magnitude of $\vec{B}$ changes
2. The direction of $\vec{B}$ changes
3. The size of the loop, and therefore $\vec{A}$ changes
4. The direction of the loop changes, i.e $\vec{A}$ direction is changing.
5. A combination of the above


### Fixed loop in Changing $B$
Assuming $\vec{A}$ and $\vec{B}$ are in the same direction, and $\vec{B} = \vec{B}_{0}\sin(\omega t)$

We can use Faradays law to get
$$
V = -B\omega A\cos(\omega t)
$$
The negative sign tells us that the induced current opposes what we said was the positive direction.

### Rotating Loop in Uniform $B$

Suppose that we have some loop of wire that is spinning. $\vec{A}$ will make some angle with $\vec{B}$, we will call this $\theta$. $\theta$ is a function of $\omega$ the angular frequency at which the loop is turning.

Using faradays law we can derive
$$
V = NB_{0}A\omega \sin(\omega t)
$$
Where $N$ is the number of turns in the loop spinning. Also note that this is an AC generator.

### Sliding Rail, $A$ is changing

Suppose we have a resistor between 2 conducting rails and a bar at the end that is also conductive. If we push the bar down the rail, then we change $A$, so an EMF is induced in the rails.
We find
$$
-B_{0}L\vec{v} = V
$$
The sign is relative to the direction we take to be positive, in this case when it was done out, it happened to be negative.

We can generalize this to
$$
V = \int \vec{v} \times \vec{B} \cdot d\vec{l} = \text{ motional EMF}
$$
Which is the voltage we get from dragging a conductor across a magnetic field at a velocity $v$.
### Transformer Example

Requires a core that has a $\mu_{r} \gg 1$ to sort of guide the magnetic field. Also note that the construction of a transformer is similar to a solenoid. In the end we get

$$
\frac{V_{2}}{V_{1}}=\frac{N_{2}}{N_{1}}=\frac{I_{1}}{I_{2}}
$$
Where 1 is the input side, and 2 is the output side, and $N$ is the number of turns on that respective side.