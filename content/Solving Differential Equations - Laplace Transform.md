FROM OLD NOTES, NEEDS REVISION

## Differential Equations
We can use the Laplace transform to solve differential equations as well. Suppose we have
$$
y(t)Q(D)=x(t)P(D) \implies Y(S)Q(S) =X(S)P(S)
$$
What we want is $y(t)$, which we can get my taking the inverse transform of $Y(S)$, so we need to solve for $Y(S)$
$$
Y(S)=\frac{X(S)P(S)}{Q(S)}
$$
To take the Laplace transform of derivatives we will use the the properties table. Similarly, we use the transform table to find $X(S)$ from $x(t)$. 

Once we have $Y(S)$ we need to take it's inverse transform, but it will likely be that $\frac{X(S)P(S)}{Q(S)}$ is not a transform you know or is in the table. So, to take the inverse transform we have to split this up into transforms we know from the table, and usually this is done using partial fractions since $\frac{X(S)P(S)}{Q(S)}$ is a ratio of polynomials.

Note that if we re-arrange the above we get
$$
\frac{Y(S)}{X(S)}=\frac{P(S)}{Q(S)}=H(S)
$$
So, if we can find $P(S)$ and $Q(S)$ we can find our transfer function. This generally tends to be easier than doing it in the time domain. Also, if we have the differential equation, and we assume that all the initial conditions are 0, we can attain the $P(S)$ and $Q(S)$ needed. Recall that when in the initial conditions are 0 we call it the Zero State Response, which is $h(t)$, which makes sense because $H(S)$ is the Laplace transform of $h(t)$

## Finding the ZSR and ZIR
Like I said before if we assume the initial conditions are 0, then take the Laplace transform we can solve for the transfer function, this gives us our ZSR.

So, then, if we take $x(t)$ to be 0 and we have our initial conditions, we can then take the transform of the LHS and separate only the components that involve the initial conditions of $y$. We call this part $C_{y}(S)$. We are then left with
$$
Y(S)Q(S) +C_{y}(S)=0
$$
Note that $Q(S)$ is the part of the Laplace transform of the LHS that doesn't involve the initial conditions, i.e if you make all the initial conditions 0 you will get this part, which if you have the n'th derivative is just
$$
s ^{n}Y(S)
$$
Because all the terms with the initial conditions are 0.

Once we do this can can use algebra to solve for $Y(S)$, the ZIR in this case.
$$
Y(S)=-\frac{C_{y}(S)}{Q(S)}
$$
