The zero state solution is the solution to the [[Difference Equations]] where the initial states are all 0, but the input may not necessarily be 0.

## The Process
The overall procedure for finding the Zero State Solution is as follows:
1. Find $h[n]$, the impulse response.
2. Convolve $h[n]$ with the input $x[n]$ to get the Zero State Solution $y[n]$

The tricky part here is step 1, because there is some nuance in the formula for $h[n]$ and a few other things we need to do before we can get $h[n]$.

## Finding $h[n]$
We have the formula
$$
h[n]=\frac{b_{N}}{a_{N}}\delta[n]+y_{c}[n]u[n]
$$
### What are $a_{N}$ and $b_{N}$
$a_{N}$ is the coefficient of the term on the output side of the difference equation that has the highest difference.

Some examples will illustrate what I mean by *highest difference*
- $y[n-2]$ has a higher difference than $y[n-1]$ and $y[n]$, and $y[n+1]$
- $y[n]$ has a higher difference than $y[n+2]$

You might have picked up that when I say difference here, I specifically mean subtraction. Another way to view it is, whatever the terms in the brackets are, if you put two of them in an inequality, the one that is on the lesser side is the one with the larger difference.

$b_{N}$ is simply the coefficient of that same difference term on the input side. Note that if the degree of the output is larger than the input degree, it will be $0$ and the $\frac{b_{N}}{a_{N}}\delta[n]$ term will disappear.

What I recommend doing is putting the difference equation in a form where there is only subtractions in the brackets and no additions. This makes it simpler to find $a_{N}$ and $b_{N}$ because you just look at the term with the largest subtraction in the brackets and take it's coefficient.

### What is $y_{c}[n]$
$y_{c}[n]$ is the algebraic sum of the characteristic modes of the difference equation. That is just a fancy way of saying that $y_{c}[n]$ is the same equation  you get when solving for the [[Difference Equations|Zero Input Solution]], except you don't solve for the arbitrary constants. yet. Since the technique for obtaining this equation is already documented I will not go over it again.

### Obtaining $h[n]$ initial conditions
It might not be clear why we are about to do this, but trust that the next step will require the results of this step.

When we plug all our parts into the equation I gave before, we will have some arbitrary constants from $y_{c}[n]$, that we will need to solve for. We will not solve for these constants here, but rather gather the initial conditions so that we can solve for them in the next step.

To be clear, our goal here is to find $h[0]$, $h[1]$, ... , $h[N]$. $N$ is the order of the difference equation.

The procedure is as follows.
1. In your difference equation replace your output term, e.g $y[n]$ and rewrite it as $h[n]$.
2. Also replace your input term, e.g $x[n]$, with $\delta[n]$.
3. Arrange such that $h[n]$ is on one side and all other terms are on the other.
4. Plug in $n=0$ and solve for $h[0]$. Note that $h[-1]=0$ and similarly, $h[k]=0$ if $k<0$.
	1. It is also important to note that $\delta[0]=1$ and $\delta[k]=0$ where $k \ne 0$ 
5. Repeat step 4 $N$ times increasing $n$ by one each time.


### Plugging in terms and solving for constants.
Once you have found $a_{N}$, $b_{N}$, and $y_{c}[n]$ it is time to plug them in. Note that $y_{c}[n]$ should still have those arbitrary constants in it. So, plug those boys in and you should get some kind of equation with arbitrary constants that we have to solve for.

So how do we solve for these constants? It easy now since we find the initial conditions  of $h[n]$ .

1. Take plug $n=0$ into the equation. (Note that you will use $h[n]$ initial conditions we found just a moment ago here.)
2. Repeat step one increasing $n$ by 1 each time until you get to $N$.
3. You now have a system of equations so create a matrix and solve them.
4. The solution to the system of equations is your arbitrary constants.
## Convolving $h[n]$ with $x[n]$
This is the final step in getting the Zero State Response.

Recall the [[Difference Equations|Convolution Sum]]:
$$
h[k]*x[k] = \sum_{m=-\infty}^{\infty}h[m]x[k-m]
$$

To begin we simply sub in our expressions for $h[n]$ and $x[n]$. Then we will generally do something like the following:
1. Use the unit step function(s) to change the bounds on the sum.
2. Make the sum look like a geometric series (finite or infinite).
3. Use the formula for a geometric series to rewrite the sum.

### Geometric Series Formulas
You might end up with sums that look something like the following
$$
 \sum_{m=1}^{\infty}a^{m}=\frac{1}{1-a} \text{ where } a \ne 1
$$
Or
$$
 \sum_{m=K}^{B}a^{m}= \frac{a^{K}-a^{B+1}}{1-a} \text{ where } a \ne 1
$$
