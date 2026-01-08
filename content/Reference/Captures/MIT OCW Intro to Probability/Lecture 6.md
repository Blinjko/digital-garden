---
created: 2025-12-19
tags:
---

## Content
We cover joint PMF's, conditional PMF's, and the total Expectation theorem.


## Standard Deviation
Is defined as
$$
\sigma_{X}=\sqrt{ \text{var}(X) }
$$
## Conditional PMF and Expectation
If we know an event occurred, it makes sense to adjust the probabilities of our PMF. Using the notation from chapter 1 we get
$$
p_{X|A}(x)=P(X=x|A)
$$
We can think about it as summing up the probabilities of $X=x$ in $A$ and normalizing them such that they sum to 1 and therefore make a valid probability model. This literally what the definition of conditional probability is
$$
P(X=x|A)=\frac{P(X=x \cap A)}{P(A)}
$$
So, in essence the conditional PMF $p_{X|A}(x)$ is the same as a normal PMF, except that the possible values $X$ can take on is less and the probabilities of each $x$ are adjusted so that when we sum them over the new sample space (universe), $A$, they equal 1.

Naturally the conditional expectation is the same as regular expectation, except we just use the conditional PMF.
$$
E[X|A]=\sum_{x}xp_{X|A}(x)
$$
Conditioning reduces the amount of values or random variable can take on, so we are only summing over the values that $X$ can take on because the ones it cannot now have a certain probability of $0$. 

Conditioning doesn't change any of the already established formulas so they can all be easily derived as long as we understand what conditioning does.

For example consider the law of the unconscious statistician.
$$
E[g(X)|A]=\sum_{x}g(x)p_{X|A}(x)
$$
We simply just use the new conditional PMF instead of the regular one.

## Geometric PMF
What is the probability that we get a head on the $k$'th coin toss? This is geometric, and our random variable gives us the number of independent coin tosses until the first head. Thus the PMF for this is
$$
p_{X}(k)=(1-p)^{k-1}p
$$
Where $k \in \mathbb{Z}$

### Memory-less Property
The memory-less property of the geometric PMF tells us that the probability of getting a successful trial $n$ trials from the current state has the same probability regardless if I have any failed trials already.

I.E you are flipping a coin, if you flip twice and get tails (fail) and ask, "from this point what is the probability that I get heads on the n'th flip".  The probability is the same as if you had not flipped the coin at all, i.e it doesn't depend on your history of failures as this doesn't change the probability.

## Total Expectation Theorem
Following from the law of total probability,
$$
P(B)=P(A_{1})P(B|A_{1})+\dots+P(A_{n})P(B|A_{n})
$$
where $A_{1},\dots A_{n}$ are disjoint events, we can use a divide and conquer technique to find the probability of $B$. 

We can translate this into PMF's
$$
p_{X}(x)=P(A_{1})p_{X|A_{1}}(x)+\dots+P(A_{n})p_{X|A_{n}}(x)
$$
Then if we multiply by $x$ and sum over $x$ we get
$$
E[x]=P(A_{1})E[X|A_{1}]+\dots+P(A_{n})E[X|A_{n}]
$$
So, we can also use a divide and conquer technique to calculate the expectation if we are able to divide the sample space up.

## Expectation of Geometric PMF
Using the total expectation theorem, and our knowledge about the memory-less property of the geometric PMF, we can derive that
$$
E[X]=\frac{1}{p}
$$
Where $p$ is the probability that our trial succeeds.

## Joint PMF's
When you want to study multiple random variables at once you need a joint PMF.
$$
P(X=x \cap Y=y)=p_{X,Y}(x,y)
$$
You can read it as, "what is the probability that I get specific values of x and y simultaneously."

It is also possible to think about it as a mutlivariable function. 

Naturally there are some properties of Joint PMF's
$$
\sum_{x}\sum_{y}p_{X,Y}(x,y)=1
$$
You are summing over all possible options so it must be 1.
$$
\sum_{y}p_{X,Y}(x,y)=p_{X}(x)
$$
If we sum all the probabilities of getting a given x, i.e we don't care about y so we consider all y's valid and thus have to sum up the probability of each (x,y) pair where x is some fixed value and y ranges over all it's values (i.e the set of all possible pairs where X=x). Naturally the same applies for Y.  Also a bit of terminology, $p_{X}(x)$ is called the marginal PMF here.

Using the definition of conditional probability we can derive
$$
p_{X|Y}(x)=\frac{p_{X,Y}(x,y)}{p_{Y}(y)}
$$
Which we can interpret as, the conditional PMF is simply a re-normalized slice of the joint PMF where we hold the conditioning variable constant (which is what determines what slice we are considering).

