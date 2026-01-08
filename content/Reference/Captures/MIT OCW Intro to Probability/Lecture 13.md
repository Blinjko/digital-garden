---
created: 2025-12-28
tags:
---

## Content
Today I read section 6.1 which covers Bernoulli random processes.

## Bernoulli Process
A Bernoulli Process is a sequence of independent Bernoulli Trials, e.x flipping a coin. Each trial is independent of the previous and next trial. 
We model the probability of success as $p$, and failure as $1-p$.

When thinking about a Bernoulli Process, we think about it as the number of job arrivals to a facility. With this we can ask two questions, in a given time how many jobs arrived? Or, given a number of jobs, how long did it take them to arrive?
## Thinking About Random Processes
We can think of a process as a sequence of random variables. In the case of the Bernoulli Random Process, we can find the Expectation of each trial and the variance of each trial. We know them previously to be.
$$
E[X_{i}]=p
$$
$$\text{var}(X_{i})=p(1-p)$$
Since all the trials are independent we can easily get any joint distribution
$$
p_{X_{1}X_{2}} (x)=p_{X_{1}}(x)p_{X_{2}}(x)
$$
## Answering Question 1
Given a length of time how many jobs arrived? I.E number of successes, $S$, in $n$ discrete time slots. This is simply a binomial random variable.
$$
P(S=k)= {n \choose k}p^{k}(1-p)^{n-k}
$$
$$
E[S]=np
$$
$$
\text{var}(S)=np(1-p)
$$

## Answering Question 2
Fix the number of arrivals, and ask how much time did it take to get that many arrivals?

We can think about inter arrival times as the number of trials until the first success. This is naturally geometric and thus we have.
$$
P(T_{1}=t)=(1-p)^{t-1}p
$$
$$
E[T_{1}]=\frac{1}{p}
$$
$$
\text{var}(T_{1}) = \frac{1-p}{p^{2}}
$$
Since the geometric R.V is memory less, it doesn't matter if we know what happened in the past, this doesn't change the future probabilites at all. Thus, if $T_{1}$ is the number of trials until the first success, what is $T_{2}$? $T_{2}$ would be the number of trials between the first success and second success, but knowing that we already had 1 success doesn't change the probability of there being a second. And thus $T_{2}$ is also geometric because of this memory less property.

So to get the total trials needed for $n$ amount of arrivals we simply add these inter arrival times.
$$
Y_{n}=T_{1}+T_{2}+\dots+T_{n}
$$
All the $T's$ are geometric and independent.

So naturally we want to know the distribution of $Y_{k}$. This is called the pascal distribution.
$$
P(Y_{k}=t)= {t-1 \choose k-1}p^{k}(1-p)^{t-k}
$$
Where $t$ denotes the number of time units, and $k$ denotes the number of successes. So this can be said as, "what is the probability that I get $k$ successes in $t$ time units. (or $t$ trials)". For this to be valid, $t\geq k$.

The expected value is
$$
E[Y_{k}]=\frac{k}{p}
$$
$$
\text{var}(Y_{k})= \frac{k(1-p)}{p^{2}}
$$

## Merging and Splitting
We can split a single Bernoulli process into two different Bernoulli processes. Suppose there is probability $p$ of arrival, and probability of $q$ that it goes to server 1 and $(1-q)$ that it goes to server 2. We can create a Bernoulli process for each server. The probability that a slot gets filled on server 1 is the probability that there is an arrival times the probability I choose it goes to server 1. Assuming the arrival is independent of my choice, then this is just $Ber(pq)$, a simple Bernoulli process with parameter $qp$. Likewise for server 2 it would be $Ber(p(1-q))$

We can also merge 2 processes into 1 Bernoulli process. If we have two arrival streams, suppose the first is $Ber(p)$, and the second $Ber(q)$. We want to merge them into one stream, and thus we need to figure out what is the probability that a given time slot is filled. This is easier thought of as the inverse, what is the probability that a time slot in the combined stream is not filled? Well that means that both streams had no arrival, which happens with probability $(1-q)(1-p)$. So the probability of there being an arrival on the combined stream is simply
$$
1-(1-q)(1-p)=p+q-pq
$$
Then this is our new parameter for the combined Bernoulli process. Note that this combined process cannot count the total number of arrivals because if stream 1 and stream 2 both have an arrival we only note down that there was an arrival in the combined process, thus we cannot accurately count the number of total arrivals using just the combined process.