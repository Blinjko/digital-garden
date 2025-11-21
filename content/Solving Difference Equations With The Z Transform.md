We follow the same general pattern we normally do when [[Solving Differential Equations - Laplace Transform|solving differential equations with the Laplace transform]].
1. Do the [[Z Transform]] of both sides
2. Factor out $Y[z]$
3. Solve for $Y[z]$
4. Use [[Partial Fractions]] to decompose the complex function in the $z$ domain.
5. Use the [[Z Transform|transform table]] to do the inverse transform to get $y[k]$

## Example
$$
y[k-1]+y[k]=f[k]
$$
First we do the Z transform, in this case we will be using one of the [[Z Transform|shift properties]]. Doing so yields
$$
Y[z]z^{-1}+y[-1]+Y[z]=F[z]
$$
If were given $y[-1]=0$ then we get
$$
Y[z]=\frac{F[z]}{1+z^{-1}}
$$
Depending on $F[z]$, which you would probably know, you can compute this, then do [[Partial Fractions]], being careful to [[Z Transform|factor out a Z]]. Finally just use the table to do the inverse transform and get $y[k]$.