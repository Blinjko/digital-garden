
## Why
Allows us to study
- Capacitors
- Circuit Elements
- Circuit Device Design
- Electric breakdown, high voltage, radar, space electronics
- Dielectrics
- Beam Steering
- Plasmas (thrusters, accelerators)


## Derivation of Maxwells Equation

To start we have the definition of cololumbs law
$$
F= \frac{kQ_{1}Q_{2}}{R_{12}^{2}}\hat{R_{12}}
$$
Where $k=8.99\times 10^{9}=\frac{1}{4\pi\epsilon_{0}}$

We let $Q_{2} = Q_{t}$, and call it the test charge. We take the limit as this goes to 0.
$$
\vec{E_{1}} = \lim_{ Q_{t} \to t } \frac{F_{1t}}{Q_{T}} = \text{electric field} = \frac{KQ_{1}}{R^2}\hat{R}
$$

Note that $R$ is the distance between the charges.

Superposition allows us to write this as a sum.
$$
\vec{E_{p}} = \sum_{i=1} \frac{Q_{i}}{4\pi\epsilon_{0}R_{i}^{2}}\hat{R_{i}}
$$
This then allows us to make our definition continuous in the form of differentials.
$$
d\vec{E} = \frac{dq}{4\pi\epsilon_{0}R^{2}} = [d\vec{E_{x}},d\vec{E_{y}},d\vec{E_{z}}]
$$
We could integrate this to find $\vec{E}$, but this is generally very difficult so we will need a different approach.

This leads us into gausses law.

Consider that we have a charge at the center of a sphere.
$$
\oint \vec{E} \cdot d\vec{S} = \oint \frac{Q}{4\pi\epsilon_{0}R^{2}}\hat{R} \cdot dS_{R}\hat{R} = \frac{Q}{\epsilon_{0}}
$$
We will not do the integral here but it evaluates to the above value.

Now suppose that we have a particle at the center of some arbitrary suface / shape. Then:
$$
\oint \vec{E} \cdot d\vec{S} = \int \frac{Q}{4\pi\epsilon_{0}R^{2}} \hat{R} \cdot(dS_{R}\hat{R} + \dots)
$$
The details left out at the end are not relevant because it is not really necessary because the dot product gets rid of them all. The point here is that the integral results in the same integral that we had before thus the result is also $\frac{Q}{\epsilon_{0}}$, this is our important result, the surface doesn't matter.

So generally then, for any closed surface.
$$
\oint \vec{E} \cdot d\vec{S} = \frac{Q}{\epsilon_{0}}
$$
Note that we can rewrite $dq$ as:
- $dq = \rho dv$
- $dq  = \rho_{s}dS$
- $dq = \rho_{l}dl$
Where the $\rho$'s represent the volume, surface, and line charge density.

This allows us to write
$$
\int \frac{\rho}{\epsilon_{0}} \, dv = \frac{Q_{enc}}{\epsilon_{0}}
$$
We can also use the divergence theorem to derive
$$
\oint \vec{E} \cdot d\vec{S} = \int \nabla \cdot \vec{E} dv = \int \frac{\rho}{\epsilon_{0}} \, dv
$$
Thus
$$
\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}
$$
This is the differential form of maxwell's equation for electrostatics and generally preferred because it is more precise.

The integral form is the form we saw earlier.
$$
\oint \vec{E} \cdot d\vec{S} = \frac{Q_{enc}}{\epsilon_{0}}
$$
Thus from Helmholtz theorem, which states that if we know the divergence and the curl, then we know the vector they operated on, we can find $\vec{E}$.

We know
$$
\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}
$$
We can compute the following, but trust me that it comes out to
$$
\nabla \times \vec{E} = 0
$$
These are max wells equations for electrostatics.

## Derivation of Electric Potential
We define the electrical potential energy as
$$
V_{AB} \equiv \frac{\text{electric potential energy}}{\text{unit charge}} =-\int_{A}^{B}\vec{E} \cdot d\vec{L}=V_{B}-V_{A}
$$
We also have
$$
V_{AB} = \int_{A}^{B} \nabla V \cdot d\vec{L} = -\int_{A}^{B}\vec{E} \cdot d\vec{L}
$$
Thus we can conclude that
$$\vec{E} = -\nabla V$$
This gives us a third way to determine the electric field.
Note that by convention we take $V_{A}$ to be our reference point at $\infty$, and thus $V_{A}=0$. Then in reality the voltage at a point is equal to $V_{B}$, when $A=\infty$

### Point Charge
To find $V$ when we have a point charge we do
$$
V=-\int_{A}^{B}\vec{E} \cdot d\vec{L} = V_{B} - V_{A}
$$
We say $A = \infty$, thus $V_{A}=0$. $B=R$, the the distance from the point charge $Q$. And finally we can substitute out $\vec{E}$ with coulombs law to get
$$
V(P)=-\int_{\infty}^{R} \frac{Q}{4\pi\epsilon_{0}R^{2}}\hat{R} \cdot dR \hat{R} = \frac{Q}{4\pi\epsilon_{0}R}
$$

### Many Charges
If we have many charges we just do a scalar summation
$$
V = \sum \frac{Q_{i}}{4\pi\epsilon_{0}R_{i}}
$$

### Continuous Charge
If we have a continouous charge we will have to use an integral
$$
V = \int \frac{dq}{4\pi\epsilon_{0}R}
$$

## Solving For Electric field.

### Using Gausses Law
Steps to follow
1.  Use symmetry to your advantage
2. Identify the position of your point $P$ and the direction of $\vec{E}$ utilizing the symmetry.
3. Draw a Gaussian surface that goes through $P$ and provides us with symmetry to make the problem easier. The surface will take the form of a sphere, cylinder, or box.
4. Evaluate $\oint \vec{E} \cdot d\vec{s} = \frac{Q_{enc}}{\epsilon_{0}} = |\vec{E}|A$ , where $A$ is the surface area of the Gaussian surface.

Here are the valid values for the areas depending on surface used.

Sphere
$$
A = 4\pi R^{2}
$$
Cylinder
$$
A=2\pi RL
$$
Box
$$
A=2A_{top}
$$
The reason that is 2 and not 1 is because when we use the box we have the electric field going through 2 faces.

So when do you use which surface? Whatever one tends best to symmetry.

- Sphere when we have a sphere of charge.
- Cylinder when we have a line charge, where the line charge is at the center.
- Box when we have a surface charge on an infinite plane.

There might be others but generally it will be one of the above.

So for example, if we have a sphere of charge density $\rho$, and we wanted to find the $\vec{E}$ at some point $P$ a distance $R$ from the center of the sphere of radius $R_{0}$.

We know the $\vec{E}$ will point radially outward and thus has a direction $\hat{R}$. We now want to solve for $\vec{E}$. We know
$$
Q_{enc}=\int \rho \, dv = \rho\frac{ 4}{3}\pi R_{o}^{3}
$$
This works out easily because we assume that $\rho$ is a constant, but if it varies we would actually have to compute the integral.

We know our Gaussian surface is a sphere, thus
$$
A=4\pi R^{2}
$$
And
$$
\frac{Q_{enc}}{\epsilon_{0}}=|\vec{E}|A
$$
So,
$|\vec{E}| = \frac{Q_{enc}}{\epsilon_{0}A}= \frac{\frac{\rho 4\pi R_{o}^{3}}{3}}{4\pi R^{2}\epsilon_{0}}=\frac{\rho R_{o}^{3}}{3\epsilon_{0}}$
We add the direction to get the final vector.
$$
\vec{E} = \frac{\rho R_{o}^{3}}{3\epsilon_{0}}\hat{R}
$$
### Using Coulombs Law

For reference
$$
d\vec{E} = \frac{dq}{4\pi\epsilon_{0}R^{2}}\hat{R}
$$

Here is the tips to solve problems where you have to use coulombs law to find the $\vec{E}$ at a point $P$.
1. Find a coordinate system where you can exploit symmetry (again)
2. Pick an observation point $P$
3. Identify a differential piece of charge $dq$
4. Label the distance $R$ from $dq$ to $P$
5. Evaluate $d\vec{E}$ in components, from Coulombs Law above.
	1.  For example in Cartesian $d\vec{E} = [dE_{x},dE_{y},dE_{z}]$
 6. Integrate each individual component to get the $\vec{E}$ for each direction.


An example.
We have a line charge of linear charge density $\lambda$. We want to find $\vec{E}$ at a distance $r$ from the line charge.

So, we let the line charge be the $Z$ axis, and we use cylindrical coordinates. Note that $r$ is the shortest distance from $P$ to the line charge. The distance from $P$ to the charge differential $dq$ is $R$. We can see $R$ as the hypotenuse of a triangle where $r$ is one of the legs and $\theta$ is the angle between them.

We can set $dq = \lambda dz$ since we decided that the line charge is along the z axis.

We can also define $z$ as the distance of $dq$ from the origin, this makes up the final leg of our triangle. Hence

$R^{2}=z^{2}+r^{2}$

Thus we have
$$
d\vec{E} = \frac{\lambda dz}{4\pi\epsilon_{0}(z^{2}+r^{2})} \hat{R}
$$

We know that
$$
dE_{r}=dE\cos(\theta)
$$
$$
dE_{z}=dE\sin(\theta)
$$
Thus
$$
E_{r}= \int_{-\infty}^{\infty} \frac{\lambda }{4\pi\epsilon_{0}(z^{2}+r^{2})} \frac{r}{\sqrt{ z^{2}+r^{2} }} \, dz 
$$
Note that 
$$
\cos(\theta)=\frac{A}{H}=\frac{r}{\sqrt{ z^{2}+r^{2} }}
$$
A similar integral can be done for the z component and we can then get the result. Symmetry tells us that the z direction will be zero through since we are vertically symmetrical.


### Using Electric Potential.

For a dipole we know that (not derived here)
$$
\vec{E}_{dip}=-\nabla_{spherical}V_{dipole}
$$

And more generally
$$
\vec{E} = -\nabla V
$$
Just be sure to get the coordinates right.

## Conductors
Low resistivity, essentially 0. If we put a conductor in a static electric field, the charges in side the conductor are free to move so they align with the electric field accordingly. This creates an electric field inside the conductor that opposes that of the outside static electric field.  These fields perfectly cancel each other out inside the condcutor thus leaving us with
$$
\vec{E}=0 \text{ in a conductor}
$$
for electrostatics.
Thus we also know that the volumetric charge density $\rho_{v}=0$
$$
\rho_{v}=0 \text{ for a conductor}
$$
because $\nabla \cdot \vec{E}= \frac{\rho_{v}}{\epsilon_{0}}=0$ because $\vec{E}$ is 0 from before, thus $\rho_{v}$ must be 0.

We can also derive that $V$ is the same at all places in a conductor. This is because $V=\int_{a}^{b}\vec{E} \cdot d\vec{L}$ and $\vec{E} = 0$

So this then leaves all the charge on the surface of the conductor because the volumetric charge density is 0. Using Gausses law we can find that on the surace, the $\vec{E}$ is
$$
\vec{E}=\frac{\sigma}{\epsilon_{0}}
$$
where $\sigma$ is the surface charge density. Note that the electric field here is perpendicular to the surface.

All the above also holds true if the conductor is hollow, or not solid. In fact the name for a conducting structure that surrounds something else is called a Faraday cage. Nothing outside the Faraday cage can cause an electric field inside it, but items inside the faraday cage can still create fields inside.

Another useful fact is that $E$ and $\sigma$ are largest where there is a small radius of curvature on the conductor, like sharp points.

## Dielectrics
Also known as insulators. We see that in a dielectric that is exposed to an external electric field that the atoms polarize inside. Note that no charges flow because it is an insulator. What we end up getting though is a small electric field inside the insulator because one side of the insulator has all negative charges on it, and the other all positive charges, and this creates a small electric field that opposes the external one. We quantify this as
$$
E_{in}=\frac{E_{ext}}{\epsilon _{r}}
$$
Where $\epsilon_{r}$ is the relative permittivity of the dielectric. In a sense we can think of $\epsilon_{r}$ as a measure of how much $E$ is reduce in a dielectric.

We can then define a quantity $D$ known as the electric displacement field or electric flux density.
$$
\vec{D}=\epsilon_{0}\epsilon_{r}\vec{E}=\epsilon \vec{E}
$$
$D$ represents the response due to *free charge* in the dielectric, that is, it neglects the polarization charge in the dielectric. We can introduce Gauss's law for $D$ to be
$$
\oint \vec{D} \cdot d\vec{s} = Q_{free_{enclosed} }
$$
The free charge is the charge that we have control over, and the result of the above integral is the free charge that is enclosed by the Gaussian surface we used. We also have the relation
$$
\nabla \cdot \vec{D} = \rho_{free}
$$
Knowing these details, we can find the electric field at a particular point on our Gaussian surface by using $D$ and it's relations.

## Capacitors
You are already familiar with what they are and how they are used in circuits and devices like MOSFET's what we are concerned with are the calculations, and to do this we introduce a 6 step process.
1. Assume $Q$ and $-Q$ charge on the "plates" of the capacitor
2. Use $\oint \vec{D} \cdot d\vec{s} = Q_{enc}$ to find $D$ note that $D$ isn't changing so $DA=Q_{enc}$ where $A$ is the area of the Gaussian surface
3. Use $D=\epsilon_{r}\epsilon_{0}E$ to find $E$
4. Use $V=|-\int_{\text{-plate}}^{\text{+plate}} \vec{E} \cdot d\vec{l}|$ to find the voltage across the plates of the capacitor
5. Find the capacitance using $C=\frac{Q}{V}$
6. Verify that the capacitance depends on the geometry only, if this is not true your answer is incorrect.



## Energy Stored
Not derived but true for any $E$ field.

$$
u_{m}=\frac{1}{2}\epsilon E^{2} = \text{ energy per unit volume in E field}
$$
