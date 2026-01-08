A transfer function of a [[System]],  $H(s)$, is usually defined as
$$
H(s) = \frac{\text{system output}}{\text{system input}}
$$
Note that we use the variable $s$ because we are in the [[Laplace Transform|S domain]].

Another definition, in the context of [[Differential Equations]] is
$$
H(s)=\frac{Y(s)}{X(s)}=\frac{P(s)}{Q(s)}
$$
The inverse [[Laplace Transform]] of $H(s)$ is known as the [[Impulse Response]] of the [[System]].

We can plot a the transfer function by hand using [[Bode Plots]] or using software like Julia or MATLAB. Also, since $H(s)$ is in the $s$ domain, we can see how it treats different frequencies of input by looking at these plots.  And, in general, we can see the behavior of a [[System]] just by observing the transfer function. 

