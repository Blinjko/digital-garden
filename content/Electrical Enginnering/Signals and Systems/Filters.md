Filters are systems that allow certain frequencies to pass and others not to pass. In short the question is how do we make a system that can do this?

Well, a simple answer is that we draw the bode plot for the filter we would like and we reverse engineer the transfer function. This works ok, but there are better already developed methods and formulas.

What we will find is that there is families of filters each with there own guidelines of how to go about creating a filter in them. Also we will learn that by showing how to make one kind of filter we can make all the others with a simple transformation, using the the same formulas.

## Butterworth Filter
A type of low pass filter where
$$
H(s) = \frac{1}{(s-\lambda_{1})(s-\lambda_{2})\dots(s-\lambda_{n})}
$$
This is an all pole filter, that is to say that it has no zeros. We also know
$$
|H(\omega)| = \frac{1}{\sqrt{ 1+\left( \frac{\omega}{\omega_{c}} \right)^{2n} }}
$$
Where $n$ is the number of poles you have, and $\omega_{c}$ is the cutoff frequency. Note that increasing $n$ makes the filter more ideal and better performing, but also has issues when it comes to be realized as a system.

### Finding Poles
So, how do we find the poles needed to create an n'th order filter? Well, its not derived here but we can use the formula
$$
\lambda_{k}=e^{\frac{j\pi}{2N}(2k+N-1)}
$$
Where $k$ is the current pole and $N$ is the number of poles you want, i.e your order.

What we find is that all the poles have a magnitude of unity and fall on the unit circle in the complex plane. We only take the poles that are in the LHP because we want our system to be stable. Also note that the roots are evenly spread around the unit circle.

Since they are all evenly spaced apart on the unit circle, we can use symmetry to find them as well. If N is odd, then we know we have a pole on the negative real axis, We also know that the ajacent poles are evenly spaced apart, so we need to hop $\frac{\pi}{N}$ up to get our next pole. The corresponding negative pole is the complex conjugate so we just negate the imaginary part. We repeat this to find all the roots.

If N is even then we know that from the negative real axis, the next positive root is $\frac{\pi}{2N}$ above the negative real axis. There is no root on the negative real axis if N is even.

The book also provides a table of precomputed values for the poles, for different orders. Note that if we expand the demoninator of $H(s)$ what we get is something like
$$
\frac{1}{s^{n}+a_{N-1}s^{N-1}+\dots+a_{1}s+1}
$$
Which is known as the Butterworth polynomial (the bottom piece).

Here is the table for the pre-computed values.
![[Pasted image 20251022154749.png]]


### Making Prototype Filters Based on Given Parameters
Let
$$
\hat{G}_{x}\implies \text{ the gain of the filter in dB when } \omega=\omega_{x}
$$
Then
$$
\hat{G}_{p} = \text{ passband gain}
$$
$$
\hat{G}_{s} = \text{ stopband gain}
$$
## Calculating the order
$$
\large N = \frac{\log_{10} \left[ \frac{10^{-\frac{\hat{G}_{s}}{10}} - 1}{10^{-\frac{\hat{G}_p}{10}} - 1} \right]}{2 \cdot \log_{10} \left( \frac{\omega_s}{\omega_p} \right)}
$$

## Finding $\omega_{c}$
Not derived here, but we can get the equations. Note that these are not needed to create the prototype filter itself, but they are needed to create the other filter types. When you are creating the other filter types you will also use the values for your filter in these eq's (which are not necessarily the same as the ones you used to built the prototype).
$$
\omega_{c} = \frac{\omega_{p}}{[10^{-\hat{G}_{p}/10}-1]^{-1/2N}}
$$
$$
\omega_{c} = \frac{\omega_{s}}{[10^{-\hat{G}_{s}/10}-1]^{-1/2N}}
$$

Note that $\omega_{p}$ is the ending frequency of the pass band, that is to say 0 to $\omega_{p}$ will be allowed. Similarly $\omega_{s}$ is where the stop band starts. The area between them is the transition period.

Note that when calculated these values will not be equal. The first one gives you an $\omega_{c}$ that perfectly satisfies $\hat{G}_{p}$, and the latter gives an $\omega_{c}$ that perfectly satisfies  $\hat{G}_{s}$. Which you choose will depend on your design.

### Frequency Scaling (Low Pass Transform) 
So, this all works great if we want our cutoff frequency to be 1, but what if we want a different cutoff frequency? Well we need to frequency scale. The form we have been working with so far is called the prototype form since it can be manipulated to get all the other filter types (low pass, band pass, stop band, high pass). We do so with formulaic scaling.

So to scale the frequency we simply take our prototype Butterworth transfer function $H(s)_{p}$ and do the following:
$$
s \implies \frac{s}{\omega_{c}}
$$
Where $\omega_{c}$ is our cutoff frequency in rad/s. We use the same method as before to find the poles. It's that easy.


### High Pass Transform

To transform the low pass into a high pass, we essentially take $\omega_{p}=1$ and $\frac{\omega_{p}}{\omega_{s}}=\omega_{s}$ where the quantities in the ratio are the actual values of our High pass stop and pass band, and the the other values are the ones we use to create the low pass prototype with.

Once we have our roots, we frequency scale the prototype
$$
s \implies \frac{s}{\omega_{c}}
$$
Then again we transform it into a high pass
$$
s \implies \frac{\omega_{p}}{s}
$$
Where $\omega_{p}$ is the desired pass band frequency here, not 1 (to be clear).

In another notation it looks like
$$
H(s)_{low} = H\left( \frac{s}{\omega_{c}} \right)_{p}
$$
$$
H(s)_{high}=H\left( \frac{\omega_{p}}{s} \right)_{low}
$$

These need to be done in succession to get correct results.

It is like following a recipe.

## Band Pass Transform
The process is similar to the high pass, except the parameters for the prototype filter will be different.

For a band pass you will have 4 different frequencies of note (in order).

- $\omega_{s_{1}}$ the end of your first stop band
- $\omega_{p_{1}}$ the start of your pass band
- $\omega_{p_{2}}$ the end of your pass band
- $\omega_{s_{2}}$ the beginning of your second stop band

To start we create the prototype filter with the following parameters.
- $\omega_{p}=1$
- $\omega_{s}=\bar{\omega}_{s}$
Where
$$
\bar{\omega}_{s} = min\left[  \frac{\omega_{p_{1}}\omega_{p_{2}}-\omega^{2}_{s_{1}}}{(\omega_{p_{2}}-\omega_{p_{1}})\omega_{s_{1}}}, \frac{\omega^{2}_{s_{2}}-\omega_{p_{1}}\omega_{p_{2}}}{(\omega_{p_{2}}-\omega_{p_{1}})\omega_{s_{2}}} \right]
$$

Essentially we take whichever one is smaller.

Once we have the prototype filter $H(s)_{p}$ we frequency scale.
$$
H(s)_{low}=H\left( \frac{s}{\omega_{c}} \right)_{p}
$$
Where $\omega_{c}$ is calculated using the equations from before, but here we use the prototype filter parameters in the equation.

Then we do the band bass transform
$$
H(s)_{band} = H\left( \frac{s^{2}+\omega_{p_{1}}\omega_{p_{2}}}{(\omega_{p_{2}}-\omega_{p_{1}})s} \right)_{low}
$$
