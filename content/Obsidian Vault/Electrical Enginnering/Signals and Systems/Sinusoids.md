## Links
[[Complex Numbers]]

## Form
The `sin` and `cos` functions are both sinusoids and only really differ by a phase shift. It often seems that `cos` is the preferred one to express things as.

Below is the expression of a sinusoid signal, where `C` is the amplitude, `f` is the frequency in Hertz, $\theta$ is the phase shift in radians, and `t` is the parametric variable, which usually represents time, but not always.
$$
C\cos(2\pi ft+\theta)
$$
Often $2\pi f$ is written as $\omega$.
$$\omega=2\pi f$$
Where $\omega$ represents the radian frequency of the sinusoid in radians per second. This then gives us a simplified form.
$$
C\cos(\omega t+\theta)
$$
The period is defined as the time it takes for 1 cycle to complete. The period can be calculated as follows.
$$
T=\frac{1}{f}=\frac{1}{\frac{\omega}{2\pi}}= \frac{2\pi}{\omega}
$$
## Sine and Cosine relationship
Sine and Cosine can be expressed as each other if the proper phase shift is added.
$$
\sin(\omega t)=\cos\left( \omega t-\frac{\pi}{2} \right)
$$
$$
\cos(\omega t)=\sin\left( \omega t+\frac{\pi}{2} \right)
$$
## Adding Sinusoids
First, for this to work the sinusoids need to be of the same frequency. We begin then with a trig relation that we will use.
$$
C\cos(\theta)\cos(\omega t)-C\sin(\theta)\sin(\omega t)=C\cos(\omega t+\theta)
$$
This might not be clear at the moment, but we will set a few variables.
- $a=C\cos(\theta)$
- $b=-C\sin(\theta)$

We can now rewrite the above.
$$
a\cos(\omega t)+b\sin(\omega t)=C\cos(\omega t+\theta)
$$
This is the form that we will have when adding sinusoids. But in order to understand how to calculate $C$ and $\theta$ we need to look at this in a different light, specifically phasors. Taking the form above we can see that we can convert $a\cos(\omega t)$ and $b\sin(\omega t)$ to [[Complex Numbers]], specifically a complex exponential. Doing so then makes adding them significantly easier since we already know how to add complex numbers in polar form.
$$
a\cos(\omega t) = \mathrm{Re}(ae^{j\omega})
$$
$$
b\sin(\omega t) = b\cos\left( \omega t+\frac{\pi}{2} \right) = \mathrm{Re}(be^{j(\omega+\pi/2)})
$$
Now all we have to do is add these complex exponentials.
$$
e^{j\omega}(a+be^{j\pi/2})=e^{j\omega} (a-jb)=\sqrt{ a^{2}+b^{2} } e^{j\omega t\tan ^{-1}(-b/a)}
$$
This doesn't look like the result we want, a cosine wave, and that is because it is still in phasor form, we have to take the real part of the resulting complex exponential. First let us define some variables to make it easier to visualize.
$$
C=\sqrt{ a^{2}+b^{2} }
$$
$$
\theta=\tan ^{-1}\left( \frac{-b}{a} \right)
$$
Thus:
$$
\mathrm{Re}(Ce^{j\theta})= C\cos(\omega t+\theta)
$$
From this process we can see that we can break down any sinusoid with a phase shift as a sum of two pure sine and cosine waves. A visualization of this can be seen below.
![[Pasted image 20250827201734.png]]

Similar to how we added sinusoids, we can also break them apart using the equation we have below.
$$
C\cos(\theta)\cos(\omega t)-C\sin(\theta)\sin(\omega t)=C\cos(\omega t+\theta)
$$
