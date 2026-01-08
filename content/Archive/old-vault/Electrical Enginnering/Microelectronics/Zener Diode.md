A zener diode is a special type of diode designed to operate in reverse bias. They are manufactured to have a specific break down voltage, this is known as the zener voltage, $V_{Z}$.

The zener diode has the symbol and IV graph below.
![[Pasted image 20250911161503.png]]

We see that the IV characteristic in the breakdown region is rather linear, we use this to our advantage and linear the IV characteristic.

This yields the simple linear equation:
$$
V_{Z}=r_{Z}I+V_{Z_{0}}
$$
Which is really only viable in the vicinity of $Q$, the operating point. These properties are usually provided, or enough is provided to determine the rest.

Zener diodes are commonly used for voltage references in practice. They also can be used to make a simple shunt voltage regulator, but no one does this in practice.

## Kneel Current and Voltage
The kneel current, $I_{zk}$ is the current at which the diode starts it's breakdown. It can be seen on the graph above. The corresponding voltage is the kneel voltage, $V_{zk}$.  If the current through the diode is not above the kneel current, then the diode is not "on" and is not a valid voltage reference.  Same goes about the voltage and kneel voltage.