## Constant $C$
Results in vertical shift of the whole magnitude plot with a value: $20\log_{10}(C)$.

If $C>0$ then there is no effect on the phase plot. If $C<0$ then the phase plot starts at $\pi$.

## Integrator $\frac{1}{s}$ and  Differentiator $s$ 
For magnitude these result in a line with a $\mp 20 \frac{dB}{dec}$ slope respectively. Said line passes through the origin, $\omega=1$. Note that the line does not "begin" or "end", if it is the only component it would simply result in a plot with a line that goes through $\omega=1$. Never flatting out anywhere.

For phase these result in a $\mp \frac{\pi}{2}$ phase contribution, which essentially acts as a vertical offset on the phase graph.

## First Order Pole / Zero
Have the form:
$$
\frac{1}{\frac{s}{\omega_{c}}+1}
$$
and
$$
\frac{s}{\omega_{c}}+1
$$
respectively.

For magnitude the contribution is $\mp20\frac{dB}{dec}$ which occurs at $\omega=\omega_{c}$. Note that the line is flat until $\omega_{c}$ then it starts changing.

For phase the contribution is $\mp \frac{\pi}{2} \frac{rad}{dec}$ respectively. Recall that for phase we begin one decade before $\omega_{c}$ and stop one decade after $\omega_{c}$. 

## Second Order Pole / Zero
Have the form:
$$
\frac{1}{\left( \frac{s}{\omega_{n}} \right)^{2}+\frac{2\zeta s}{\omega_{n}}+1}
$$
and
$$
\left( \frac{s}{\omega_{n}} \right)^{2}+\frac{2\zeta s}{\omega_{n}}+1
$$
respectively.

The magnitude contribution is $\mp 40 \frac{dB}{dec}$ respectively at $\omega=\omega_{n}$. 

The phase contribution is $\mp \pi$ respectively. It begins at 1 decade before $\omega_{n}$ and ends one decade after $\omega_{n}$.

### Comment on $\zeta$
$\zeta$ is known as the damping coefficient, and it has an effect on the actual look of the plot, though we often don't draw it in the bode plot.

- For $\zeta > 1$ causes smoothing on the magnitude plot, i.e less sharp transition at $\omega_{n}$. In the phase plot it results in a more gradual phase transition.
- For $\zeta < 1$ causes a spike on the magnitude plot at $\omega_{n}$. If it's a pole this spike points up, if it's a zero it points down. For phase a small $\zeta$ results in a sharper phase transition, making it look more like a step function.