Difference equations are the discrete from of a differential equation.
From the limit definition of the derivative we can get a form to rewrite the derivative.
$$
\frac{dy}{dt}=\frac{1}{T}(y[k]-y[k-1])=\frac{1}{T}(y[k+1]-y[k])
$$
Where $T$ is the distance between each discrete sample. Notice that as $T$ gets smaller we get closer to the definition of the derivative and the result becomes more precise.

Note that in the discrete world
- Derivatives become differences
- Integrals become summations

This will be apparent through these notes.

## Rewriting a Differential Equation
If we have the differential equation
$$
y'(t) + y(t) =x(t)
$$
We can turn it into a difference equation using the limit definition of the derivative. This yields.
$$
y[k]-y[k-1]+y[k]=x[k]
$$
Notice that if we know $y[k-1]$ then we can solve this equation because we can rearrange
it in terms of $y[k]$ like so,
$$
y[k] = \frac{x[k]+y[k-1]}{2}
$$

### Iterative numeric solving

So, if we know $x[k]$ and $y[k-1]$ we can simply iterate through this with a computer and compute a numeric solution. This works because $y[k]$ is only defined in terms of the input $x[k]$, which we know, and the past version of $y$ which we also know.

As the order of the differential equation increases so does the prior points we have to know. So, say we had an $n$'th order differential equation, then we would have terms like $y[k-n]$ and we would need $n$ points in past to begin the iterative solver. This is similar to how to solve a differential equation analytically we need to know $n$ initial conditions, where $n$ is the highest order.

## Analytical Solving / General Solutions
Similar to an ODE, we can solve a difference equation analytically rather than numerically.

To begin, suppose we have a difference equation of the form
$$
y[k+n] + a_{n-1}y[k+n-1] + \dots + a_{0}y[k] = b_{m}f[k+m]+b_{m-1}f[k+m-1]+\dots+ b_{0}f[k]
$$

If we define the operator $E^{n}$ as the shift operator, such that
$$
E^{n}y[k]=y[k+n]
$$

Then we can rewrite the difference equation as
$$
y[k](E^{n}+a_{n-1}E^{n-1}+\dots+a_{0})=f[k](E^{m}+b_{m-1}E^{m-1}+\dots+b_{0})
$$
And then we can define
$$
(E^{n}+a_{n-1}E^{n-1}+\dots+a_{0}) = Q[E]
$$
And
$$
(E^{m}+b_{m-1}E^{m-1}+\dots+b_{0}) = P[E]
$$

We can rewrite our difference equation as
$$
y[k]Q[E] =f[k]P[E]
$$
Which looks similar to what we did with the differential equation case.

### Generalized Solution
We can express the generalized solution to a difference equation as
$$
y[k] = \text{zero input} + \text{zero state}
$$

### Finding Zero Input Solution

First set $Q[E]$ to $Q[\gamma]$, and set that to 0
$$
Q[\gamma] = 0 = (\gamma^{n}+a_{n-1}\gamma^{n-1}+\dots+a_{0}) = \text{ characteristic polynomial }
$$

Second find the roots of this polynomial. Recall that an $n$'th order polynomial will always have $n$ roots. Also, complex roots always come in the form of complex conjugate pairs.

#### Distinct Real Roots
So, for an $n'th$ order difference equation, after we find our roots, if they are distinct and real, our zero input solution would look something like
$$
y[k] = C_{1}\gamma_{1}^{k}+C_{2}\gamma_{2}^{k}+\dots+C_{n}\gamma_{n}^{k}
$$

#### Repeated Roots
For a root that is repeated $r$ times, it would look like.
$$
y[k] = (C_{1}+C_{2}k+C_{3}k^{2}+\dots+C_{r-1}k^{r-1})\gamma^{k}_{1}
$$
#### Complex Roots
If we have a root that is complex, we can express it as
$$
\gamma = |\gamma|e^{\pm j\beta}
$$
Which then makes the solution look like
$$
y[k] = C_{1}|\gamma|^{k}\cos(\beta k+\theta)
$$
Where $C_{1}$ and $\theta$ are arbitrary constants we need to determine based on information given.

#### Putting it Together
So once we collect all our roots into an $y[k]=$ equation, then we need to use the information given to solve for the arbitrary constants. I imagine that this takes the form of us being given known values of $y[k]$ at some distinct points $k$. Obviously for an $n'th$ order we would at least need to know $n$ different points to find all the constants.

### Zero State Solution
See [[Difference  Equations - Zero State Solution]]
INFORMATION IS INCORRECT, WILL BE SUBBED OUT TO DIFFERENT NOTE
As we can expect
$$
y[k] = h[k]*f[k]
$$
So, we need to find $h[k]$ and do a discrete form of convolution.

#### Finding $h[k]$
We can use the following to find $h[k]$
$$
h[k] = \frac{b_{0}}{a_{0}}\delta[k]+y_{n}[k]u[k]
$$
Where $y_{n}[k]$ is the zero input solution where all the initial conditions are 0 except the highest order, which is 1.

#### Discrete Convolution, The Convolution Sum
The discrete form of integrals is sums, so our convolution integral turns into the convolution sum.
$$
h[k]*f[k] = \sum_{m=-\infty}^{\infty}h[m]f[k-m]
$$
Note that this sum has to be done for *every point k*. That is to say we have to compute this sum $k$ times.

A way to visually think about the convolution sum is to re-imagine what we had for the continuous case, we flip one then shift it. Except here we only have discrete points, so we flip and shift, multiply the discrete points that overlap and sum their products. That's it, then we shift it again for another $k$ value and repeat. Overall it is simpler than the continuous case.

## Stability
To look at stability we look at our $\gamma$ values, but first we have to make a connection to the continuous case.
$$
e^{\lambda_{1}t} =e^{\lambda_{1}Tk}=(e^{\lambda_{1}T})^{k}=\gamma^{k}
$$
Where
$$
\gamma = e^{\lambda T}
$$
This is the relationship between $\gamma$ and $\lambda$ from the continuous case.

Essentially what we find is that for the system to be stable, $\gamma$ has to be within the unit circle on the complex plane. That is
$$
0<|\gamma|< 1 \implies \text{stable}
$$
$$
|\gamma| > 1 \implies \text{unstable }
$$
$$
|\gamma| = 1 \implies \text{ marginally stable}
$$


### Simplifying the Convolution Sum
Sometimes convolution sums can be simplified into an expression that doesn't involve a sum. Usually we begin by constraining the bound using step functions if they are present. Then, if we have exponential's, we can usually express it as a geometric sum like:
$$
\sum_{m=N_{1}}^{N_{2}}a^{m}= \frac{a^{N_{2}+1}-a^{N_{1}}}{a-1}
$$
