
## Regulators
Have the form:
![[Pasted image 20250908081210.png]]

This works as a regulator because the diodes have a voltage threshold that must be passed before they can start conducting. Also note that diodes follow the exponential curve, so, generally, for small changes in voltage there is large current changes. Or put differently the current through the diode can change significantly and the voltage can stay relatively stable. This allows us to connect loads that draw reasonable current and still maintain a relatively stable voltage. This is known as *load regulation*. Regulator circuits also help when the line voltage is not super stable and is varying. If we did out the work we would see that large changes in the voltage source only result in relatively small (millivolt) changes in the output voltage. This is known as *line regulation*.

To solve regulator circuits we can use the exponential model, but it is rather cumbersome. We can model the change in voltage across the diode with the derived model:
$$
V_{2}-V_{1}=\Delta V_{o}=V_{T}\ln\left( \frac{I_{2}}{I_{1}} \right)
$$
Often we can sub out $I_{1}$ with something in terms of $I_{2}$ and then iterate if desired.
We can also use the small signal model if the changes in the diode voltage are small enough.

We could also use a zener diode based circuits which kind of operate like the small signal model, but in reverse bias after the zener voltage. The zener diodes are also nicer because we can use less diodes and get more options for output regulated voltage values (since we don't have to put many in series).

A zener based regulator circuit looks like:
![[Pasted image 20250908082103.png]]
With shunt based regulator circuits we have to be careful of the power dissipated through the diode. In practice these types of circuits are not used for regulators.