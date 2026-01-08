---
created: 2025-12-24
tags:
---

## Content
Read chapters 3.6 (continuous version of baye's rule), and first parts of chapter 4.1 which begins talking about deriving PDF's from expressions involving random variables (derived distributions).


## Baye's Rule
First some intuition on what we are doing. We are essentially doing inference, but imagine the following scenario.

There is a R.V $X$, but we cannot observe the value of $X$ directly, so we have a measuring device that measures $X$ and gives us another R.V $Y$. We know the value of $Y$. We also have some sort of belief on how $X$ is distributed. What we want is to know the value of $X$, so we can use Baye's rule and conditional probability to determine this.

What we want is the probability of $X$, or $X$'s distribution given a known value of $Y$. Naturally this lends itself to bayes rule because we can determine the inverse conditional, i.e what is the probability of $Y$, or $Y$'s distribution when we know $X$?

So, for continuous R.V we have baye's rule
$$
f_{X|Y}(x|y) = \frac{f_{X,Y}(x,y)}{f_{Y}(y)}=\frac{f_{X}(x)f_{Y|X}(y|x)}{f_{Y}(y)}
$$
Where in the scenario above, $f_{Y|X}(y|x)$ would be the model of our measurement device, and the noise it adds to the measured signal / value. Usually we can compute $f_{Y}(y)$ as well, one way being
$$
f_{Y}(y)=\int_{x}f_{X}(x)f_{Y|X}(y|x) \, dx
$$

### Discrete $X$, continuous $Y$
Sometimes the thing we want to infer, $X$, is not necessarily in the same realm as $Y$. This is where we get mixed PMF, and PDF's. So, what does Baye's rule look like in this case? Well I'll skip the derivation but we end up getting.
$$
p_{X|Y}(x|y)= \frac{p_{X}(x)f_{Y|X}(y|x)}{f_{Y}(y)}
$$
Where, once again we can determine $f_{Y}(y)$ using something like the law of total probability.
$$
f_{Y}(y)=\sum_{x}p_{X}(x)f_{Y|X}(y|x)
$$
Note that the reason that we have a sum here is because $X$ is a discrete R.V and we need to sum over all distinct values of $X$ that make up the sample space, so that we can get $f_{Y}(y)$.

Like I said before, this is the case where you want to infer the distribution of a discrete R.V, $X$ in this case, when you know the continuous R.V $Y$.

## Continuous $X$, discrete $Y$
Suppose the opposite case to before, what we want to infer, $X$, is continuous and what we know is discrete, $Y$. Then Baye's rule is
$$
f_{X|Y}(x|y)= \frac{f_{X}(x)p_{Y|X}(y|x)}{p_{Y}(y)}
$$
We can also determine $p_{Y}(y)$ like so
$$
p_{Y}(y)=\int_{x}f_{X}(x)p_{Y|X}(y|x) \, dx
$$
## Derived R.V
Derived R.V are R.V's that are a function of 1 or multiple other random variables. What we are interested in is deriving their distributions.

### Discrete Case
In the discrete case it is pretty simple, a PMF maps values from 1 set to another. If we take a function of a R.V, it essentially is another function that maps the output set of the R.V to another set. Then, all we have to determine is what values in the original input set of the first R.V correspond to which outputs in the output set. Once we know those, we sum their probabilities to determine the probability of that specific event in the final output set.

I.E, suppose $Y=g(X)$
$$
p_{Y}(y) = \sum_{x \text{ s.t } y=g(x)}p_{X}(x)
$$
### Continuous Case
The continuous case is a bit more involved. We have a 2 step procedure as follows.

Suppose $Y$ is the derived R.V and we want it's PDF. What we do first is get the CDF of $Y$, $F_{Y}(y)=P(Y\leq y)$.

Once we have the CDF, we then take the derivative to get the PDF. $f_{Y}(y)=\frac{dF_{y}}{dy}(y)$.

The challenge is usually in finding the PDF of $Y$.

An example will help illustrate this.
Suppose $X$ is uniform on the interval $[0,2]$, so $f_{X}(x)=\frac{1}{2}$ when in that interval and 0 otherwise. The CDF of $X$ is $\int_{0}^{x} \frac{1}{2} \, dx=\frac{x}{2}$. We know that $Y=X^{3}$. So we take the CDF of $Y$, $P(Y \leq y)$ and plug in this value.
$$
P(Y\leq y)=P(X^{3}\leq y)=P(X\leq y^{1/3})
$$
The last part is the just the CDF of $X$ but if $x$ was mapped to $y^{1/3}$, so that is what we write.
$$
P(Y\leq y)=\frac{y^{1/3}}{2}
$$
Now before we take the derivative we have to determine the interval for which $Y$ is valid on. To do this we look at the extremes of the interval that $X$ is valid on, and plug those values into the expression $Y=X^{3}$. Doing this we see that $Y$ ranges from $0$ to $8$, so the interval $Y$ is valid on is $[0,8]$.

Now we take the derivative of $F_{Y}(y)$ to get
$$
f_{Y}(y)=\frac{1}{3} \frac{1}{2} \frac{1}{y^{2/3}} =\frac{1}{6y^{2/3}}
$$
And we note that this is only valid on the interval $[0,8]$, and otherwise $f_{Y}(y)=0$.

### Linear Transform
If we have a R.V that is a linear function of the other, there is a simple transform formula we can use to get the derived PDF.

Suppose $Y=aX+5$. Then
$$
f_{Y}(y)=\frac{1}{|a|}f_{X}\left( \frac{y-b}{a} \right)
$$
