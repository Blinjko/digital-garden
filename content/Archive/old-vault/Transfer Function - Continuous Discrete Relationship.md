
A [[Transfer Function]], $H(s)$ is in continuous time, that is, we can use the [[Laplace Transform]] to extract the [[Impulse Response]] of the system. When we design [[Filters]], we also normally do this in continuous time. And on top of all of this, the real world can be thought of as continuous. But what often happens in practical scenarios is, computing elements in discrete time is significantly easier and overall better than doing things in continuous time. After all, computers are readily available and rather quick these days, and the implementation is generally simpler than the analogue counterparts. Now we have a problem though, if we design our system in continuous time, but we do calculations in discrete time, how can we do this?

Well we can model a continuous system such as
$$
f(t) \implies h(t) \implies y(t)
$$
where $f(t)$ is the input.

We can still have an overall continuous system, but in between we discritize the input, do processing in the discrete domain, then results back into the continuous domain. Our diagram then becomes
$$
f(t) \implies ADC \implies h[k] \implies DAC \implies y(t)
$$
Where the ADC is the analogue to digital converter, and DAC is a digital to analogue converter, both of which are generally off the shelf items you can buy.

The question still remains though, if I design my systems in continuous, that is I have an $H(s)$, how can I determine $H[z]$?

Well it turns out there various techniques for doing this, of varying complexity.

## Impulse Invariance Method
This is a technique for mapping $H(s)$ to $H[z]$, but there is a restriction. $H(s)$ must decay as frequency increases, otherwise the sampling rate we would have to choose would be infinite. An example of something that wouldn't work with this method is a high pass filter, or anything similar looking. This will make sense when we talk about choosing a sampling rate.

So, the mapping is as follows
$$
H(s)=\sum_{l=1}^{n} \frac{C_{l}}{s-\lambda_{l}}\implies H[z]=T\sum_{l=1}^{n} C_{l}\frac{z}{z-e^{\lambda_{l}T}}
$$
Where $T=\frac{1}{F_{s}}=\text{period}$, and $F_{s}$ is the sampling frequency in Hertz.

This mapping requires that we first decompose $H(s)$ using [[Partial Fractions]] to make it look like
$$
H(s)=\frac{C_{1}}{s-\lambda_{1}}+\frac{C_{2}}{s-\lambda_{2}}+\dots \frac{C_{n}}{s-\lambda_{n}}
$$
Once we do that we take each term and run it through the mapping to get something like
$$
\frac{C_{1}}{s-\lambda_{1}}\implies  TC_{1} \frac{z}{z-e^{\lambda_{1}T}}
$$
And then sum all of them together.

Naturally the reverse mapping is also possible.

### Choosing $F_{s}$
How do we choose $F_{s}$? Well, often $H(s)$ will not be band limited, so we will have to define some amount of acceptable error. Then, using this error we will solve for the frequency that we need to sample at to get at most that error.

The general process is as follows.
1. In $H(s)$ replace $s$ with $j\omega$
2. Take $|H(s)|$
3. Solve $|H(s)|= \text{error } \times max(H(s))$  for $\omega$
	1.  The above reads as: the magnitude of $H(s)$ is equal to the error as a percentage (i.e 1% = 0.01) times the max value $H(s)$ takes over all frequencies.
4. Find $B=\frac{\omega}{2\pi}$
5. Find $F_{s}=2B$, recall the [[Signal Sampling and Reconstruction|Nyquist Frequency]].
