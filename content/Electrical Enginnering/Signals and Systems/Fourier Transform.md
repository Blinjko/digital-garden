## Derivation

We have the exponential Fourier series
$$
f(t)=\sum_{k=-\infty}^{\infty}D_{k}e^{j\omega_{0}kt}
$$
Where $D_{k}$ is given by
$$
D_{k}= \frac{1}{T} \int_{-T / 2}^{T/2}f(t)e^{-j\omega_{0}kt} \,dt
$$
Suppose that we let the period $T$ tend towards infinity, this allows us to have the bounds of the integral tend towards infinity thus giving.
$$
D_{k}= \frac{1}{T} \int_{-\infty}^{\infty}f(t)e^{-j\omega_{0}kt} \,dt
$$
Then if we arbitrarily define $F(\omega)$ as
$$
F(\omega)= \int_{-\infty}^{\infty}f(t)e^{-j\omega t} \, dt
$$
Then we can redefine $D_{k}$
$$
D_{k}=\frac{1}{T}F(\omega_{o}k)
$$
Substituting this back into the series gives
$$
f(t)=\sum_{k=-\infty}^{\infty} \frac{1}{T}F(\omega_{o}k) e^{j\omega_{0}kt}
$$
If we rewrite $\omega_{o}$ as $\Delta\omega$, where $\Delta\omega=\frac{2\pi}{T}$, and take the limit as $T\to \infty$ we get
$$
f(t) = \lim_{ T \to \infty } =\frac{1}{2\pi} \sum_{k=-\infty}^{\infty}F(\omega_{o}k )\Delta\omega  e^{j\Delta\omega kt}
$$
Which we notice is the limiting integral
$$
f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{j\omega t}\, d\omega 
$$
This above integral is known as the *inverse Fourier Transform*, where $F(\omega)$ is the frequency domain representation of $f(t)$.

So what is the normal transform? Well we already saw it before.
$$
F(\omega)= \int_{-\infty}^{\infty}f(t)e^{-j\omega t} \, dt
$$
Notice that these only differ by a negative sign and a factor of $2\pi$.

## Properties of the Fourier transform

### Convolution
$$
h(t)*f(t)=y(t) \implies H(\omega)F(\omega) = Y(\omega)
$$
Essentially convolution in time domain turns into multiplication in the frequency domain. This is a huge result and will be very useful.

Note that if $h(t)$ is the impulse response, then $H(\omega)$ is known as the Transfer function of the system.

### Time shifting
$$
f(t-t_{0}) \implies F(\omega)e^{-j\omega t_{0}}
$$
So a time shift if the time domain results in a phase shift in the frequency shift. Note that this phase shift depends on the frequency, that is to say higher frequency components get larger phase shifts. Note that the magnitude of the transform does not change.

## Differentiation
$$
f'(t) \implies j\omega F(\omega)
$$
A derivative on the time domain results in higher frequencies being scaled in magnitude and lower frequencies being attenuated. Note that we also phase shift the signal by $\frac{\pi}{2}$ due to the $j$. 
It is also possible to think of the $j\omega$ as the transform of the derivative operator. (Loosely speaking)

## Integration
Does the opposite of the derivative
$$
\int f(t) \, dt \implies \frac{1}{j\omega} F(\omega) + \pi F(0)\delta(\omega)
$$
So here we get a $-\frac{\pi}{2}$ phase shift, some additional DC offset, and lower frequencies magnitudes are scaled up, whilst higher frequencies are attenuated.

## Time Scaling

$$
f(at) \implies \frac{1}{|a|}F\left( \frac{\omega}{a} \right)
$$
 So from this we can see that bandwidth and duration are inversely related. The more that we compress our signal in the time domain, the more sparsely spread it becomes in the frequency domain. This is an inherent property of the Fourier transform.

## Symmetry
The Fourier transform has a nice symmetry between its forward and inverse transforms. As I said before, they only differ by a factor of $2\pi$ and a negative sign. Thus this yields the symmetry property.
$$
f(t) \implies F(\omega)
$$
The if we swap $\omega$ with $t$, and run $F(t)$ through the forward transform again, what do we get? Well
$$
F(t) \implies 2\pi f(-\omega)
$$
Which makes sense because we would normally divide by $2\pi$ and invert the sign when going backward. This property will prove useful especially when it comes to using a transform table and the other known properties, because we might have something that looks like the form of the transformed version, so we can use symmetry to simply reverse that and still use the table.

## Transform of Delta and Cosine
To get the transform of the $\delta$ function we simply use the integral and realize that we can use the sampling property.
$$
\int \delta(t)e^{-j\omega t} \, dt = e^{-j\omega0}=1
$$
Thus generically
$$
\delta(t-t_{0}) \implies e^{-j\omega t_{0}}
$$
Applying symmetry we can see that the the transform of $e^{-j\omega t}$ is
$$
e^{-j\omega_{0} t} \implies 2\pi \delta(\omega+\omega_{0})
$$
or if the exponential is positive
$$
e^{j\omega_{0} t} \implies 2\pi \delta(\omega-\omega_{0})
$$
Note that we can express $\cos(\omega_{0}t)$ as
$$
\cos(\omega_{0}t)= \frac{e^{j\omega_{0} t}-e^{-j\omega_{0}t}}{2}
$$
Thus the Fourier transform of $\cos(\omega_{0}t)$ is 
$$
\cos(\omega_{0}t)= \frac{e^{j\omega_{0} t}-e^{-j\omega_{0}t}}{2} \implies \pi \delta(\omega-\omega_{0}) + \delta(\omega+\omega_{0})
$$
So essentially a sinusoid of a particular frequency creates a delta in the frequency domain. It is also important to note that the delta's always come in pairs, one on the positive side and one on the negative side of the horizontal axis.

## The rect Function
The rect function is essentially a unit square pulse centered around the origin. We can define it as
$$
rect\left( \frac{t}{\tau} \right)= 1 \text{ when } -\frac{\tau}{2} \leq t \leq \frac{\tau}{2} \text{, = 0 otherwise}
$$
We can create it using 2 unit step functions but we don't really need to.

So what is the Fourier Transform of this function? Well we see that it is only nonzero over a specified interval, so we can integrate over this period in the transform and solve it out. Note that during this period, the function is also 1. Thus
$$
\int_{-\infty}^{\infty} rect(t)e^{-j\omega t} \, dt = \int _{-\tau / 2} ^{\tau /2} e^{-j\omega t} \, dt = \frac{1}{j\omega}[e^{j\omega \tau/2}-e^{-j\omega \tau/2}]
$$

We will be rearranging this expression to derive something. First we will start by putting the $j$ inside the brackets and multiplying and dividing by 2 to get
$$
\frac{2}{\omega}\left[ \frac{e^{j\omega \tau/2}-e^{-j\omega \tau/2}}{2j} \right]
$$
We then notice that the expression the right is $\sin\left( \frac{\omega \tau}{2} \right)$ and then we have
$$
\frac{2}{\omega} \sin\left( \frac{\omega \tau}{2} \right)
$$
We can rewrite this as
$$
\frac{\sin\left( \frac{\omega \tau}{2} \right)}{\frac{\omega}{2}}
$$
The if we multiply by $\tau$ we get
$$
\frac{\sin\left( \frac{\omega \tau}{2} \right) \tau}{\frac{\omega}{2}\tau}
$$
We see that we have a function like 
$$
\frac{\sin(x)}{x}=\text{sinc}(x)
$$
Which is how define the "sinc" function. Thus the transform of $rect\left( \frac{t}{\tau} \right)$ is 
$$
rect\left( \frac{t}{\tau} \right) \implies \sin \left( \frac{\omega \tau}{2} \right)\tau
$$
## Low Pass Filter
Let's small frequencies pass and gets rid of large frequencies. The rect function we just showed would be the ideal low pass filter. The width of the the rect function would be called the bandpass, and everywhere else where it is 0 would be called the stopband.

In reality we cannot create an ideal low pass filter but we can find functions that come close. So if we can find a system impulse response that has a transfer function similar to that of the rect function we will have a system that acts as a low pass filter.

One example of this is $h(t)=e^{-at}u(t)$. If we take the transform of it and take its magnitude for some $a$ we can see the magnitude plot of the system, i.e the frequency response. On this magnitude plot is where we see the graph is like the rect function.

## Table of transform properties
![[Pasted image 20250925145110.png]]
## Function Transform Table
![[Pasted image 20250925144929.png]]

