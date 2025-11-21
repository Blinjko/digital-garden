 COPIED FROM OLD NOTES NEEDS TO BE VERIFIED AND EDITED

The Laplace transform is a generalized version of the [[Fourier Transform]]. Recall
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

