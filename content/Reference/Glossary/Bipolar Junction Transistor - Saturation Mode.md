---
created: 2025-12-12
tags:
aliases: []
---

## Definition
When a [[Bipolar Junction Transistor]] is in saturation mode, all the junctions are forward biased and the device is conducting.

## Technical Details
To be in saturation mode, all junctions need to be forward biased. So for an NPN / PNP we have
$$
V_{be} \ge 0.7 \text{ / } V_{eb} \ge 0.7
$$
and
$$
V_{bc} \ge 0.7 \text{ / } V_{cb} \ge 0.7
$$

### Forced $\beta$
We define forced $\beta$ as
$$
\beta_{forced}=\frac{I_{c}}{I_{b}}
$$
which is the same definition as in [[Bipolar Junction Transistor - Active Mode|Active Mode]], except that we just call it forced when the transistor is in saturation. 

### Assumptions
If you know the device is in active mode the we can make an assumption about $V_{ce}$ or $V_{ec}$ voltage.
We can assume that
$$
V_{ce} = 0.3 \text{ / } V_{ec} = 0.3
$$
and solve using normal circuit methods.

## See Also
[[Bipolar Junction Transistor - Active Mode]]
[[Bipolar Junction Transistor - Cutoff Mode]]