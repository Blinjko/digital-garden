---
created: 2025-12-30
tags:
---

## Content
Finished reading chapter 6.2 which talked about the poisson process.

## Splitting Poisson Processes
Suppose we have a Poisson process with parameter $\lambda$ and every time we get an arrival we choose with probability $p$ to send it to $A$ and $1-p$ to send it to B. What we are doing is splitting the Poisson process into two different processes. So then, what is the parameter of these 2 split processes? It is rather simple, there is a probability $p$ that we go to $A$, so the parameter for Poisson process $A$ is $\lambda p$, likewise for $B$ it is $(1-p)\lambda$.

## Random Incidence
This is an odd phenomenon that occurs with Poisson Processes. It is best explained with a story.

Suppose there is a poisson process that has been running forever. You uniformly pick a point in time, what is expected value that you have to wait until the next arrival? Lets time from our point to the next arrival $T_{1}$. Similarly the time from our point to the previous arrival is $T_{1}'$. Since the Poisson process is memory less, $E[T_{1}]=\frac{1}{\lambda}$. Similarly, if we view the poisson process in reverse, which is valid, we can also imagine $T_{1}'$ as the time until the first arrival, which has the same exponential distribution, thus $E[T_{1}']=\frac{1}{\lambda}$. That makes sense so far, but what then is the expected value of the inter arrival time of the interval I am in? Well that would be $E[T_{1}+T_{1}']=\frac{2}{\lambda}$. But how is that possible? The expected value of the inter arrival time is $\frac{1}{\lambda}$ like we just said, so why is the expected inter arrival time here twice that?

Well $E[T_{1}]$ is the expected time until the next arrival, and since the Poisson process is memory-less it doesn't matter where you start, it is all statistically the same. If we start at the previous arrival then it would be the inter arrival time, but if we pick a random time in some random interval then it is the time between the time we picked and the next arrival which will always be greater than $E[T_{1}]$ as we just showed. Why though? Well when we pick a random time uniformly, the probability that we land in an interval (between 2 arrivals) that is longer is higher, this intuitively makes sense. So subtly encoded is this probability that we are in a larger interval, thus it makes sense why are expected inter arrival time is expected to be larger than normal. Thus in this case, the random incidence, picking a random time rather than a random arrival, gives us biased expectation values (ones that are biased larger specifically.)