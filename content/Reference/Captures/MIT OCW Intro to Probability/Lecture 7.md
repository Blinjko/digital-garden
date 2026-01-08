---
created: 2025-12-21
tags:
---

## Overview
The reading went over independent random variables, what it means to be independent, expectation and variance of independent variables ( properties we can exploit ).

## Just a Notation Change
Really this chapter and all these topics are mostly just a change in notation from before.
$$
p_{X}(x)=P(\{X=x\}) = P(X=x)
$$
$$
p_{X,Y}(x,y)=P(X=x \cap Y=y)
$$
$$
p_{X|Y}(x|y)=P(X=x|Y=y)
$$
Similarly, this applies to the conditional probability law
$$
p_{X,Y}(x,y)=p_{X}(x)p_{Y|X}(y|x)
$$
Conceptually what is happening with conditioning and joint PMF's is same to the cases presented originally.

## Independence of Random Variables
The definition of dependence is 
$$
p_{X,Y,Z}(x,y,z)=p_{X}(x)p_{Y}(y)p_{Z}(z)
$$
If the above equality is true for values of $x,y,z$ then the random variables are independent. This is generally simpler than what we had before where we had to check multiple different conditions, but this is because this equality has to hold for all values of $x,y,z$ like said before.

Intuitively independence can be though of in terms of conditional probabilities, i.e "does knowing some new piece of information change what you know about something?" If not the events are independent, otherwise they are dependent. We can write this out as
$$
p_{X|Y}(x|y)=p_{X}(x)
$$
If $p_{Y}(y)>0$ and this holds true, then $X$ and $Y$ are independent because knowing something about $Y$ doesn't change the what you believe about $X$. Note that this is only valid if $p_{Y}(y)$ is well defined and not zero for the given $y$, as we cannot condition on zero probability events.

Two random variables might be conditionally independent but not independent. In that case we have
$$
p_{X,Y|A}(x,y)=p_{X|A}(x)p_{Y|A}(y)
$$
if the probability of $A$ is non zero. In this case $X,Y$ are said to be conditionally independent given $A$.

This is also equivalent to
$$
p(X|Y,A)(x|y)=p_{X|A}(x)
$$

A useful point to note is that if $X$ and $Y$ are independent, then $g(X)$ and $h(Y)$ are also independent. You can think about it as, knowing $Y$ doesn't tell you anything about $X$ , so how would derivative function of $Y$ tell you anything? I.E you cannot get information from $Y$ if it simply doesn't exist there.
## Expectation and Independence
To add to our list of properties of expectation,we have, if $X,Y$ are independent random variables, then
$$
E[XY]=E[X]E[Y]
$$
Which is generally not true if $X$ and $Y$ and not independent.

Similarly we have
$$
E[g(X)h(Y)]=E[g(X)]E[h(Y)]
$$
which also isn't generally true, but is true if $X$ and $Y$ are independent.


## Variance and Independence
How does variance behave with independent random variables? Well we get the following properties.

If and only if $X$ and $Y$ are independent
$$
\text{var}(X+Y)=\text{var}(X)+\text{var(Y)}
$$

## Finding Binomial Random Variable Exception and Variance using independence.

A binomial distribution is a set of $n$ repeated independent Bernoulli trials. Thus is $X$ is the number of heads we get, we can write $X$ as a sum of all the trials.
$$
X=X_{1}+X_{2}+\dots X_{n}
$$
Where $X_{i}$ would be the $i$'th trial. 
We know the PMF of $X$ is
$$
p_{X}(x)= {n \choose k}p^{k}(1-p)^{n-k}
$$
Where $k$ is the number of successful trials. The PMF of $X_{i}$ is
$$
1 \text{ with probability } p
$$
$$
0 \text{ with probability } (1-p)
$$
We know that expectation of the sum of random variables (independent or not) is equal to the sum of their expectations. Thus we can find the expectation of $X$ by summing the expectations of each $X_{i}$.

So we find
$$
E[X_{i}]=\sum_{x}xp_{X_{i}}(x)=p
$$
Because $X_{i}$ can only 1 or zero and it has a probability $p$ of being 1. Thus the expectation of $X$ is
$$
E[X]=E[X_{1}+X_{2}+\dots +X_{n}]=\sum_{i=1}^{n}E[X_{i}]=nE[X_{i}]=np
$$
Which is a lot simpler than trying to simplify the sum we would have gotten should we had we used the PMF of $X$ directly.

Since $X_{i}$ are all independent we can find the variance easily as well.
$$
\text{var}(X)=\text{var}(X_{1}+X_{2}+\dots+X_{n})=\text{var}(X_{1})+\dots
$$
So then we need 
$$
\text{var}(X_{i})=E[X_{i}^{2}]-E[X_{i}]^{2}=p-p^{2}=p(1-p)
$$
Thus the variance of $X$ is
$$
\text{var}(X)=\sum_{i=0}^{n}\text{var}(X_{i})=np(1-p)
$$
