
## Half Wave Rectifier / Clipper
A half wave rectifier circuit is a circuit that takes in an AC signal and chops off the negative part, only leaving the positive part. It is also known as a clipper circuit since it clips out part of the waveform. The circuit takes the following form.
![[Pasted image 20250904161214.png]]
And the output and input look like.
![[Pasted image 20250904161318.png]]

### Peak Output Voltage
The peak output voltage of the half wave rectifier is equal to:
$$
V_{o}=V_{p}-V_{D}
$$
Where $V_{p}$ is the peak input voltage, and $V_{D}$ is the voltage drop across the diode.

### Peak Inverse Voltage (PIV)
Is equal to the peak value of the input.
$$
V_{PIV}=V_{p}
$$
### Average Output Voltage
If we assume that $V_{p}\gg V_{D}$ then we can just integrate over $\frac{1}{2}$ of the period of the input sinusoid and divide by the interval we integrated over.
$$
V_{ave}=\frac{\omega}{2\pi}\int_{0}^{\pi/\omega} V_{p}\sin(\omega t) -V_{D} \,dt=\frac{V_{p}}{\pi}-\frac{V_{D}}{2}
$$
### Peak Diode Current
Peak diode current can be gotten from the KVL of the circuit.
$$
I_{Dp}=\frac{V_{p}-V_{D}}{R}
$$

## Full bridge rectifier
Circuit Diagram and output pic
![[Pasted image 20250910070604.png]]
![[Pasted image 20250910070639.png]]
### Peak Output Voltage
Since we have 2 diodes effectively in series, we lose $2V_{D}$ voltage on the output.
$$
V_{o}=V_{p}-2V_{D}
$$

### Peak Inverse Voltage
$$
PIV=V_{p}-V_{D}
$$
### Average Output Voltage
Simply integrate over half of a period and double the value, taking into account the diode voltage drop.
$$
V_{ave}=\frac{\omega}{\pi}\int_{0}^{\pi/\omega} V_{p}\sin(\omega t) -2V_{D} \,dt=\frac{2V_{p}}{\pi}-V_{D}
$$
### Peak Diode Current
Same as before, we divide peak output voltage over the load resistance.
$$
I_{pD}=\frac{V_{p}-2V_{D}}{R}
$$
## Rectifier with filter capacitor / peak rectifier
Since the output of the half wave and full bridge rectifier is rather bumpy and not smooth, it makes it not that good to use as a DC power source. To mediate this we can add a filter capacitor across the load, which essentially filters out all the high frequency components leaving us with a more steady DC like output.
![[Pasted image 20250910071027.png]]Above illustrates a half wave rectifier, but it looks very similar for the full wave.

As illustrated in the picture, $V_{r}$ is known as the voltage ripple, and is defined as.
$$
V_{r}=V_{max}-V_{min}
$$
$\Delta t$ is the interval at which the diodes conduct. Note that it is much shorter than usual because the capacitor is holding the voltage on the output higher than before, so it takes longer for the sinusoid to reach a point where the voltage across the diode is at least 0.7 volts.

### Calculating the Average Output Voltage
Looking at the picture we can see that the output voltage is equal to the voltage across the capacitor. So to find the average amount here we simply integrate the function that describes this over one period of the sinusoid and divide by that period. We know how to get the voltage across the capacitor, we simply take a KCL at the output node and solve the differential equation with the initial condition being the peak voltage of the sinusoid.

The only thing we really have to be careful about is the period in which we integrate over since the exponential decay of the capacitor stops when the diodes start conducting again. Looking at the above picture we can see that if we integrate from $t_{1}$ to $t_{1}+T$ then we will have covered the whole period. Note that we have to split the integral like so.
$$
\frac{1}{T}\left[ \int_{t_{1}}^{t_{2}}\sin(\omega t)-V_{D} \, dt+\int_{t_{2}}^{t_{1}+T}V_{c}(t) \, dt \right]
$$
The first part describes where the output is basically the sinusoid input, and the second half describes the output based on the capactitors exponential decay.

### Output Voltage

The following calculations assume an ideal diode and the half-wave rectifier circuit.

If $V_{r}$ is small then we can generally just assume that the ouput of the rectifier is roughly equal to $V_{p}$, which is the peak output voltage seen. For a more accurate version though, we can follow the following logic.

Let us first take an average of the extreme values that $V_{o}$ will take on.
$$
V_{o}=V_{p}-\frac{1}{2}V_{r}
$$
We can then use this to derive expressions involving $V_{r}$  along with expressions for the peak and average values of the diode current.

When the diode is off, (non conduction) $V_{o}$ takes on the form.
$$
V_{o}=V_{p}e^{-t/RC}
$$
When the discharge interval ends we roughly have.
$$
V_{p}-V_{r} \approx V_{p}e^{-T/RC}
$$
Since $T\gg RC$ we can simply this to:
$$
V_{p}e^{-T/RC} \approx 1-\frac{T}{RC} \approx V_{p}-V_{r}
$$
Which then can be used to get.
$$
V_{r} \approx \frac{V_{p}T}{RC} \approx V_{p} \frac{1}{fCR}
$$
So to have a small $V_{r}$ we will want to choose a capacitance that gives us a large $RC$.

I cant be bothered to finish the rest of this approximation madness since it doesn't seem to relevant.

### Calculating the Ripple
We can solve the differential equation to get the equation for the voltage across the capacitor.
$$
V_{o}=V_{p}e^{-t/RC}
$$
We know that:
$$
V_{r}=V_{p}-V_{min}
$$
What is $V_{min}$? Well it is the value of the voltage across the capacitor after $T-\Delta t$ has passed. Since $\Delta t$ is rather small we just say:
$$
V_{min}=V_{p}e^{-T/RC}
$$
We then can approximate the exponential using it's taylor series since $RC\gg T$ to get:
$$
V_{min}=V_{p}\left[ 1-\frac{T}{RC} \right]
$$
If we substitute this back into the original expression we get.
$V_{r}\approx V_{p}-V_{P}\left[ 1-\frac{T}{RC} \right]=\frac{V_{p}T}{RC}=\frac{V_{p}}{fRC}$
Which will allow us to approximate the ripple voltage.
