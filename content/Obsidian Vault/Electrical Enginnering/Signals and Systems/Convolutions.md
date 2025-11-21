Definition
$$
\int_{-\infty}^{\infty} f(x)g(t-x) \, dx =f(t)*g(t)
$$
## Properties

### Commutative
$$
f(t)*g(t)=g(t)*f(t)
$$
This is useful because sometimes shifting one function is way simpler than the other.

### Associative
$$
f(t)*[g(t)*y(t)]=[f(t)*g(t)]*y(t)
$$
### Distributive
$$
f(t)*[g(t)+y(t)]=f(t)*g(t)+f(t)*y(t)
$$
### Shift property
$$
f(t-T_{1})*g(t-T_{2})=c(t-T_{1}-T_{2})
$$
If the inputs are shifted, the output is shifted an amount equal to the sum of the inputs shifts.

### Width property
If $f(t)$ has a width of $W_{1}$ and $g(t)$ a width of $W_{2}$ then the output $c(t)$ will have a width of $W_{1}+W_{2}$. This assumes the functions are finite and have finite width.

## Doing Convolutions with unit step
We will sometimes get a convolution integral which involves unit step functions. This might seem complicated at first, but it actually makes our life easier. When we think about it, the convolutions are 0 when whatever it input into them is less than 0, so really we only need to integrate when the step functions are not 0. 

Example:
$$
\int_{-\infty}^{\infty} y(x)u(x)h(t-x)u(t-x) \, dx 
$$
This integral is non zero only when the two unit step functions are non zero. Thus:
$$
u(x) = 1 \text{ when }x>0
$$
$$
u(x-t) = 1 \text{ when } x-t>0 \text{ , } t>x
$$
This us gives us two constraints on $x$. Thus we can rewrite it as:
$$
t>x>0
$$
Thus, the unit step functions are non zero on the interval $(0,t)$, so that is now our new bounds. Also, since the step functions are 1 on this interval we get rid of them now since they are not making any sort of contribution.
$$
\int_{0}^{t} y(x)h(t-x) \, dx
$$
This integral is now simpler to do, and our life has become a little bit easier.
