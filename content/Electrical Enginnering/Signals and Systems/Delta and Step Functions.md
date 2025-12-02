## The Unit Step Function
Has the graph of:
![[Pasted image 20250829082732.png]]
And is formally defined as:
$$
u(t) = \begin{cases} 
          0 & t\lt 0 \\
          1 & t\ge 0 \\
       \end{cases}
$$
We can scale the function by multiplying it by something.
$$
Cu(t) = \begin{cases} 
          0 & t\lt 0 \\
          C & t\ge 0 \\
       \end{cases}
$$
Similarly we can shift function to the left by adding a value to $t$.
$$
Cu(t+T) = \begin{cases} 
          0 & t+T\lt 0 \\
          C & t+T\ge 0 \\
       \end{cases}
$$
Or to the right by subtracting a value from $t$.
$$
Cu(t-T) = \begin{cases} 
          0 & t-T\lt 0 \\
          C & t-T\ge 0 \\
       \end{cases}
$$
A step function is also nice way to control when we want a function to give its output. If we multiply a function by the unit step, then it is only valid when the step function is active. We similarly can subtract a negative step function to bring the function back to zero. This technique of constraining a function on an interval turns out to be quite useful sometimes.
## The Delta Function
[Desmos Link](https://www.desmos.com/calculator/si83byyyrx) Essentially it is an infinite spike at zero, and zero everywhere else. It is defined as:
$$
\delta(t)= \begin{cases}
 \infty & t=0  \\
 0 & t\ne 0 \\
\end{cases}
$$
$$
\int_{-\infty}^{\infty} \delta(t) \, dt = 1 
$$


It is hard to imagine the area of a "spike" being an actual numeric value, but if you look at the Desmos example you can see how this makes sense. We can compute the area of a rectangle centered at zero, and if we make it a limit where the height approaches infinity and the base approaches zero we can see that all really is happening is we are trading our width for our height, so the area always stays at 1. As this limit approaches infinity we get the delta function.

The delta function can be shifted the same way as the unit step can. Adding a value $T$ moves it to the left (negative x-axis) and subtracting a value of $T$ moves it to the right (positive x-axis).

Leftward Shift:
$$
\delta(t+T)= \begin{cases}
 \infty & t+T=0  \\
 0 & t\ne 0 \\
\end{cases}
$$
Rightward Shift:
$$
\delta(t-T)= \begin{cases}
 \infty & t-T=0  \\
 0 & t\ne 0 \\
\end{cases}
$$

### A Useful Property of the Delta Function
$$
\int \delta(t-T)f(t)dt = f(T) 
$$
Essentially we can use the delta function to sample another function at a particular point in time, mathematically.