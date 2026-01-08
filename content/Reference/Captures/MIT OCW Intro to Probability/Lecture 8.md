---
created: 2025-12-22
tags:
---

## Overview
The reading was chapter 3.1-3.3 and it covered,
- Continuous random variables
- Probability Density Function's (PDF)
- Cumulative Density Function (CDF)
- Continuous Uniform PDF
- Exponential PDF & CDF
- Normal Distribution PDF, CDF, properties, uses.


## Continuous R.V and PDF
Continuous R.V are described by a PDF, which is a continuous function. A continuous R.V takes on an infinite number of values on the real line. Thus to get a probability of some event, we integrate over the interval(s) that make up that event.
$$
P(a \leq X \leq b)= \int_{a}^{b}f_{X}(x)dx
$$
If $a=b$ then the integral is 0 and the probability is 0. This tells us that the probability of any specific value happening is 0.

The PDF is not the probability and thus not bound by most of the probability axioms. Any non-negative continuous function such that
$$
\int_{-\infty}^{\infty} f_{X}(x) \, dx=1 
$$
is a valid PDF. The PDF can take on values greater than 1, sometimes a lot larger than 1. It is also important to understand that the PDF is not the probability, hence the name probability density. We can see this if we take an interval, $[a,a+\delta]$, where $\delta$ is a small positive number. When we do this, we can approximate the integral as a single rectangular area and thus
$$
P(a \leq X \leq a+\delta) =\int_{a}^{a+\delta}f_{X}(x) \, dx \approx f_{X}(a)\delta
$$
If we re-arrange we can see
$$
\frac{P(a \leq X \leq a+\delta)}{\delta}=f_{X}(a)
$$
So, the PDF is kind of like the probability per unit length, i.e the linear density. 

We can translate our definitions of expectation and variance from the discrete case.
$$
E[X]= \int_{-\infty}^{\infty} xf_{X}(x) \, dx 
$$
This is generally true as well:
$$
E[g(X)]= \int_{-\infty}^{\infty} g(x)f_{X}(x) \, dx 
$$
$$
\text{var}(X) = \int_{-\infty}^{\infty} (x-E[X])^{2} f_{X}(x)\, dx=\sigma^{2}_{X} 
$$
$$
\text{var}(X) = E[X^{2}]-E[X]^{2}
$$
### Continuous Uniform
Given any 2 intervals of the same length, if they have the same probability then the distribution is uniform.

For continuous uniform we have
$$
f_{X}(x)=\frac{1}{b-a}
$$
Where $b-a$ are the bounds of the uniform section. If we are outside then it is $0$.
$$
E[X]=\int_{a}^{b} \frac{x}{b-a} \, dx = \frac{a+b}{2}
$$
The standard deviation can be calculated my taking the square root of the variance in the typical manner here.
$$
\sigma_{X}= \frac{b-a}{\sqrt{ 12 }}
$$

## CDF
CDF's are defined for Discrete and Continuous R.V. The CDF models the cumulative probability up to a certain point, i.e $P(X\leq a)$.

For Discrete we have
$$
F_{X}(x) = \sum_{k\leq x}p_{X}(k)
$$
And continuous
$$
F_{X}(x)=\int_{-\infty}^{x} f_{X}(x) \, dx
$$

Naturally we can recover the PMF or PDF from the CDF
$$
f_{X}(x) = \frac{d}{dx}(F_{X}(x))
$$
$$
p_{X}(x)=F_{X}(x)-F_{X}(x-1)
$$

## Mixed R.V
Mixed random variables are random variables that are neither continuous or discrete, which can happen in various cases. E.X if a random variable involves a continuous part and a discrete part, it is a mixed random variable. A CDF is defined for all random variables though so Mixed R.V still have a CDF.

## Normal Distribution
The normal distribution, sometimes called the Gaussian distribution,  is a continuous R.V that plays an important role in probability. It's PDF has the appearance of a bell curve which is centered at it's expected value, $\mu$. The  CDF looks very similar to a sigmoid function, starts are 0 from $-\infty$ and rises up to 1 as the input approaches $\infty$.

The general definition of it's PDF is
$$
f_{X}(x)=\frac{1}{\sqrt{ 2\pi }\sigma}e^{-(x-\mu)^{2}/2\sigma^{2}}
$$
Where $\sigma$ is the standard deviation, and $\mu$ is the expectation. Thus, if $X=N(\mu,\sigma)$, then
$$
E[X]=\mu
$$
$$
\text{var}(X)=\sigma^{2}
$$
You can derive these using the integral but it gets really messy and is not really important here.

Another important and very useful property of the normal distribution is that linear transformations of normal distributions are also normal. I.E if $Y=aX+b$, then $Y$ is also a normal distribution, and we can use the known properties of expectation and variance to find variance and expectation of $Y$.

There is a special normal distribution called the standard normal. The standard normal is, $N(0,1)$, that is $\mu=0$ and $\sigma=1$. It's PDF looks like
$$
f_{X}(x)=\frac{1}{\sqrt{ 2\pi }}e^{-x^{2}/2}
$$
Note that if we try to evaluate the CDF of this function,
$$
F_{X}(x)=\int_{-\infty}^{x}\frac{1}{\sqrt{ 2\pi }}e^{-x^{2}/2} \, dx
$$
This integral has no known closed form solution, so it needs to be computed numerically.

We are generally concerned with finding the probability of some event of a normal random variable, but we usually do not have the standard normal case, fortunately there is a simple process to "standardize" any normal random variable such that we can use the precomputed probabilities of the normal distribution to compute our desired probability.

Suppose $Y$ is a non standard normal R.V, and $X$ is the standard normal R.V. Then to stardardize $Y$ we do
$$
X=\frac{Y-\mu}{\sigma}
$$
where $\mu$ and $\sigma$ are the parameters of $Y$. We can use this to compute a probability we are interested in. For example, say we want to know $F_{Y}(k)=P(Y \leq k)$. We can rewrite this as
$$
P(Y \leq k)=P\left( \frac{Y-\mu}{\sigma} \leq \frac{k-\mu}{\sigma}\right)=P\left(X\leq\frac{k-\mu}{\sigma}\right)
$$
Once we get to the last point on the right, we simply just look in the table of precomputed CDF values and choose the corresponding number..
