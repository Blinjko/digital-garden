[Reference](https://docs.sciml.ai/DiffEqDocs/stable/)

### Packages needed
1. SciMLBase
2. OrdinaryDiffEq
3. Plots

### Simple Setup
```
using SciMLBase
using OrdinaryDiffEq
using Plots

# Define the equation
function myEq!(du,u,p,t)
	du[1] = u[1]   + 2*u[2]
	du[2] = 3*u[1] + 2*u[2]
end

# initial conditions
u0 = [1.0,0.0,0.0]

# independent variable range
tspan = (0,100.0)

# create the problem
prob = ODEProblem(myEq!,u0,tspan)

# solve the problem
sol  = solve(prob)

# plot the solution, idxs -> the indexes of the data i.e # of dimensions
plot(sol, idxs=(1,2))

```
