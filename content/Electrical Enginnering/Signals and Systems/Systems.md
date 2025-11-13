A system takes in input signal(s) and modifies them in some manner to produce an output signal(s).

There are few different kinds of systems with different properties.

## Linear Systems
In order for a system to be linear it must satisfy 2 criteria.
1. Superposition
2. Scaling, aka Homogeneity

### Superposition
The superposition principle says that the output of a linear system is equal to the sum of the effects that each input to the system creates.

For example, if we have inputs $x_{1}(t) \text{ and } x_{2}(t)$, each of which generate the following outputs, $y_{1}(t) \text{ and } y_{2}(t)$ respectively, then the overall output of the system is given by $y(t)=y_{1}(t)+y_{2}(t)$ due to superposition.

### Scaling
The scaling property states that if the input to the system is scaled by some constant, then the output effect is also scaled by that same constant. So if we have the system:
$$
y(t)=x(t)
$$
And we scale $x(t)$ by a constant $k$, and the system is linear, the output $y(t)$ also gets scaled by the same constant $k$, thus yielding.
$$
ky(t)=kx(t)
$$

### Zero Input Response
The zero input response of a linear system is the response the system has when it's input is zero. When this is true, the input contributes nothing to the output, thus the output is given solely by the **initial conditions** of the system.

### Zero State Response
The zero state response of a linear system is the response the system has when the initial conditions are set to 0. When this is the case, the output of the system is given solely by the **input**.

### Full Response of Linear System
The full response is given by the sum of the *zero state response* and the *zero input response*.
$$
\text{ full reponse}=\text{zero state response } + \text{zero input response}
$$
Note the similarity here to differential equations.

When the input is 0, and the initial conditions are set to 0 as well, the output of the system is *always 0* for any linear system.

## Time Invariant Systems
A system is time invariant if the system always gives the same outputs no matter it's place in time. Examples of this could be an amplifier circuit, if you run it now with a song, and then you play the same song later, you would expect the same results, because the amplifier doesn't change its operation based on the current time.

The more mathematical definition is, suppose we have a system with the input $x(t)$ and output $y(t)$. For a system to be time invariant, it requires that if we shift $x(t)$ in time, like $x(t-T)$, the output $y(t)$ also gets shifted the same amount in time giving $y(t-T)$.

An example of a time *variant* system is:
$$
y(t)=tx(t)
$$
It is easy to see here because the factor of $t$ bounds us to the time, thus the results directly depends on the current time, thus if we shift the input $x(t-2)$, then the shifted output signal should be the same as the original non-shifted signal, but we can show this is not true.

At $t=2$ the shifted system is:
$$
y(0)=2*x(0)
$$
A $t=0$ the original system should have the same value.
$$
y(0)=0*x(0)
$$
But it is not necessarily true that $0=2x(0)$, so the system is not time invariant.

## Causal and Non-causal systems

### Causal
A causal system only depends on the past and current inputs.

### Non-Causal
A non-causal system is a system that depends on future inputs. 

Ex:
$$
y(t)=x(t)+x(t+2)
$$

Non-causal systems cannot be realized in real time, because we cannot predict the future yet. They can be realized when the dimension is not time however, like space. Non-causal systems also can function if we have the input data saved.

A non causal system can be made into a causal system with a certain time delay. For example, if someone asks you what the stock price is a year from now, you obviously cant give them the answer now, but if you wait a year you can, or you can develop a method to somewhat accurately predict its price.


## Instantaneous and Dynamic Systems
An instantaneous system only depends on the current inputs, and has no *memory*. They are also known as *memory-less* systems.

A dynamic system can depend on current and past values, and thus has *memory*.