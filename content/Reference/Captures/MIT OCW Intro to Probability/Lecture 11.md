---
created: 2025-12-25
tags:
---

## Content
Read chapters 4.2 and 4.2, where we cover how to derive the PDF from an equation involving 2 random variables. Specifically the convolution method. Also I read about covariance, it's properties, what it means, and the covariance coefficient.

## Derived Distributions Monotonic Case
Suppose $Y=g(X)$, and $g(t)$ is a monotonic function, i.e it is strictly increasing or decreasing. Also this means that $g(t)$ has a 1 to 1 function mapping. There is a shortcut to find the derived distribution $Y$ if we get a function of this nature. I will not derive it but here it is.

$$
f_{X}(x)=f_{Y}(y) \left|\frac{dg}{dx}(x)\right|
$$
Note that we would have to divide by the derivative to actually get $f_{Y}(y)$

## Sum of Independent Random Variables - Convolution
Suppose we have $W=X+Y$, where $X,Y$ are independent R.V. We can find the derived distribution of $W$ using convolution. 

For the discrete case we have
$$
p_{W}(w)=\sum_{x} p_{X}(x)p_{Y}(w-x)
$$

$$
f_{W}(w) = \int_{-\infty}^{\infty} f_{X}(x)f_{Y}(w-x) \, dx 
$$
Obviously these can be computed using the graphical method as well.

## Two independent normal R.V
What does the Joint PDF of two independent normal R.V look like?
suppose
$$
X \sim N(\mu_{x},\sigma_{x}^{2}), \, Y \sim N(\mu_{y},\sigma_{y}^{2})
$$
then
$$
f_{X,Y}(x,y)=f_{X}(x)f_{Y}(y) = \frac{1}{2\pi\sigma_{x}\sigma_{y}}\exp\left\{ -\frac{(x-\mu_{x})^{2}}{2\sigma_{x}^{2}}- \frac{(y-\mu_{y})^{2}}{2\sigma^{2}_{y}} \right\}
$$

The sum of two independent normal R.V is also normal itself. I.E $W=X+Y$, when $W$ is normal and has a variance of $\sigma_{x}^{2}+\sigma_{y}^{2}$, and a mean of $\mu_{x}+\mu_{y}$

## Covariance
What is covariance and how can we interpret it? Covariance can be thought of as the amount that 2 random random variables take the same sign or opposite sign. A positive covariance means that the 2 R.V mostly take the same sign, i.e they are both positive or both negative more than one being negative and the other positive. Similarly a negative covariance means that 2 R.V mostly take opposite signs, more so than they take the same sign.

Covariance can also be thought of as the association between 2 R.V, when one is large the other also tends to be large, and visa versa.
$$
\text{cov}(X,Y) = E[(X-E[X])(Y-E[Y])]
$$
The zero mean case
$$
\text{cov}(X,Y)=E[XY]
$$
If $X$ and $Y$ are independent then
$$
\text{cov(X,Y)}=0
$$
but the inverse isn't necessarily true.


A shortcut formula
$$
\text{cov}(X,Y)=E[XY]-E[X]E[Y]
$$
We can also the the covariance to calculate the variance of the sum of random variables.
$$
\text{var}\left( \sum_{i=1}^{n}X_{i} \right)=\sum_{i=1}^{n}\text{var}(X_{i})+\sum_{(i,j), \, i \ne j}\text{cov}(X_{i}X_{j})
$$

## Correlation Coefficient
Denoted as $\rho$, it is the unitless (dimensionless) version of the covariance, since the units on the covariance are odd. It is sort of like the standard deviation to variance. It also gives insight about the strength of the association between 2 R.V.

The mathematical definition.
$$
\rho(X,Y) = \frac{\text{cov}(X,Y)}{\sigma_{X}\sigma_{Y}}
$$
Interestingly it always falls between -1 and 1.
$$
-1 \leq \rho \leq 1
$$

If $|\rho|=1$, then
$$
(X-E[X])=c(Y-E[Y])
$$
If $X$ and $Y$ are independent, then $\rho=0$
