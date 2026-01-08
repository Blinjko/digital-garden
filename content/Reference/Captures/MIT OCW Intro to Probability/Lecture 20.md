---
created: 2026-01-02
tags:
---

## Content
Today we continued to cover the Central Limit theorem and how it can be used for approximating certain R.V's

## Central Limit Theorem Definition

Let $X_{1},\dots X_{n}$ be i.i.d random variables with finite variance $\sigma^{2}$. We have a R.V $S_{n}$ that is the sum of these R.V.
$$
S_{n}=X_{1}+X_{2}+\dots+X_{n}
$$
We can "standardize" $S_{n}$ like so
$$
Z_{n}= \frac{S_{n}-E[S_{n}]}{\sigma_{S_{n}}}= \frac{S_{n}-nE[X]}{\sqrt{ n }\sigma}
$$
We find that 
$$
E[Z_{n}]=0
$$
and
$$
\text{var}(Z_{n})=1
$$
And as $n$ tends toward $\infty$ we see that $Z_{n}$ approaches the standard normal distribution. This is the core of the central limit theorem.
$$
P(Z_{n}\leq c) \to P(Z\leq c)
$$
Where $Z$ is a standard normal R.V.

So we can use the central limit theorem to approximate values of $S_{n}$ given that $n$ is large enough.

It is also important to now that all the central limit theorem says is that the CDF of $Z_{n}$ converges to the standard normal CDF. It does not make a statement about the convergence of PDF's or PMF's.

## Using the CLT To approximate Binomial
We can approximate the probability Binomial distribution using the CLT since a binomial is just a sum of i.i.d R.V's. I'm not going to write anything down because I really don't feel like sitting through this lecture at the moment and I don't think the information is crucial going forward. For reference it is called the De Moivre - Laplace CLT for the Binomial.