The Laplace transform is a mathematical tool to transfer a time domain function into a [[Frequency Domain]] function. It is a more generalized version of the [[Fourier Transform]] and the derivation can be found in [[Derivation of Laplace Transform]].

We mainly use the Laplace transform to [[Solving Differential Equations - Laplace Transform| solve Differential Equations]] and to analyze [[Systems]] using their [[Transfer Function]].

## Bilateral Laplace Transform
The forward transform is
$$
X(s) = \int_{-\infty}^{\infty} x(t)e^{-st} \, dt 
$$

The inverse part of the bilateral transform is
$$
x(t) = \frac{1}{2\pi j} \int_{c-j\infty}^{c+\infty}  X(s)e^{st} \, ds 
$$
Where $c$ is the radius of convergence of the transform. For more on this, read the [[Derivation of Laplace Transform]].
## Unilateral Transform
The unilateral Laplace transform is a simplified version of the bilateral transform that is one-to-one, similar to the [[Fourier Transform]].

The forward unilateral transform is given by
$$
X(S)=\int _{0}^{ \infty}x(t)e^{-st} \, dt = \text{ unilateral laplace transform}
$$

To do the inverse transform, we usually use tables and known transforms. Sometimes the function we have in the $s$ domain doesn't look like any known transforms so we have to make use of the transform properties, and other mathematical techniques like [[Partial Fractions]] to 

There are some tables below I took from my Signals and Systems textbook, use them accordingly.

## Properties of the Laplace Transform

See the table
![[Pasted image 20251002135308.png]]

## Transform Table
![[Pasted image 20251002121723.png]]
