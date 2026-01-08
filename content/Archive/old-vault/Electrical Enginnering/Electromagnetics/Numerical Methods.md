We can use Gauss law to derive Poisson's equation for an electric field
$$
\nabla^{2}V=-\frac{\rho}{\epsilon_{0}}
$$
The problem is that without certain symmetry and niceties this is hard to compute analytically, so we will use a numerical approach.

So basically we have to solve $\nabla^{2}V$ in $n$ dimensions, which is a different way of saying that we have to compute the second derivative of $V$ in $n$ dimensions. 

So for 2D we create a 2 dimensional discrete grid, which is essentially a matrix. We name the columns $I$ and the rows $J$. The distance between $I$ and $I+1$ or $I-1$ we will call $\Delta$. Note that this is the same for $J$.

We can derive this discrete formula from the definition of the derivative (limit) but I will not do this.

$$
V(I,J) = \frac{1}{4}[V(I+1,J)+V(I-1,J)+V(I,J+1)+V(I,J-1)] + \frac{\Delta^{2}}{4}\rho(I,J)
$$
where $\rho$ is the charge density at the given point.

What we are essentially doing here is computing the average among the neighbor points. and adding the $\rho$ term to it.)

So we have to compute the results for every combination of $I$ and $J$. (nested loops).