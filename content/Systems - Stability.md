FROM OLD NOTES NEEDS REVISION

Transfer Function and System Stability

Recall
$$
H(s)=\frac{P(s)}{Q(s)}
$$
Let us consider the second order system where $P(s)$ is not relevant and
$$
Q(s)=s ^{2} +2\zeta\omega_{n}s + \omega_{n}
$$
What we want is the values of $s$ for which this equation is zero. We can use the quadratic formula to derive
$$
-\zeta\omega_{n} \pm \omega_{n}\sqrt{ \zeta^{2}-1 }
$$

Note
$$
\zeta = \text{ damping coefficient }
$$
and
$$
\omega_{n} = \text{ natural resonant frequency }
$$

Our possibilities are:
1. $\zeta = 1 \implies$ Negative real roots, in LHP so stable, this is called critically damped.
2. $\zeta>1 \implies$ Negative roots, in LHP, so over-damped and stable system.
3. $0 < \zeta < 1 \implies$ Complex conjugate roots on the imaginary axis, stable, underdamped.
4. $\zeta > 0 \implies$ Roots are positive and real, unstable system.

