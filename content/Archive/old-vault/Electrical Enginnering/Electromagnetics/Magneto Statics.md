## Notes On Notation
- $B$ is the magnetic flux density
- $H$ is the magnetic field intensity
- $B = \mu H$

## Amperes Law
We know from Ampere
$$
B_{\text{around wire}} \propto I_{\text{through}} \text{ and } \frac{1}{r}
$$
Where $r$ is the distance from the wire.

Also
$$
B_{wire}=\frac{\mu_{0}}{2\pi} \frac{I}{r}
$$
We can generalize this to
$$
\oint \vec{B} \cdot d\vec{l} = \mu_{0}  I_{enc} = \mu_{0}\int \vec{J} \cdot d\vec{s}
$$
This is Amperes law. $\vec{J}$ is the current density.

If we apply this to a wire we get
$$
\oint \vec{B} \cdot d\vec{l} = \mu_{0}I_{enc}
$$
The direction of $\vec{B}$ has to be determined using the RHR, and the direction of $d\vec{l}$ is the direction along the Amperian loop we are integrating over.


Using stokes theorem we can derive
$$
\nabla \times \vec{B} = \mu_{0}\vec{J}
$$
Which is the differential form of Amperes law.

Amperes Law for $H$ is 
$$
\oint \vec{H} \cdot d\vec{l} = I_{enc}
$$
Where $d\vec{l}$ is the along the enclosing loop of $I_{enc}$ 

## Biot-Savart

Since there is no magnetic monopolies that we know of, we can deduce
$$
\nabla \cdot \vec{B} = 0
$$
All static magnetic fields are from currents.

From math we know
$$
\nabla \cdot (\nabla \times A) = 0
$$
For any $A$
Thus, we can take $\nabla \times A = \vec{B}$  since $\nabla \cdot \vec{B} = 0$

From Helmholtz theorem we know that if we know the curl and divergence then we know the quantity. We know $\nabla \times A$ but what is $\nabla \cdot A$ . Well it turns out that the divergence of $A$ has to physical meaning so we can pick the value we want. This is called the gauge, and for magneto statics we will use coulomb gauge which says
$$
\nabla \cdot A = 0
$$

Using another math identity
$$
\nabla(\nabla \cdot \vec{A}) - \nabla^{2}\vec{A} = \mu_{0}\vec{J}
$$
We know $\nabla \cdot \vec{A} = 0$ so
$$
-\mu_{0}\vec{J} = \nabla^{2}\vec{A}
$$
We can relate this to the expression we have for Voltage to derive
$$
\vec{A} = \mu_{0}\int \frac{J}{4\pi R}dv
$$
Which will be used later to make calculations easier, specifically for radiation and antennas.

If we apply the above formula to a wire of length $dl$ and some cross sectional area $A$ then we get
$$
Jdv=JAdl
$$
But since $JA=I$ we get
$$
\vec{A}_{wire} = \frac{\mu_{0}}{4\pi} \int \frac{I}{R}d\vec{l}
$$
But we want $\vec{B}$ so we will use $\nabla \times \vec{A} = \vec{B}$
Using a few identities we can derive that
$$
\vec{B}_{wire}= \frac{\mu_{0}I}{4\pi}\int \frac{d\vec{l} \times \hat{R}}{R^{2}}
$$
Which is known as the Biot-Savart Law, and is used to find the magnetic field at a distance $R$ away from a current carrying wire.

Note that $d\vec{l}$ is has a direction along the current carrying wire. $\hat{R}$ is the direction pointing from the current carrying wire to the point of interest that is $R$ distance away.

## Current Loop Example

If we have a current carrying loop parallel to the xy plane, centered on the z axis, and we want the magnetic field at some point $P$ on the z axis.
$b$ is the radius of the loop, and $R$ is the distance from the loop edge to $P$. Since $P$ is $z$ units higher than the loop, 
$$
R = \sqrt{ b^{2} +z^{2} }
$$
Also $R$ is constant.

We can find $d\vec{l} = bd\phi \hat{\phi}$. Using biot savart law we eventually get
$$
\frac{\mu_{0}\vec{m}}{2\pi(b^{2}+z^{2})^{3/2}}
$$
Where 
$$
\vec{m} = I\vec{A} = \text{ magnetic dipole moment}
$$
for any current loop.

To find the direction of $\vec{A}$ we use the right hand rule, curling our fingers in the direction of current flow in the loop. Your thumb points in the direction of $\vec{A}$.

Notice that if $z=0$ then we get 
$$
\vec{B} = \frac{\mu_{0}I}{2b}
$$
And as $z$ approaches infinity
$$
\vec{B} = \frac{\mu_{0}\vec{m}}{2\pi z^{3}}
$$

## Lorentz Force

Defined as
$$
\vec{F} = q\vec{v} \times \vec{B}
$$
where $\vec{v}$ is the velocity of the charge.

For a wire we can rewrite this as
$$
d\vec{F} = dq\vec{v} \times \vec{B}
$$
And after a few simplifications we get
$$
d\vec{F} = Id\vec{l} \times \vec{B}
$$
So if we have 2 long current carrying wires that are parallel, where the current is flowing in the same direction, we can calculate the force of the wires on each other like
$$
\vec{F}_{12}=I_{2}\vec{L}_{2} \times \vec{B}_{1}
$$
Where the subscripts denote which wire the quantity is from.
Note:
$$
\vec{F}_{12} = -\vec{F}_{21}
$$
Eventually we find that in this case
$$
\vec{F}_{12}=I_{2}L \frac{\mu_{0}I_{1}}{2\pi r}
$$
where $r$ is the distance between the wires.
So, if 2 parallel wires carry current in the same direction they will attract one another, likewise the opposite is true.

## Tips when finding $\vec{B}$
1. Biot savart law is good for wire segments
2. Ampere's law is best when you have cylindrical symmetry.


## Magnetic Field in Solenoid

Derivation not done here, but eventually we get
$$
\vec{B} = \mu_{0}nI\hat{z}
$$
Where $n$ is the turns per unit length and $\hat{z}$ is the the direction of the magnetic field, pointing down the center of the solenoid.


## Magnetic Field in Co-Ax

Not derived but the result is
$$
\vec{B} = \frac{\mu_{0}I}{2\pi r}
$$
Which is the same expression for a wire.

## Magnetic Flux

Defined as
$$
\Phi_{B}=\int \vec{B} \cdot d\vec{s} = \text{ magnetic flux}
$$

For a Co-Axial the magnetic flux comes out to be
$$
\phi_{B}=\frac{\mu_{0}I}{2\pi}\ln\left( \frac{b}{a} \right)L
$$
Where $b$ is the outer radius, $a$ the inner, and $L$ is the length of the cable.


## Inductance

If we consider the ratio 
$$
\frac{N\Phi_{B}}{I}
$$
Where $N$ is the number of turns of wire.


Then, from the result of the Co-Ax we get, NOTE N = 1
$$
\frac{\Phi_{B}}{I}= \frac{\mu_{0}}{2\pi}\ln\left( \frac{b}{a} \right)L = \text{ self inductance of co-ax}
$$

So, in general we define self inductance as
$$
\frac{\Phi_{B}}{I}= L
$$
We can calculate the energy stored in the magnetic field with
$$
E_{stored} = \frac{1}{2}LI^{2}
$$
Similar to Capacitance, inductance is purely a function of geometry.

### Mutual Inductance

Suppose we have to current carrying loops of wire near each other then
$$
\Phi_{12} = \text{ magnetic flux through loop 2 due to loop 1 }= \int \vec{B}_{1} \cdot d\vec{s}_{2}
$$
Or
$$
M_{12} = L_{12}=\frac{N_{2}\Phi_{12}}{I_{1}} = \text{ mutual inductance}
$$
Similarly For the opposite
$$
M_{21}=L_{21}=\frac{N_{1}\Phi_{21}}{I_{2}}
$$

Where $N$ is the number of turns in each respective loop.

Note that $L_{12}=L_{21}$ always.

### Solving For Inductance Tips
1. Assume $I$ in the easiest loop.
2. Find $H$ from $\oint \vec{H} \cdot d\vec{l}=I_{enc}$
3. Find $\vec{B}=\mu H$
4. Find $\Phi_{m}=\int \vec{B} \cdot d\vec{s}$
5. $L= \frac{N\Phi}{I}$ Which should only depend on geometry.

## Magnetic Materials
We define $\vec{H}$as the response to free current.
$$
\oint \vec{H} \cot d\vec{l} = I_{free}
$$
$$
\vec{B} = \mu \vec{H}
$$
Where
$$
\mu=\mu_{0}\mu_{r}
$$

recall
$$
\vec{m} = I\vec{A}
$$
We define
$$
\vec{M} = \rho \vec{m}_{atom} = \text{ magnetization }
$$
Where $\rho$ is the material density.

For any given material
$$
B_{in} = B_{extern} + \mu_{0}M = \mu_{0}H + \mu_{0}M
$$
Also sometimes used is
$$
\vec{M} = X_{m}\vec{H}
$$
Where $X_{m}$ is the magnetic susceptibility and sometimes is given instead of $\mu_{r}$.

$$
\mu_{r}=1+X_{m}
$$
### 3 Cases of What Happens to Materials in B-Field

#### Paramagnetic
The internal, atomic, magnetic dipole's slightly align with the external field, contributing to minor field enhancement.
Here $\mu_{r}\geq 1$

#### Diamagetic
The internal atomic dipole moments oppose the outer B-field, which is seen in plasmas. Here $\mu_{r}\leq 1$
And we get $B=\mu_{r}B_{o}$


#### Ferromagnetic
The internal magnetic dipole moments of the atoms strongly align with the external B-field causing strong field enhancement. In the material small domains form where the $\vec{m}$ is uniformly in the same direction.

Here $\mu_{r} \gg 1$ sometimes in the thousands.


### Iron Core Solenoid Example
Not derived but we get

$$
I_{enc} = Inl
$$
where $n= \frac{N}{l}$

Furthermore
$$
H = nI = \frac{NI}{l}
$$
Then
$$
\vec{B}_{in core} =  \mu \vec{H} = \mu nI\hat{z}
$$
$$
\vec{B}_{out} = 0 = \text{ outside solenoid }
$$
$$
\vec{B}_{air} = \mu_{0}\vec{H} = \mu_{0}nI\hat{z} = \text{ field in solenoid but not in core }
$$

Eventually we derive the inductance to be
$$
L = \frac{\mu nI\pi a^{2}}{I}
$$
Where $a$ is the radius of the core material.

## Torque

Defined as 
$$
\tau = \vec{m} \times \vec{B}
$$
Where $\vec{B}$ is the surrounding B-field.


## Energy Stored
Not derived here, but for any B-field

$u_{m}=\frac{1}{2}\mu H^{2} = \text{ energy per unit volume }$

