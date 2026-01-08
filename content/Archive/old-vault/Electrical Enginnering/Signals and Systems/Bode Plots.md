Bode plots are a simplified way to plot the magnitude of the transfer function, $H(s)$ to see the response of a system.

They are easy to create by and and provide useful insights that normal graphs may not provide due to its logarithmic nature.

So, in a Bode Plot we plot $20\log(|H(s)|)$ vs $\log(\omega)$. Note this is a base 10 logarithm.

So we start with a transfer function like
$$
H(s) = k \frac{(s+a_{1})(s+a_{2})}{s(s+b_{1})(s^{2} + b_{2}s +b_{3})}
$$

First we normalize it, which means we make each term look like
$$
\frac{1}{a_{1}}\left( \frac{s}{a_{1}}+1 \right)
$$
Then whatever the product of the fractions you pulled out are is the, $C$, the constant part we will talk about when plotting the bode plot. Note if we have a second order we want to make the constant part of the quadratic 1, so that is the number we factor out. In the case given above this would be $b_{3}$ 

I will do all of them except the quadratic for now
$$
H(s)=\frac{ka_{1}a_{2}}{b_{1}} \frac{\left( \frac{s}{a_{1}}+1 \right)\left( \frac{s}{a_{2}}+1 \right)}{s\left( \frac{s}{b_{1}}+1 \right)(s^{2}d + b_{2}s + b_{3})}
$$
Since we are plotting the logarithm of $H(s)$ that means all this multiplication and division turns into adding and subtracting. That means we can look at the graph as a sum of the individual components.

We will now consider how each type of component effects the graph, but before we do, we will be replacing $s$ with $j\omega$ since we are plotting against frequency.

## Poles v.s. Zeros
Poles are the values at which the denominator is zero.
Zeros are the values at which the numerator is zero.

## Graphing Against a Reference
The logarithmic graphs are done against a reference point. To do this we normalize the inside the inside of our logarithm with the reference value.
$$
\log\left( \frac{\text{value}}{\text{reference value}} \right)
$$
Note that this just turns into subtraction and thus when plotting on a log scale it just gives us a vertical shift.

## Constant Case
The most simple case. We get $20\log(C)$ which is just a constant value, and since we are plotting on a log scale it just gives a vertical shift either up or down. In other words this is a flat line. We often add it at the end since it is easier that way.

## $|j\omega|$ case

This corresponds to having a a pole / zero at $\omega=0$.

Note that $|j\omega| = \omega$ so this gives us $20\log(\omega)$ as our expression. Since we are plotting against $\log(\omega)$ this is just a line with a slope of $20 \frac{\text{dB}}{Decade}$ that goes through $\omega = 0$.

## $|\frac{j\omega}{a}+1|$ case

This corresponds to a first order pole / zero at  $\omega=a$. 

This gives
$$
20\log\left( |\frac{j\omega}{a} +1|\right)
$$

We can see that if $a\gg \omega$ then we basically have $20\log(1)=0$, meaning we have a flat line.

The opposite case is $\omega\gg a$ such that the 1 is adding basically nothing, thus giving us 
$$
20\log\left( \frac{\omega}{a} \right)=20\log(\omega)-20\log(a)
$$
We see that this also yields us a line when plotting on a logarithmic scale. The slope is the same, but the point at which the plot starts rising at is $a$, since before $a$ the value is approximately $0$.

If it is a pole the sign of the line get's inverted, so
1. Poles have a negative slope of -20
2. Zeros have a positive slope of 20

## |$s^{2}+2\zeta\omega_{n}s+\omega_{n}^{2}$| Case

When we have a quadratic case we get
$$
20\log\left( |\frac{(j\omega)^{2}}{\omega_{n}^{2}}+\frac{2\zeta}{\omega_{n}}(j\omega)+1| \right)
$$
when normalized


We then have 2 sub possibilities.
When $\omega \ll \omega_{n}$ then the first 2 terms become very small and the +1 at the end dominates. thus yielding.
$$
20\log(1)=0
$$
When $\omega\gg\omega_{n}$ then the $\frac{(j\omega)^{2}}{\omega_{n}^{2}}$ dominates and we get
$$
20\log\left( |\frac{(j\omega)^{2}}{\omega_{n}^{2}}| \right) = \pm 40\log
$$

So essentially the bode plot looks like a line that is 0 until it is $\omega = \omega_{n}$ and then it rises with a slope of - or + 40 dB / decade depending on if it is a pole or a zero.

If $\zeta = 0$ then we end up with $\log(0)$ which is infinity.  So, if $\zeta$ is small then around $\omega_{n}$ we will see a peak on the bode plot for a zero, and if we have  a pole we will see the graph crash to 0.

## Phase Plot

A bit more complicated than the magnitude plot.

## Constant Value
For a constant value there is 0 phase contribution if it is a positive constant, and if it is negative then there will be a $\pi$ phase contribution. It is essentially an offset.
## Pole / Zero at 0

If its a pole, we have a $-\frac{\pi}{2}$ phase contribution.
If it is a zero we have $\frac{\pi}{2}$ phase contribution.

Also a constant phase offset.

## First order Pole / Zero (s+a)

The phase contribution is $\pm \tan ^{-1}\left( \frac{\omega}{a} \right)$

What is looks like on the plot is, we are zero up to 1 decade before $\omega$. At a decade before $\omega$ we start rising/falling roughly at 45 deg/decade. Then when we reach 1 decade after $\omega$ we flatten out.

Pole is negative slope
Zero is positive slope

## Second Order Pole / Zero

Poles -> negative slope
Zeros -> positive slope

If $\omega \ll 0.01\omega_{n}$ then we have 0 phase contribution -> flat line before $\omega_{n}$

If $\omega\gg 10\omega_{n}$  then we have $\pm \pi$

We draw a line in between as a transition, the line roughly has a slope of 90 deg/decade

Similar to the first order pole / zero, except now we start one decade before $\omega_{n}$, rise at 90 deg/decade, and end at 1 decade after $\omega_{n}$

The smaller $\zeta$ is here, the steeper the transition is, that is to say it looks more like a step.


| Component      | Form                                                            | Magnitude Slope | Phase     | Break Freq |
| -------------- | --------------------------------------------------------------- | --------------- | --------- | ---------- |
| Constant       | $C$                                                             | 0 dB/dec        | 0         | -          |
| Integrator     | $\large\frac{1}{s}$                                             | -20 dB/dec      | -90°      | 1          |
| Differentiator | $s$                                                             | +20 dB/dec      | +90°      | 1          |
| 1st Order Pole | $\large\large \frac{1}{\left( \frac{s}{\omega_{c}}+1 \right)}$​ | 0 → -20 dB/dec  | 0 → -90°  | ωcωc​      |
| 1st Order Zero | 1+s/ωc1+s/ωc​                                                   | 0 → +20 dB/dec  | 0 → +90°  | ωcωc​      |
| 2nd Order Pole | 11+2ζs/ωn+(s/ωn)21+2ζs/ωn​+(s/ωn​)21​                           | 0 → -40 dB/dec  | 0 → -180° | ωnωn​      |
| 2nd Order Zero | 1+2ζs/ωn+(s/ωn)21+2ζs/ωn​+(s/ωn​)2                              | 0 → +40 dB/dec  | 0 → +180° | ωnωn       |
