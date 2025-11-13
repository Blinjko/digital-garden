The Laplace transform is a generalized version of the fourier transform. Recall
$$
\int_{-\infty}^{\infty} x(t)e^{-j\omega t} \, dt 
$$
Now if we multiply this by a exponential $e^{-\sigma t}$ we get
$$
\int_{-\infty}^{\infty} x(t)e^{-\sigma t}e^{-j\omega t} \, dt = \int_{-\infty}^{\infty} x(t)e^{-(\sigma+j\omega)t} \, dt  
$$
Now if we say that $\sigma+j\omega = s$ Then we get
$$
\int_{-\infty}^{\infty} x(t)e^{-st} \, dt 
$$
Which is the forward part of the bilateral Laplace transform.
The reverse part of the bilateral Laplace transform is
$$
\frac{1}{2\pi j} \int_{c-j\infty}^{c+\infty}  X(s)e^{st} \, ds 
$$Where $c$ is the radius of convergence, but this is rather complicated and we will not be using it to do reverse transformations. Instead we will create a transform table and use it to compute our reverse transforms, which will be easier in the end than computing this integral above.

So, why do we need the Laplace transform? Well it is a generalized version of the Fourier transform and unlike the Fourier transform, the Laplace transform can transform signals of infinite energy, like exponential with a positive power. 

We can actually think about the exponential we multiplied by, $e^{-\sigma t}$ as a term to constrain these signals with infinite energy. So thinking about this, for the Laplace transform to converge, there must exist some $e^{-\sigma t}$ that makes our function we want to transform go to 0 or some constant value.

## Unilateral Transform
Initially, above we defined the bilateral transform, but most of the time will be using the unilateral Laplace transform because it is simpler and it is a 1 to 1 transform. This is important for when we want to reverse transforms, because unlike the bi-lateral we don't need to know the radius of convergence and we can just use the transform table.
So the unilateral transform its
$$
X(S)=\int _{0}^{ \infty}x(t)e^{-st} \, dt = \text{ unilateral laplace transform}
$$

## Properties of the Laplace Transform

See the table
![[Pasted image 20251002135308.png]]

## Transform Table
![[Pasted image 20251002121723.png]]


## LTI Systems
From the properties table we know that convolution in the time domain is the same as multiplication in the s domian. Thus if we have the input function $x(t)$, the output $y(t)$ and the impulse response $h(t)$
$$
h(t)*x(t)=y(t) \implies H(S)X(S)=Y(S)
$$
We call $H(S)$ the transfer function of the system. Notice how we can solve for $H(S)$
$$
H(S)=\frac{Y(S)}{X(S)}
$$
So, if we know $Y(S)$ and $X(S)$ then we can get the transfer function of the system and graph it's magnitude and phase plots using $H(S)$. We could also take the reverse transform to fin $h(t)$.

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

## Inverse Laplace Transform using Tables
We can do the inverse Laplace transform using the tables of known transforms and properties, but this requires that we represent our transformed function in a form that resembles that in the tables. Often times to do this we will use partial fractions.

An easy way to solve for the variables in partial fractions is to foil out all the terms and use the known fact that if you have 2 polynomials equal to each other of the same degree, their coefficients must be equal. This will yield  a system of equations that can be solved.

If all the partial fractions are linear components it is very easy. Suppose we have something of the form.
$$
\frac{1}{(s+a)(s+b)}=\frac{A}{s+a}+\frac{B}{s+b}
$$
We multiply through by the denominator of the factor we want and then we plug in $s$ = the inverse of the factor. This will cause all the other terms to go to 0 and you can compute the left side to find your value. 

So using the example above, to find $A$ we multiply through by $s+a$ to get
$$
\frac{1}{s+b}=A+\frac{B(s+a)}{s+b}
$$
Then we set $s=-a$ and we get
$$
A=\frac{1}{a-b}
$$
This only works if you don't have repeated linear factors, if you do you have to use another method to find their coefficients.

## Clever use of Tables to Solve Transforms
Instead of doing out the integral we can use the tables, but what we have is often not in the table, so we need to get creative.

For example, one such technique is to use the derivative property. We take our function and keep differentiating it until it looks like something we know how to transform. If it is a polynomial it will eventually become a constant which we know is just the delta function.

We can also do something similar using other properties. In the point here is to be creative and think if there is a way to manipulate your function into something you want using known transform properties and known transforms.


## Transfer Function and System Stability

Recall
$$
H(s)=\frac{P(s)}{Q(s)}
$$
Let us consider the second order system where $P(s)$ is not relevant and
$$
Q(s)=s ^{2} +2\zeta\omega_{n}s + \omega_{n}
$$
What we want is the values of $s$ for which this equation is zero. We can use the quadratic formula to derive
$$
-\zeta\omega_{n} \pm \omega_{n}\sqrt{ \zeta^{2}-1 }
$$

Note
$$
\zeta = \text{ damping coefficient }
$$
and
$$
\omega_{n} = \text{ natural resonant frequency }
$$

Our possibilities are:
1. $\zeta = 1 \implies$ Negative real roots, in LHP so stable, this is called critically damped.
2. $\zeta>1 \implies$ Negative roots, in LHP, so over-damped and stable system.
3. $0 < \zeta < 1 \implies$ Complex conjugate roots on the imaginary axis, stable, underdamped.
4. $\zeta > 0 \implies$ Roots are positive and real, unstable system.
