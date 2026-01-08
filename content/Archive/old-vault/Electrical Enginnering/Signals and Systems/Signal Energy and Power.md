## Energy
The energy of a signal is defined as:
$$
E=\int_{-\infty}^{\infty}  |f(t)|^{2}\, dt  
$$
The reason that we square it is so that the negative parts of the signal do not cancel out the positive parts of the signal. Recall that any area below the horizontal axis is considered negative area.

### Energy of Discreet vs Continuous Signals
The energy of a discreet signal is finite because the signal itself is finite. This is not true for continuous signals because they go on forever, thus the integral above results in $\infty$.


## Power
Power is energy over time, we know this from its unit, Joules / Second. Thus it makes sense to compute the energy of a signal over a time interval and then divide it by the amount of time in the interval, this would give us an average of the power over that interval. Should we then keep expanding this interval towards infinity we will converge on the power of the signal overall. This yields the general definition of power.
$$
P=\lim_{ T \to \infty } \frac{1}{T}\int_{-\frac{T}{2}}^{ \frac{T}{2} } |f(t)|^{2} \, dt 
$$
Note that the signal we are integrating is squared here as well, for the same reason we said before, to make it all positive.

### Power Simplification for Periodic Signals
For periodic signals the integral above simplifies significantly. Since periodic signals repeat, we can remove the limit from the integral and just compute the power over one interval of the signal
$$
P_{periodic} = \frac{1}{T} \int_{0}^{T} |f(t)|^{2} \, dt 
$$
Note that the bounds do not have to be as they are stated above, *as long as they constitute one period*. Sometimes changing the bounds makes integration significantly easier.
