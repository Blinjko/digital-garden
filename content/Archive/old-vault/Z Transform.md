The Z transform is the discrete version of the [[Laplace Transform]]. Similar to the [[Discrete Fourier Transform]], the signal is discrete in time and in the Z domain. The usage of the Z transform is similar to that of the standard Laplace transform, solve difference equations, and analyze [[Systems]] based on their [[Transfer Function]].

## Derivation
If we take the [[Discrete Time Fourier Transform|DTFT]] and let $z=re^{j\Omega}$, then we get the Z transform.

For reference, the DTFT
$$
F(\Omega)=\sum_{k=-\infty}^{\infty}f[k]e^{-j\Omega k}
$$
The Z transform is
$$
F[z]=\sum_{k=-\infty}^{\infty}f[k]z^{-k}
$$
### What is $r$
$r$ is a value that essentially makes the sum converge to a value. The value of $r$ depends on $f[k]$ and the space in which $r$ can reside is called the **Radius of Convergence**.


## Inverse Z transform
If you're feeling spicy and want to do a surface integral in the complex plane.
$$
f[k]=\frac{1}{2\pi j}\oint F[z]z^{k-1}dz
$$
But usually we just use [[Partial Fractions]] to make the function we have look like a function we know the forward transform of. I.E we will use the table and identities to do the inverse transform instead.

### Note on Partial Fractions
When using [[Partial Fractions]] to do the inverse transform, the first thing you should do is divide out $z$ so that you end up with something like
$$
\frac{F[z]}{z}=\text{your thing you will do PF on}
$$
Then do the partial fractions. Once you do your decomposition, then multiply the $z$ back in, and you will realize that the terms you have now look very similar to one in the table below :). This same technique applies for the [[Discrete Fourier Transform]]'s inverse.

## Properties of Z transform
The properties are mostly the same of the regular Laplace transform, except here I will introduce how the [[Difference Equations|shift operator]] in time effects the results in the z domain.  These are relevant when we go to [[Solving Difference Equations With the Z Transform]]

### Forward Shifts
Observe the pattern
$$
f[k+1]u[k]\implies zF[z]-f[0]
$$
$$
f[k+2]u[k]\implies z^{2}F[z]-z^{2}f[0]-zf[1]
$$
And in general
$$
f[k+m]u[k]\implies z^{m}F[z]-\sum_{k=0}^{m-1}z^{m-k}f[k]
$$
$$
E^{m}f[k]\implies z^{m}F[k]-z^{m}f[0]-z^{m-1}f[1]-\dots-zf[m]
$$

### Backwards Shifts
Observe the pattern (again)
$$
f[k-1]u[k]\implies z^{-1}F[z]+f[-1]
$$
$$
f[k-2]u[k]\implies z^{-2}F[z]+z^{-1}f[-1]+f[-2]
$$
And in general
$$
f[k-m]u[k]\implies z^{-m}F[z]+\sum_{k=1}^{m}z^{k-m}f[-k]
$$
$$
E^{-m}f[k]\implies z^{-m}F[k]+z^{-(m-1)}f[-1]+\dots+f[-m]
$$

## Transform Table
This is useful in general, but also when doing [[Partial Fractions]]
![[Pasted image 20251120184456.png]]