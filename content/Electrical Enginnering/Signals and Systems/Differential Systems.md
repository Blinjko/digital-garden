We can describe a system using differentials. The output of a system can have a form such as:
$$
a_{n}\frac{d^{n}y}{dt^{n}}+a_{n-1}\frac{d^{n-1}y}{dt^{n-1}}+\dots+a\frac{dy}{dt}+a_{0}y = \text{output differential}
$$
And the input the form:
$$
b_{m}\frac{d^{m}x}{dt^{m}}+b_{m-1}\frac{d^{m-1}x}{dt^{m-1}}+\dots+b\frac{dx}{dt}+b_{0}x = \text{input differential}
$$
Where:
$$
\text{output differential} = \text{input differential}
$$

We can simplify this notation by noting the derivative operator as $D$.
$$
a_{n}D^{n}y+a_{n-1}D^{n-1}y+\dots+aDy+a_{0}y = b_{m}D^{n}x+b_{m-1}D^{m-1}x+\dots+mDx+b_{0}x 
$$
Note that the degree of the derivative for the input doesn't have to be equal to the degree of the output derivatives. I.E $a\ne b$.

We can now factor $y$ and $x$ from these equations to get the characteristic polynomial of the system.
$$
y(a_{n}D^{n}+a_{n-1}D^{n-1}+\dots+aD+a_{0}y) = x(b_{m}D^{n}+b_{m-1}D^{m-1}+\dots+mD+b_{0}) 
$$

We then use the notation $Q(D)$ and $P(D)$ to represent these polynomials:
$$
yQ(D)=xP(D)
$$
## Zero Input Response
The zero input response, ZIR, is simply the homogeneous solution to the linear differential equation. If we set $y=Ce^{\lambda t}$ and substitute it back into the equation, we get the new equation:
$$
Ce^{\lambda t}(\lambda^{N}_{N}+\lambda^{N-1}_{N-1}+\dots+\lambda^{1}_{1}+a)
$$
This is essentially a polynomial, and we call it the characteristic polynomial. We want the above equation to equal 0, and that only occurs when the polynomial is 0, so we have to find the roots of the polynomial.

### Solutions to the ZIR
As shown previously, the exponential $Ce^{\lambda t}$ is a solution to the differential equation when lambda is a root of the characteristic polynomial equation. In fact, since this is a linear system, any linear combinations of these is a solution to the differential equation. That give the general solution for the zero input response.
$$
y_{ZIR}(t)= C_{1}e^{\lambda_{1}t}+C_{2}e^{\lambda_{2}t}
+\dots+C_{n}e^{\lambda_{n}t}$$
These are known as the characteristic modes of the system, and they have a significant impact on the behavior of the system. Since this is the response when the input is zero, we can interpret this as what the system does inherently, i.e its natural response per se.

### Real Roots
For $\lambda$ values that are real, the characteristic mode has the form:
$$
C_{1}e^{\lambda t}
$$
Where $C_{1}$ is a constant that is determined by the initial conditions.

### Repeated Roots
If we have repeated roots, then we multiply each repeated root by a factor of $t$, the independent variable. Generally speaking, for $n$ repeated roots.
$$
C_{1}e^{\lambda t}+C_{2}te^{\lambda t}+\dots+C_{n}t^{n}e^{\lambda t}
$$
This same logic applies for complex roots.

### Complex Roots
Complex roots always show up in complex conjugate pairs, each counting as a singular root. So:
$$
\lambda=a\pm jb
$$
This yields the characteristic modes:
$$
C_{1}e^{(a+jb)t}+C_{2}e^{(a-jb)t}
$$
This is fine and technichally valid, but if we have a real valued system, the output should be real valued as well, thus $C_{1}$ and $C_{2}$ must be complex conjugate pairs. Thus if I define:
$$
C_{1}=\frac{c}{2}e^{\theta t}
$$
and
$$
C_{2}=\frac{c}{2} e^{-\theta t}
$$
I can rewrite the above as:
$$
\frac{c}{2}e^{at+(bt+\theta) j} + \frac{c}{2}e^{at-(bt+\theta) j}
$$
If I factor out $\frac{c}{2}e^{at}$
$$
\frac{c}{2}e^{at}[e^{j(bt+\theta)}+e^{-j(bt+\theta)}]
$$
This then simplifies to:
$$
ce^{at}\cos(bt+\theta)
$$
Thus if we have complex roots of the form stated previously, then the real part is goes into an exponential, and the imaginary component is the frequency of the cosine. Note that we still need 2 initial conditions to solve for $c$ and $\theta$.  We could also split up the cosine into a sum of sine and cosine, where neither has a phase shift.

### System Stability
Since all the different root types involve an exponential, we can think about system stability in terms of the signs of the roots. If we have a positive real root, we have an exponential growing without bound, this is unstable behavior. 

Likewise, if we have a negative real root the system will converge to 0 or some other value, and thus stabilize, this is asymptotically stable behavior. 

If we have complex roots, it depends on the sign of the real part, since that is the part in the exponential, (since cosine is a bounded function). If the real part is negative we stabilize, and if it is positive we are unstable. If it is 0, then we are marginally stable.

#### Marginally Stable
This describes a system that is between stable and unstable, one nudge in either direction will make it either stable or unstable. An example of this can be seen when we have an complex root with no real part. This causes the exponent to go away, just leaving us with a cosine function. It doesn't converge to 0 but it also doesn't go out of control, hence it is between stable and unstable.

#### It only takes one
It only takes *one* unstable characteristic mode to make the system unstable.asymtotically

#### Stability Rule of Thumb
A system is Asymptotically Stable if and only if every pole, without exception, has a negative real part (i.e., is strictly in the LHP).

If you have non repeated roots on the imaginary axis the system is marginally stable.

 A system is Unstable if any pole has a positive real part (RHP) OR if any pole on the imaginary axis is repeated.

#### Bounded input bounded output (BIBO)
A system is BIBO stable if for a bounded input to the system a similar bounded output is gotten. If the output grows without bound the system is not BIBO stable. We can test for BIBO stability by looking at the roots of the characteristic polynomial, if all the roots (poles), of the system have a negative real part.

## Zero State Response
Sometimes referred to as the particular response, it is the response the system has when the input is non-zero but the initial conditions are all 0. We define the ZSR in the time domain in terms of the Impulse response $h(t)$.

### Impulse Response
The impulse response of the system is denoted with $h(t)$ and is the response the system has when $x(t)=\delta(t)$. What it is depends on the system, and it can be found like so.
$$
h(t)=b_{n}\delta(t)+P(D)y_{n}(t)u(t)
$$
Recall that $n$ is the degree of the output functions differential and $b_{n}$ is the coefficient of the inputs $n$'th degree differential. Recall that $m$ is the degree of the input functions differential. If $n>m$ then $b_{n}=0$, otherwise it is what it is.

$y_{n}(t)$ is the ZIR of the system when all the initial conditions are zero except the highest order initial condition. So for a second order system, the first initial condition would be zero, and the second initial condition would be 1, where the second initial condition is the value of the first derivative at 0 (in this case).

To find the impulse response we need to find each part of this equation.
## Putting the input in terms of the impulse response

If we define the delta function as a rectangle of some width $\Delta t$ and some height $\frac{1}{\Delta t}$ then we can use it to sample the input function into small rectangles.
$$
f(\Delta t)\delta(t-\Delta t)\Delta t
$$
We multiply by the extra $\Delta t$ so that we cancel it out, thus making the height of the reactangle equal to to the function at that point. We can rewrite the input then in terms of the impulse function like so.
$$
\lim_{ \Delta t \to 0 } \sum _{k=-\infty}^{\infty}f(k\Delta t)\delta(t-k\Delta t)\Delta t =x(t)
$$

Now thinking about the output this will generate we can leverage the properties of linear and time invariant systems.
1. We can view $f(k\Delta t)$ as a scaling factor
2. We can view $\delta(t-k\Delta t)$ as the input being shifted, so the output will also be shifted
3. The summation can be viewed as superposition.
Then finally, realizing that the function we here is the delta function, we already know the response the delta function has, $h(t)$. This then yields:
$$
\lim_{ \Delta t \to 0 } \sum _{k=-\infty}^{\infty}f(k\Delta t)h(t-k\Delta t)\Delta t =y(t)
$$
Which, if you look closely, is just the following integral.
$$
y(t)=\int_{-\infty}^{\infty} f(\tau)h(t-\tau) \, d \tau =f(t)*h(t)
$$
Which is the definition of the convolution.

So to find the ZSR we need to:
1. Find the differential equation that describes our system.
2. Find the impulse response $h(t)$
3. Convolute the impulse response with the input $f(t)$

## Impulse Response and Causality
If the impulse response exists solely for values above 0, then the system is causal. Note that this doesn't necessarily mean the the response starts after 0, because if you have input that starts before 0 then the response will start before 0 even in the system is causal. However, if the impulse response starts before 0 then the system is certainly non-causal.

