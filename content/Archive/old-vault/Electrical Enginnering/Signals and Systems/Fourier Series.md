## Preface
We find that signals have a lot of properties in common in vectors, and logic that we apply to vectors often has some similar form for signals.

For example, we know that if we have a 3 dimensional vector, we can express the vector as a scalar sum of 3 different orthogonal vectors. This is a familiar concept of linear algebra, specifically in the topic of basises. We know that a basis is a set of orthogonal vectors of which any vector of the same dimension of said basis can be constructed via a linear combination of the basis vectors. The courier series is essentially this but with signals.


## Set of Orthogonal Signals
So, if we are to construct a signal using a scalar combination of orthogonal signals, we then need a set of orthogonal signals. There are many that fit the task, but we will use trigonometric functions, specifically sine and cosine. 

Well, it turns out that if we have an angular frequency of $\omega_{0}$, $\sin(n\omega_{0}t)$, and $\sin(m\omega_{0}t)$, where $n$, and $m$ are integers and $m \ne n$, then the sinusoids are orthogonal over the interval $T_{0}=\frac{2\pi}{\omega_{0}}$. The same logic holds for cosine as well.

We can show this more mathematically.
$$
\int_{T_{0}}\cos(n\omega_{0}t)\cos(m\omega_{0}t) \, dt 
\begin{cases}
0 & n \ne m \\
\frac{T_{0}}{2} & n=m\ne 0 \\
\end{cases} \\

$$
The same holds for sine.

## Orthogonal Signals
In general we say that 2 *real* signals are orthogonal over the interval $(t_{1},t_{2})$ if:
$$
\int_{t_{1}}^{t_{2}} x(t)y(t) \, dt =0
$$
If our signals are complex it gets a bit more generic.
$$
\int_{t_{1}}^{t_{2}} x(t)y^{*}(t) \, dt = \int_{t_{1}}^{t_{2}} x^{*}(t)y(t) \, dt = 0
$$
Where $*$ denotes the complex conjugate. Note that this also works for real valued signals too, since the conjugate of a complex number with only a real part is itself, thus yielding the original equation.

## Trigonometric Fourier Series
If we let $x(t)$ be the function we want to express as the sum of orthogonal sinusoids, and $T_{0}$ be the interval we want to represent, then we define the Fourier series as:
$$
x(t)=a_{0}+\sum_{n=1}^{\infty}a_{n}\cos(n\omega_{0}t)+b_{n}\sin(n\omega_{0}t)
$$
Note $\omega_{0}=2\pi f_{0}$, where, $f_{0}=\frac{1}{T_{0}}$ is the fundamental frequency.

### Finding Trigonometric Fourier Coefficients
We can find the coefficients like such. The math will not be derived here. Note $n\in \mathbb{Z}$
$$
\large a_{n}=\frac{ \int_{t_{1}}^{t_{1}+T_{0}}x(t)\cos(n\omega_{0}t) \, dt }{\int_{t_{1}}^{t_{1}+T_{0}}\cos ^{2}(n\omega_{0}t) \, dt}
$$
Since: 
$$
\int_{t_{1}}^{t_{1}+T_{0}}\cos ^{2}(n\omega_{0}t) \, dt = \frac{T_{0}}{2}
$$
We can simplify it to:
$$
a_{n}=\frac{2}{T_{0}}\int_{t_{1}}^{t_{1}+T_{0}}x(t)\cos(n\omega_{0}t) \, dt
$$

For $a_{0}$ we have a special case of:
$$
a_{0}=\frac{1}{T_{0}}\int_{t_{1}}^{t_{1}+T_{0}}x(t) \, dt
$$
Because $\cos(0\omega_{0}t)=1$

We have a similar result for sine, but I will just give the end result.
$$
b_{n}=\frac{2}{T_{0}}\int_{t_{1}}^{t_{1}+T_{0}}x(t)\sin(n\omega_{0}t) \, dt
$$
Note that we don't have the zero condition here because $\sin(0)= 0$

### Compact Trigonometric Fourier Series
Has the form:
$$
x(t)=C_{0}+\sum_{n=1}^{\infty}C_{n}\cos(n\omega_{0}t+\theta_{n})
$$
Where:
$$
C_{0}=a_{0}
$$
$$
C_{n}=\sqrt{ a_{n}^{2}+b_{n}^{2} }
$$
$$
\theta_{n}=\tan ^{-1}\left( \frac{-b_{n}}{a_{n}} \right)
$$

### Notes on the trigonometric Fourier series
1. It represents the function over the given period $T_{0}$. After this is over it repeats, which is no surprise since it is constructed from sinusoids.
2. The sine components represent the odd parts of the function, since sine is an odd function.
3. The cosine components represent the even parts of the function, since cosine is an even function.

## Exponential Fourier Series
Recall that we can represent sine and cosine as complex exponentials.
$$
x(t)=\sum_{n=-\infty}^{\infty}D_{n}e^{jn\omega_{0}t}
$$
Where:
$$
D_{n}=\frac{1}{T_{0}}\int_{T_{0}}x(t)e^{-jn\omega_{0}t} \, dt = \frac{1}{2} \frac{e^{ (+jn\pi)/2 } -e^{ (-jn\pi)/2 }}{\frac{2jn\pi}{2}}
$$

## Converting Between Representations
To convert between the different series representations follow the following.

$$
|D_{k}|=\frac{C_{k}}{2}
$$
$$
\theta_{k}=\tan ^{-1}\left( \frac{-\mathrm{Im}(D_{k})}{\mathrm{Re}(D_{k})} \right)=\tan ^{-1}\left( \frac{-b_{k}}{a_{k}} \right)
$$
Which implies
$$
\mathrm{Im}(D_{k})=b_{k} \text{ and } \mathrm{Re}(D_{k})=a_{k}
$$
Also
$$
a_{k}=C_{k}\cos(\theta_{k})
$$
$$
b_{k}=C_{k}\sin(\theta_{k})
$$

## Parsevals Theorem
States the the power of a signal is equal to the sum of the powers of its sinusoid or exponential blocks.

So, for the compact trigonometric series, the power of $C_{n}\cos(n\omega_{0}t+\theta_{n})$ is $\frac{C_{n}^{2}}{2}$.
Thus by parsevals theorem:
$$
P_{x}=C_{0}^{2}+\sum_{n=1}^{\infty} \frac{C_{n}^{2}}{2}=\sum_{n=-\infty}^{\infty}|D_{n}|^{2}
$$
Which states that the power of $x(t)$ is equal to the sum of the powers of each sinusoid or exponential component of $x(t)$.

If $x(t)$ is real then then $|D_{-n}|=|D_{n}|$ and:
$$
P_{x}=D_{0}^{2}+2\sum_{n=1}^{\infty} |D_{n}|^{2}
$$

## Derivation of orthogonal and coefficient formulas
The thought process behind the derivation of the orthogonal formula and the coefficient formulas can provide some insight into how they came to be.

So, we start simply with a function $x(t)=t$. We want to approximate this function using another function $y(t)=c\sin(t)$, for some real number $c$. The question is then, how do we find a $c$ such that $y(t)$ approximates $x(t)$ as best as it can? Well, to do this we need to quantify how much we are off and find a $c$ that minimizes it,  i.e we need to calculate the error and find it's local minimum. We can define the error intuitively like so:
$$
e(t)=x(t)-cy(t)
$$
Note that our approximation here is only over a given interval $(t_{1},t_{2})$, and thus the error is only valid on that interval.

Still though, now, we need a way to think about the size of a signal, otherwise we won't be able to calculate $c$. One way to do so is using the energy of a signal. Since our interval is finite it makes sense. Then, like we said before, we want to find a $c$ such that the error is minimized, or in other words, it's derivative is 0. So, we want to compute the energy of the error and make it go to 0. This yeilds:
$$
\frac{d}{dc} \int_{t_{1}}^{t_{2}}|x(t)-cy(t)|^{2} \, dt=0
$$
Note that the integral is with respect to $t$, while the derivative is with respect to $c$. Expanding the above yields:
$$
\frac{d}{dc} \left[ \int_{t_{1}}^{t_{2}}x^{2}(t) \, dt\right] - \frac{d}{dc} \left[ 2c^{}\int_{t_{1}}^{t_{2}}x(t)y(t) \, dt\right] +\frac{d}{dc} \left[c^{2} \int_{t_{1}}^{t_{2}}y^{2}(t) \, dt\right]=0
$$
Which results in:
$$
 -2\int_{t_{1}}^{t_{2}}x(t)y(t) \, dt + 2c \int_{t_{1}}^{t_{2}}y^{2}(t) \, dt=0
$$
Solving for $c$
$$
 c=\frac{\int_{t_{1}}^{t_{2}}x(t)y(t) \, dt}{\int_{t_{1}}^{t_{2}}y^{2}(t) \, dt}
$$
Note:
$$
\int_{t_{1}}^{t_{2}}y^{2}(t) \, dt=E_{y}
$$
So,
$$
 c= \frac{1}{E_{y}}\int_{t_{1}}^{t_{2}}x(t)y(t) \, dt
 $$
 Note that this very similar to the formula for the coefficients for the Fourier series, except that those formulas are in terms of sine and cosine and already take into account the energies of sine and cosine.

It is also worth noting that our definition of orthogonality comes from the integral in the numerator here. We said earlier that if 2 signals are orthogonal then this integral evaluates to 0, and if that is the case then $c=0$, which means $y(t)$ doesn't make up any component of $x(t)$. This can also be thought of in terms of vectors, because signals are similar to vectors in their conceptual behavior. So, essentially if we have a vector, and another vector that is orthogonal from it, we cannot express one vector in terms of the other, even partially, because they share 0 components. It can also be viewed from the perspective that 2 orthogonal vectors lie on 2 different axises, thus when you attempt to project one onto the others axis, nothing is there because it has no component on that axis, sort of like trying to see the shadow of a pillar when the light source is directly above it, it simply has none because the pillar is completely vertical and lacks any tilt.

## Magnitude Plots
We can create a magnitude plot from our Fourier series, which shows the magnitude of the component signals as a function of their frequency or frequency index $k$. It is rather simple if we have the compact trigonometric series because what we want to plot is already available, and that is $C_{k}$. So we essentially plot $C_{k}$ as a function of $k$ and this will be our magnitude plot; make sure not to forget $C_{0}$.

As stated before the magnitude plot shows us how large each component signal / harmonic / frequency is in our series. This can be useful when we do Fourier analysis later.

## Phase Plots
The brother to the magnitude plot is the phase plot, which is a plot of the component signal's phases as a function of frequency / frequency index $k$. Similar to how we plotted the magnitude using $C_{k}$, we plot the phase using $\theta_{k}$, which is also in our compact trigonometric series. We plot $\theta_{k}$ as a function of $k$ and this will give us the phase plot for our signal.