## Coordinate Systems
First a useful reference:
![[Pasted image 20250920085541.png]]

### Cartesian
In Cartesian we represent a point $P$ as the 3 axial components. $P=(x,y,z)$ . To represent it as a vector we use the notation $\vec{P}=[x,y,z]  = x \hat{x} + y\hat{y} + z \hat{z}$ . Where the hat's denote the unit vectors of their respective axis. 

### Cylindrical
To represent a point we use $r$, $\phi$, and $z$. Where $\phi$ is the angle we make with the positive x axis, $r$ is the distance from the z axis, and $z$ is the height on the z axis. To describe a point in cylindrical we need all three values, $P =(r,\phi,z)$, however to represent the vector all we need is $\vec{P}=[r,z]$. Note that each quantity still has their own respective unit vectors, $\hat{r},\hat{\phi},\hat{z}$. $\hat{\phi}$ points in the direction of rotation, whilst $\hat{r}$ points in the direction of the radius away from the z-axis, parallel to the "x-y" plane.


### Spherical
To represent a point in spherical we use $P=(R,\theta,\phi)$, where $\theta$ is the angle made with the positive z-axis, $\phi$ is the angle made with the positive x-axis, and $R$ is the distance from the origin. Similar to before, the way that we define the vector and the point is not the same, in spherical the vector is given as $\vec{P}=[R]$. And once again each quantity has it's own unit vector. $\hat{R}$ points in the direction of $R$, $\hat{\phi}$ points in in the direction of rotation about the z-axis, and $\theta$ points in the direction of rotation about the x-axis.

### Conversion Between Systems
Often we will have to convert between systems, since we can only do vector operations if we are in the same system. Use the chart below for reference, it will save me a lot of typing.:
![[Pasted image 20250916155323.png]]

## Integrals With Vectors

![[Pasted image 20250918152956.png]]

## Line Integrals
For line integrals we are integrating over some length $d\vec{l}$, on a curve. So say we are integrating $\vec{F}$  over some given curve, then we get.
$$
\int \vec{F}\ \cdot d\vec{l}
$$
Now, depending on what the curve is will determine what $d\vec{l}$ will be in. We then have to break down $d\vec{l}$ into vector component form, what components it is made of depends on the problem, use the table above to break it down. We than have to make the coordinate systems of $\vec{F}$ and $d\vec{l}$ the same so we can compute the dot product. Depending on what coordinates we end up in determines the bounds on the integral. Now in practice we want to operate in the coordinate system that gives us the easiest integral to do, so keep this in mind. It is also important to note the relationship between the unit vectors of the coordinate systems, use the tables above for this.

### Surface Integral
Surface integrals are similar to line integrals.
$$
\oint \vec{F} \cdot d\vec{s}
$$
Note that the closed loop indicates that we have a closed surface. Now depending on the surfaces involved we might want to break up the integral into multiple pieces over each surface (like if you had a half dome, integrate over the circular base, and the dome part). Note that $d\vec{s}$ is a vector that is normal to the surface and points outward. Similar to the line integral, we have to put $d\vec{s}$ into it's vector components, and to do this we have to look at table 3-1 and find the corresponding $d\vec{s}$ that we want. Which one you use depends on what unit vector $d\vec{s}$ aligns with. And same as before the coordinate systems have to match so that we can do the dot product and then ultimately compute and evaluate the integral.

Note that these integrals tend to be 2 dimensional and breaking down into double integrals.

## Volume Integral
The easiest of them all because we don't have to deal with any coordinate nonsense.
$$
\int \vec{F} \cdot d\vec{v}
$$
$d\vec{v}$ usually will break down into the three components of whatever coordinate system is easiest to work in (use the table above, differential volume section). As always convert $\vec{F}$ into the same system so you can do the dot product and get the triple integral.

## Differential Operators

### Gradient
$\nabla$ is the gradient operator. To apply the gradient operator to a vector like $\nabla \vec{V}$, we take each component of the gradient vector, element wise, and apply it to $\vec{V}$ element wise, the result is a vector. 

The gradient tells us the direction of fastest increase.

What the gradient vector is depends on the coordinate system, they are as follows for each of the ones used here.

Cartesian
$$
\nabla=\left[ \frac{\partial}{\partial x},\frac{\partial}{\partial y},\frac{\partial}{\partial z} \right]
$$

Cylindrical
$$
\nabla=\left[ \frac{\partial}{\partial r}, \frac{1}{r} \frac{\partial}{\partial \phi},\frac{\partial}{\partial z} \right]
$$
Do the differential first then multiply by the coefficient.

Spherical
$$
\nabla=\left[ \frac{\partial}{\partial R}, \frac{1}{R} \frac{\partial}{\partial \theta}, \frac{1}{R\sin(\theta)} \frac{\partial}{\partial \phi} \right]
$$
Note that we apply the derivative then multiply it with the coefficient.

### Divergence
Divergence is the dot product of your vector and another special vector, which is like the gradient vector but not always the same. See the table above.
$$
\nabla \cdot \vec{V}
$$
### Curl
The curl is when we take the cross product of a particular gradient vector and the vector we want to operate on. Not all gradient vectors are the same for each operation, so see the table above.
$$
\nabla \times \vec{V}
$$



## Theorems

### Divergence Theorem
$$
\oint \vec{E} \cdot d\vec{s} = \int (\nabla \cdot \vec{E}) dv
$$
If we are integrating the vector $\vec{E}$ over a closed surface, this is equal to the volume integral  of the divergence of $\vec{E}$, i.e $\nabla \cdot \vec{E}$. Which is generally nicer because volume integrals are easier to work with when it comes to coordinates. Note that since the divergence results in a scalar, $v$ in $dv$ is also scalar.

The volume that we integrate over is the volume bounded by the closed surface.

### Stokes Theorem
$$
\oint \vec{A} \cdot d\vec{l} = \int \left(\nabla \times \vec{A} \right) \cdot d\vec{s}
$$
States that the integral of $\vec{A}$ over a closed loop is equal to the surface integral of the curl of $\vec{A}$ over the area that loop encloses. Note that the curl operation results in a vector, so we need to do the curl and then the dot product with the differential.


### Helmholtz Theorem
If $\nabla \cdot \vec{F}$ and $\nabla \times \vec{F}$ are both known, then we know $\vec{F}$
