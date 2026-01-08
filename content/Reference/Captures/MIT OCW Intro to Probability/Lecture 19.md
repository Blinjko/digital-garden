---
created: 2026-01-01
tags:
---

## Content
Today we go over the Chebyshev inequality, convergence in probability, the weak law of large numbers, and introduce the central limit theorem.

## Why we care about limit theorems
In practice working with a few R.V it isn't that hard to get exact anwsers using the methods we have learned thus far. In a practical sense though we might have a very large number of R.V and getting exact answers might be very tedious or impractical. Limit theorems tell us what happens as the number of R.V's we are dealing increase and give use useful results that we can apply practically when we are dealing with many  R.V.


## The Markov Inequality

The idea goes something like this.

The expected value of $X$ is
$$
E[X]=\sum_{x}xp_{X}(x)
$$
If we assume $X$ is nonnegative and we take a constant $a$ that is also nonnegative and look at all the $X$ values that are greater than $a$ we can say
$$
\sum_{x}xp_{X}(x) \geq \sum_{x\geq a}xp_{X}(x)
$$
Which makes intuitive sense; if you add less numbers you will get a smaller number. We proceed with
$$
\sum_{x\geq a}xp_{X}(x) \geq \sum_{x\geq a}ap_{X}(x)
$$
We replace $x$ in the sum with the constant $a$. Since $X$ always takes on a value larger or equal to $a$ it makes sense that the second sum would be smaller or equal to the original if we just fix $x=a$.

We continue by rewriting
$$
E[x]=\sum_{X}xp_{X}(x) \geq a\sum_{a\geq x}p_{X}(x)=aP(X\geq a)
$$
Which gets us the Markov inequality
$$
\frac{E[x]}{a}\geq P(X\geq a)
$$

## Chebyschev's Inequality

I'm not going to derive it here, but you can derive it in various ways, one being from the Markov inequality.

$$
P(|X-\mu|\geq c)\leq \frac{\sigma^{2}}{c^{2}}
$$
This inequality relates the expected value to the variance. Here is how we can interpret it.
First, $\mu=E[X]$, and $\sigma^{2}=\text{var}(X)$, and $\sigma$ is the standard deviation. $|X-\mu|$ denotes the distance $X$ is from its expected value, and $P(|X-\mu|\geq c)$ is the probability that $X$ is at least $c$ away from its expected value / average. The inequality tells us that this probability is capped at $\frac{\sigma^{2}}{c^{2}}$ which can be useful if we can't directly calculate the probability but can compute the variance.

We can rewrite the inequality as
$$
P(|X-\mu|\geq k\sigma)\leq \frac{1}{k^{2}}
$$
Which is more intuitive in its meaning. We can read this one as, the probability that $X$ is $k$ standard deviations away from the mean is capped at $\frac{1}{k^{2}}$.


## Convergence in Probability
The definition of convergence in probability is slightly different than normal convergence. For this we are speaking about a R.V $Y_{n}$ which is a sum of $n$ R.V.

We define the following inequality as convergence, for every $\epsilon>0$.
$$
\lim_{ n \to \infty } P(|Y_{n}-a|\geq\epsilon)=0
$$
We can think about it as an interval where $a$ is at the center. Convergence occurs if, as $n$ increases the probability distribution becomes more and more concentrated in that interval. Or more simply put, we get convergence if the probability that we fall outside the interval continues to decrease towards 0.

Note that convergence of a R.V to any value does not necessarily imply anything about the convergence of the expected value or variance of that variable.

## Sample Mean
The sample mean is the average over $n$ taken samples. We define it as
$$
M_{n}= \frac{X_{1}+X_{2}+\dots+X_{n}}{n}
$$
Where $X_{i}$ are i.i.d R.V. (Independent and Identically distributed).
If $E[X_{i}]=\mu$, and $\text{var}(X_{i})=\sigma^{2}$ then
$$
E[M_{n}]=\mu
$$
and
$$
\text{var}(M_{n}) = \frac{\sigma^{2}}{n}
$$

We can see that the sample mean converges by using chebyschev's inequality and observing as $n$ goes towards $\infty$.
$$
P(|M_{n}-\mu|\geq\epsilon)\leq \frac{\text{var}(M_{n})}{\epsilon^{2}}= \frac{\sigma^{2}}{n\epsilon^{2}}
$$
We see that as $n$ approached $\infty$ then the probability approaches 0. Put another way, as the sample size grows larger, $M_{n}$ becomes a more accurate estimate of the true mean, this is known as the weak law of the law numbers.

## Central Limit Theorem
Let $S_{n}=X_{1}+\dots X_{n}$.  Then we define $Z_{n}$ as
$$
Z_{n}= \frac{S_{n}-E[S_{n}]}{\sigma S_{n}}= \frac{S_{n}-nE[X]}{\sqrt{ n }\sigma}
$$
Where $X_{i}$' are i.i.d, and $\sigma^{2}$ is their variance, and $E[X]$ is the expected value.

We find that that $Z_{n}$ has a zero mean, and it has unit variance. That is to say as $n$ grows they do not change. This leads us to the theorem. Suppose $Z$ is a standard normal r.v with zero mean and unit variance.
$$
P(Z_{n}\leq c)\to P(Z\leq c)
$$
So, we can approximate $Z_{n}$ as a standard normal r.v. and compute it's values using the standard normal r.v table.

Similarly we can solve for $S_{n}$, which is usually what we want. Notice that $S_{n}$ is simply a linear transformation of $Z_{n}$, and thus can be thought of, in a practical sense, as also being normal; though this isn't exactly mathematically true.

The central limit theorem doesn't say anything about the distribution of $S_{n}$, but we can use it in practice to approximate the value of $S_{n}$.