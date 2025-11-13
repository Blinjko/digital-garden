
## Forms
There is the rectangular form:
$$
z = a + jb
$$
where `a` is the real part and `b` is the imaginary part.

There is also polar form:
$$
z=re^{j\theta}=r\cos(\theta) + jr\sin(\theta)
$$

Where:
- $r=\sqrt{ a^{2} +b^{2} }=|z|$ 
-  $\theta=\tan ^{-1}\left( \frac{b}{a} \right)$ 
- $a=r\cos(\theta)$
- $b=r\sin(\theta)$

Note that in polar form `r` itself is what determines the length of the vector, or magnitude of the complex number. So, changing the angle does nothing but change the orientation relevant to the horizontal axis, i.e the vector is still at the same distance from the origin.

Also it is important to note that $\tan ^{-1}$ ranges from $\left[ -\frac{\pi}{2}, \frac{\pi}{2} \right]$, so if you are in the 2nd or 3rd quadrant make sure to either add or subtract $\frac{\pi}{2}$ respectively. 

Note in Julia you can use the `atan(x,y)` function to compute $\theta$ without having to worry about the quadrant, just be sure to follow the format `atan(imaginary, real)`. There is also the functions `rad2deg()` and `atand(x,y)`, the former is self explanatory, the latter is the above `atan` function but the result is given in degrees.

## Conjugate
For rectangular and polar:
$$
z^{*}=a-jb =re^{-j\theta}
$$
## Reciprocal
The reciprocal is more easily thought about in polar form.
$$
\frac{1}{re^{j\theta}}=\frac{1}{r}e^{-j\theta}
$$
Note that taking the reciprocal is simply just *mirroring the vector* about the horizontal (real) axis.
## Identities

- $-1 = e^{j\pi}$ and $1 = e^{j 2\pi n}$ for some integer `n`
- $-j=e^{-j\frac{\pi}{2}}$and $j=e^{j\frac{\pi}{2}}$

Regarding Conjugates
- $z^{*}+z=2a=2re(z)$
- $z-z^{*}=j 2b=2im(z)$
- $zz^{*}=|z|^{2}=r^{2}$

## Arithmetic Operations

### Add and Subtract
Addition and subtraction should be done in rectangular form element wise.
$$
(a+jb)\pm(c+jd)=(a\pm c)+j(b \pm d)
$$
### Multiplication, Division, Exponents
Multiplication, division, and exponentiation should be done in polar form.
$$
z_{1}z_{2}=r_{1}e^{j\theta}\times r_{2}e^{j\omega} =r_{1}r_{2}e^{j(\theta+\omega)}
$$
$$
\frac{z_{1}}{z_{2}}=\frac{r_{1}e^{j\theta}}{r_{2}e^{j\omega}}=\frac{r_{1}}{r_{2}}e^{j(\theta-\omega)}
$$
$$
z^{n}=(re^{j\theta})^{n} = r^{n}e^{j\theta n}
$$
$$
\large z^{\frac{1}{n}}=(re^{j\theta})^{\frac{1}{n}}= r^{\frac{1}{n}}e^{\frac{j\theta}{n}}
$$

### Logarithms
Logarithms tend better to polar form as well. `k` denotes some integer value, $\ln(z)$ for when `k = 0` is called the *principle value* of $\ln(z)$.
$$
\ln(z)=\ln(re^{j(\theta\pm 2\pi k)})=\ln(r)\pm j(\theta+2\pi k)
$$
$$
\ln(1)=\ln(1e^{\pm j 2\pi k})=\pm j 2\pi k
$$
$$
\ln(-1)=\ln(1e^{\pm j\pi(2k+1)})=\pm j (2k +1)\pi
$$
$$
\ln(j)=\ln\left(e^{j\pi(1\pm 4k)/2}\right)=j\frac{\pi(1\pm 4k)}{2}
$$
$$
j^{j}=\left(e^{j (\pi/2 \pm 2\pi k)}\right)^{j}=e^{ -\pi(1\pm4k)/2}=e^{j\ln (j)}
$$
$$
z^{c}=e^{j\theta c}=e^{c\ln(z)}
$$
