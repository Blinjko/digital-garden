---
created: 2025-12-29
tags:
---

## Content
Today I read part of section 6.2 which covers Poisson processes.

## The Poisson Process
The Poisson process is similar to the Bernoulli process but instead of splitting things into discrete intervals, we have a continuous interval. We also don't record the probability of something happening in an interval, instead we think about it as the rate of arrival $\lambda$.

For the Poisson process we assume that time intervals of the same length have identical probabilities. This is known as the time homogeneity property.
$$
P(k,\tau)= \text{ Prob. of k arrivals in a duration }\tau
$$
Time homogeneity means that the probability doesn't depend on when or where the interval is, just how long it was.

Another assumption we make about Poisson Processes is that the number of arrivals in disjoint intervals is independent.

$\lambda$ is the arrival rate and can be thought of as the expected number of arrivals per unit time.

We get the PMF of the $P(k,\tau)$, the probability that we have $k$ arrivals in an interval $\tau$, as.
$$
P(k,\tau)= \frac{(\lambda \tau)^{k}e^{-\lambda \tau}}{k!}
$$
Where $k =0,1,2,\dots$ Also it is worth noting that this becomes a PMF when we fix $\tau$ to some number.  This PMF also has another name, the Possion PMF.

We also have the expected value and variance of $N_{t}$, which is the R.V that is equal to the number of arrivals in a given time interval.
$$
E[N_{t}]=\lambda t
$$
$$
\text{var}(N_{t})=\lambda t
$$
## Time until the $k$'th arrival
Denoted as the R.V $Y_{k}$, is the time it takes until the $k$'th arrival occurs. The PDF of this R.V is known as the Erlang Distribution.
$$
f_{Y_{k}}(y)=\frac{\lambda^{k}y^{k-1}e^{-\lambda y}}{(k-1)!}
$$
For $y \geq 0$.

We see that if we let $k=1$, this would give us the probability distribution of the first arrival, which is
$$
f_{Y_{1}}(y)=\lambda e^{-\lambda y}
$$
A exponential distribution, which makes sense when we recall the Bernoulli case.

We denote the time until the first arrival as the R.V $T_{1}$. The time between the first arrival and the second arrival, the interarrival time, is $T_{2}$. There is a memory less property inherited from the Bernoulli distribution here so $T_{1}$ and $T_{2}$  are independent. They also share the same distribution, which is the exponential distribution.

We can actually write $Y_{k}$ as a sum of $T_{i}$
$$
Y_{k}=T_{1}+T_{2}+\dots+T_{k}
$$

## Merging Independent Poisson Processes
First an important fact:
When we add two independent Poisson R.V we also get a Poisson random variable.
Suppose we have $X$ with $\lambda_{1}$, and $Y$ with $\lambda_{2}$. Then $X+Y$ has $\lambda=\lambda_{1}+\lambda_{2}$.

Similarly if we have 2 independent Poisson Processes with $\lambda_{1}$ and $\lambda_{2}$, and we want to merge them into a single process, what is the $\lambda$ of the merged process? Well it turns out that $\lambda=\lambda_{1}+\lambda_{2}$, which is nice and simple. But then in this merged process you want to know the probability that an arrival came from process 1 or process 2, so what is that probability? The probability that an arrival came from process 1 is
$$
\frac{\lambda_{1}}{\lambda_{1}+\lambda_{2}}
$$
and similarly the probability that it came from process 2 is
$$
\frac{\lambda_{2}}{\lambda_{1}+\lambda_{2}}
$$
