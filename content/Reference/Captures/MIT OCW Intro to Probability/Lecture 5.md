---
created: 2025-12-18
tags:
---

## Outline
Read sections 2.1, 2.2, 2.3 and the first part of 2.4. Not as long as it sounds. The book covered Random variables. Then it talked about probability mass functions (discrete), definition, Bernoulli, binomial, Poisson, geometric.  Finally it ended on the introduction of expectation.


## Random Variable
Essentially a function that maps the sample space to the real line. Or put another way, it maps the output of an experiment to a numerical value (not all experiments have numerical outputs).

You can have several random variables defined on a single sample space.

Functions of random variables are also random variables.

Random variables can be continuous or discrete. Discrete means finite or countably infinite.

Generally we will denote random variables like $X$ and the numerical values $x$. $X$ is really a function, and $x$ is the value it outputs, a number.

## Probability Mass Function
A function, denoted $p_{X}(x)$, where $X$ is the random variable, that maps the outputs of a random variable to a probability. I.E what is the probability that the random variable gives an output $x$, that number is $p_{X}(x)$. It is also known as the probability distribution of $X$.

Formally
$$
p_{X}(x)=P(X=x)
$$
$$
= P(\{\omega \in \Omega \text{ s.t } X(\omega)=x \})
$$

- All values of a PMF are positive.
- If we sum the PMF over all $x$ then it must equal 1 since we have exhausted all the events in the sample space.
	- $\sum_{x}p_{X}(x)=1$

To compute a PMF for a given value, we need to find all the outcomes lead to a particular numeric output and add their probabilities.
## Special PMF's

### Geometric PMF
Suppose I am flipping a coin, a geometric PMF gives the probability that the first time I land on heads is on the $k$'th flip. I.E what is the probability that I flip $k-1$ tails and then 1 head? Of course this applies to more than coin flipping, but this captures the idea.
$$
p_{X}(k)=(1-p)^{k-1}p
$$
where $p$ is the probability that I land on heads and $k \in   \mathbb{Z}$.

### Binomial PMF
Suppose I am flipping a coin $n$ times, what is the probability that I get $k$ heads? This is a repeated Bernoulli trial, and thus a binomial. So to compute the PMF we simply follow our rule.
$$
p_{X}(k) = {n\choose k}p^{k}(1-p)^{n-k}
$$
We essentially compute the probability of getting one of those combinations and then multiply it by how many combinations there is.

When $n$ is large the binomial PMF looks like a bell curve, a curious observation.

## Expected Value
We can imagine the expected value as the weighted average value that the random variable will take. In this case we imagine probability as a frequency and the weight is the probability that we get each value of the random variable. Thus the expected value is
$$
E[X]=\sum_{x}xp_{X}(x)
$$
The expected value can also be imagined as the center of "gravity" of the PMF (it has the same formula). If a PMF is  symmetric around a certain point, then that point is the expected value of the random variable associated with the given PMF.

### The Law of the Unconscious Statistician
If we have a random variable that is a function of another random variable it also is a random variable itself. That being said, how do we calculate the expectation of this new random variable? The same way we did it before, we need to derive it's PMF using the previous random variable.
Suppose
$$
y=g(x)
$$
where we have the random variables
- $X \implies x$
- $Y \implies y$

To compute $y$, we simply run $x$ through $g(x)$. To compute the PMF of $y$ we need to add up all the probabilities of the various $x$'s that can result in said $y$.  E.X: if we have $x=2,3$ and $g(2)=g(3)=9$, then, the probability of $y=9$, $p_{Y}(9)$, is the sum of the probabilities that $x=2$ or $x=3$, i.e $p_{X}(2)+p_{X}(3)=p_{Y}(9)$. A way to write this mathematically is
$$
p_{Y}(y)=\sum_{\{x \text{ s.t }y=g(x)\}}p_{X}(x)
$$
I.E "the probability of a given $y$ is equal to the sum of the probabilities of all the values of $x$ such that (where) $g(x)=y$."

Then, if we want to compute $E[y]$ we do it in the usual way. However this is annoying to do since we have to get the PMF of $Y$. There is a shortcut, and it is the following formula
$$
E[Y]=\sum_{x}g(x)xp_{X}(x)
$$
Where $y=g(x)$. Which is simpler to conceptualize and more straightforward.


> [!warning] The average of a function is not necessarily equal to the function of the average.
>In general $E[g(X)]\ne g(E[X])$

### Properties of Expectation
Suppose $\alpha,\beta$ are constants then,
- $E[\alpha]=\alpha$
- $E[\sigma X] = \alpha E[X]$
- $E[\alpha X+\beta]=E[\alpha X]+\beta=\alpha E[X]+\beta$
The last two are the linear properties, and this gives us an exception to the caution earlier.
If $g(x)$ is linear, then $E[g(X)]=g(E(X))$ holds true.

## Variance & Moment
We define the moment of a random variable $X$ as
$$
E[X^{n}]= \sum_{x}x^{n}p_{X}(x)
$$
Where $n$ denotes the $n$'th moment. 

Variance is defined as the second moment of the distance $X$ from $E[X]$. Symbolically this is
$$
\text{var}(X)=E[(X-E[X])^{2}]=\sum_{x}(X-E[X])^{2}p_{X}(x)
$$
$$
=E[X^{2}]-(E[X])^{2}
$$
What does variance tell us? It tells us how far we are from the average, except keep in mind that it is squared, so there is some emphasis put on the larger outliers. In general, it tells us how spread out a distribution is.
- Small variance $\implies$ tightly concentrated distribution
- Large variance $\implies$ distribution is very spread out is not really concentrated

### Properties of Variance
- Variance is always non negative, look at the definition it makes logical sense
- $\text{var}(X+\beta)=\text{var}(X)$ Adding a constant to the random variable doesn't change the variance.
- $\text{var}(\alpha X+\beta)=\alpha^{2}\text{var}(X)$ Multiplying the random variable by a constant results in the variance being multiplied by the square of that constant.
