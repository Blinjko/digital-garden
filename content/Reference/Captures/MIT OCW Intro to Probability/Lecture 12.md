---
created: 2025-12-26
tags:
---

## Content
The reading covered sections 4.3, and 4.5, we skipped transforms. Basically in these sections we covered the iterated expectation theorem, and total variance theorem.

## Iterated Expectation
In certain scenarios, we can think of $E[X|Y]$ as a random variable. This generally occurs when the definition of the conditional expectation depends on the value of $Y$. Thus in a sense $E[X|Y]$ is a function of $Y$, something like $E[X|Y]=g(Y)$, and thus is a random variable itself. The question we then ask is what is the expectation of this random variable?
$$
E[E[X|Y]]=E[X]
$$
## Law of total variance
Is given by
$$
\text{var}(X)=E[\text{var}(X|Y)]+\text{var}(E[X|Y])
$$
So, we can calculate the variance when we know the conditional variance and conditional expectation.