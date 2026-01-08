For the Fourier Transform, we have two different discrete versions.
1. DTFT (Discrete time Fourier Transform) $\implies$ Time is discrete, frequency domain is continuous, used for hand calculations.
2. DFT (Discrete Fourier Transform) $\implies$ Time and frequency domains are discrete, generally used with computers.

## DTFT

The forward transform, note how the output is continuous.
$$
F(\Omega)=\sum_{-\infty}^{\infty}f[k]e^{-j\Omega k}
$$
Where
$$
\Omega = \frac{\omega}{F_{s}}
$$
$F_{s}$ is the sampling frequency of the signal.

The reverse transform is
$$
f[k] = \int F(\Omega)e^{j\Omega k}d\Omega
$$
Note that the output here is discrete.

Another thing to note about the DTFT is that the frequency domain has been normalized, which is evident from the definition of $\Omega$.

![[Pasted image 20251111142918.png]]
![[Pasted image 20251111143016.png]]
## DFT

The forward transform is
$$
F[m] = \sum_{k=0}^{N-1}f[k]e^{-jm\Omega_{0}k}
$$
Where $N$ is the number of samples

The inverse transform is
$$
f[k] = \sum_{m=0}^{\infty}F[m]e^{jm\Omega_{0}k}
$$
Note that here both of them are discrete. Also $\Omega_{0}$ is the distance between each sample in radians and thus has units of radians per sample. Thus intuitively we define it as
$$
\Omega_{0}=\frac{2\pi}{N}
$$
## Solving DTFT Problems
When doing problems by hand we usually want closed form solutions and we will use the DTFT. The general problem solving process is as follows.
1. Establish your $f[k]$ and substitute into the transform.
2. It will probably look like a geometric series, simplify it and use the solution for the geometric series.

### Solution to Geometric Series
If it is not finite
$$
\sum_{k=0}^{\infty}x^{k}=\frac{1}{1-x}
$$
If it is finite
$$
\sum_{k=M}^{N}x^{k}= \frac{x^{N+1}-x^{M}}{x-1}
$$
From the table previously we can see that inputs of the form $a^{k}u[k]$  have the following DTFT transform
$$
a^{k}u[k] \implies \frac{e^{j\Omega}}{e^{j\Omega}-a}
$$
Which can be useful to use instead of deriving it every time.