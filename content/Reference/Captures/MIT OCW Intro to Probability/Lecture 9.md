---
created: 2025-12-23
tags:
---

## Content
In the readings (3.4, 3.5) we go over joint PDF's, conditioning, independence, and the re-iterations of the same things (expectation, variance) and their shortcuts.


## Joint PDF's
It is pretty straightforward so I wont say much. Basically if we have to R.V's we want to consider together, we need their joint PDF.
To calculate the probability of an event $A$
$$
P((X,Y)\in A)= \iint_{A}f_{X,Y}(x,y) \, dxdy
$$
We can recover the marginal PDF's like so
$$
f_{X}(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) \, dy 
$$
Expectation is
$$
E[X,Y]= \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xyf_{X,Y}(x,y) \, dx  \, dy 
$$
The shortcut still applies too
$$
E[g(X,Y)]= \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x,y)f_{X,Y}(x,y) \, dx  \, dy 
$$

We define independence when
$$
f_{X,Y}(x,y)=f_{X}(x)f_{Y}(y)
$$
From which we can also deduce
$$
f_{X|Y}(x|y)=f_{X}(x)
$$
The joint CDF is defined
$$
F_{X,Y}(x,y)=\int_{-\infty}^{x} \int_{-\infty}^{y}  f_{X,Y}(x,y) \, dy   \, dx 
$$
Naturally we can take 2nd partial of $F_{X,Y}(x,y)$ to recover the joint PDF
$$
f_{X,Y}(x,y)=\frac{\partial^{2}}{\partial_{x}\partial_{y}}(F_{X,Y}(x,y))
$$
The order of the partials doesn't matter, recall clairaut's theorem.

## PDF's and conditioning
It is essentially the same as before
$$
f_{X|Y}(x|y)= \frac{f_{X,Y}(x,y)}{f_{Y}(y)}
$$
We think of this as, taking the probability of the intersection $x$ and $y$, and the re-normalizing it such that the conditional probability equals 1 when integrated over all values. It helps to imagine $y$ as being a fixed value and $x$ is the one varying.