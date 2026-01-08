---
created: 2025-12-12
tags:
aliases: []
---

## Definition
A [[Bipolar Junction Transistor]] is in active mode if the base-emitter junction is forward biased, and the base collector junction is reverse biased.
## Technical Details
The conditions for forward biased are
$$
V_{be} \ge 0.7 \text{ / } V_{eb} \ge 0.7
$$
$$
V_{bc} \lt 0.7 \text{ / } V_{c b} \lt  0.7
$$
For NPN / PNP.

### Relations
In active mode we define the following relationships for an NPN BJT transistor. For a PNP simply swap the subscript order in the voltages.

$$
\beta=\frac{I_{c}}{I_{b}}=\frac{\alpha}{\alpha-1}
$$
$$
\alpha=\frac{I_{c}}{I_{e}}= \frac{\beta}{\beta+1}
$$
$$
\large I_{c}=I_{s}e^{V_{be}/V_{T}}
$$
$$
\large I_{b}=\frac{I_{s}}{\beta} e^{V_{be}/V_{T}}
$$
$$
\large I_{e}=\frac{I_{s}}{\alpha}e^{V_{be}/V_{T}}
$$
Where
- $\beta$ is known as the common-emitter current gain.
- $\alpha$ is the common-base current gain.
- $V_{T}$ is the thermal voltage, typically around $0.025$ Volts at 20 degrees C.
- $I_{s}$ is the reverse saturation current.



## See Also
[[Bipolar Junction Transistor - Saturation Mode]]
[[Bipolar Junction Transistor - Cutoff Mode]]
