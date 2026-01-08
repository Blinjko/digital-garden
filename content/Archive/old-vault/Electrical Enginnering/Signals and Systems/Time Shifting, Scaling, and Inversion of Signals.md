Suppose we have a signal defined by $x(t)$, we shift it in time like so:
$$
x(t-T)
$$
Where if:
1. $T \gt 0$, T is positive, then we shift to the right, and *delay* the signal
2. $T \lt 0$, T is negative, and we shift to the left, and we give the signal a *lead*

We can also squish or stretch the signal like so:
$$
x(at)
$$
Where if:
1. $|a| \gt 1$, then the signal gets squished by a factor of $a$
2. $0 \lt |a| \lt 1$, then the signal gets stretched by a factor of $a$'s denominator.
3. $a \lt 0$, then the signal gets inverted in time, i.e reflected about the vertical axis.


## Combinations
Suppose we do all 3 operations at once, then we should determine the resulting signal like so.
Suppose we have:
$$
x(at-T)
$$
1. Apply the scaling factor & inversion first
2. Apply the time shift $T$, but in order to account for the scaling of $a$, compute $\frac{T}{a}$ and shift by that amount. Carry the signs through this computation.