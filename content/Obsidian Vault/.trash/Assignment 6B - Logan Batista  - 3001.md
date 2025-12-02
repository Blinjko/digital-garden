# Julia Code

```
using Plots  
  
# Utility Function to make a 2D matrix into 1D vector  
function flattenMatrix(m)  
   s = size(m)  
   temp = zeros(s[1]*s[2])  
  
  
   for i in 1:s[1], j in 1:s[2]  
  
       temp[s[1]*(i-1) + j] = m[i,j]  
          
   end  
  
   return temp  
  
end  
  
# Utility Function needed to create a vector plot when you have a 2D matrix  
function generateQuiverGrid(rows, cols, width)  
  
   x = zeros(rows*cols)  
   y = zeros(rows*cols)  
  
   for i in 1:rows  
       for j in 1:cols  
  
           x[cols*(i-1) + j] = j * (width/rows)  
           y[cols*(i-1) + j] = i * (width/rows)  
       end  
   end  
  
   return (x,y)  
  
end  
  
# Function to calculate the values for problem 1  
function Calc1(Nx=64,Ny=64,width=10)  
  
   # Initialize the Voltage matrix to 0  
   V = zeros(Nx,Ny)  
  
   # Set boundry condition, to boundry is 1, all others are 0  
   V[end,:] = ones(1,Nx)  
  
   # Begin relaxtion, iteration loop  
   for iter in 1:1000  
  
       # Copy the voltage matrix as we will be modifying it.  
       temp = copy(V)  
  
       # Compute the Voltage  
       for i in 2:Nx-1, j in 2:Ny-1  
  
           temp[i,j] = (V[i+1,j] + V[i-1,j] + V[i,j+1] + V[i,j-1]) / 4  
  
       end  
  
       # Take the newly calculated values  
       V = temp  
   end  
  
  
   # Create new empty matrixes for the E-fields  
   Ex = zeros(Nx,Ny)  
   Ey = zeros(Nx,Ny)  
  
   # Compute Delta accordingly, assumes that we have a square  
   Δ = width / Nx  
  
   # Compute the E-field  
   for i in 2:Nx-1, j in 2:Ny-1  
  
       Ey[i,j] = -(V[i+1,j] - V[i-1,j]) / (2Δ)  
       Ex[i,j] = -(V[i,j+1] - V[i,j-1]) / (2Δ)  
  
   end  
  
  
   # Used for creating the vector field plot  
   x, y = generateQuiverGrid(Nx, Ny, width)  
  
   # Flatten the matrixes for the vector field plot.  
   Ex_flat = flattenMatrix(Ex)  
   Ey_flat = flattenMatrix(Ey)  
  
  
   # Different x and y vectors needed for the voltage contour plot  
   Vx = range(0,width,Nx)  
   Vy = range(0,width,Ny)  
      
  
   return (x, y, Ex_flat, Ey_flat, Vx, Vy, V)  
  
   # Good call values for a decent plot  
   # quiver(x[1:6:end], y[1:6:end], quiver=(Ex[1:6:end], Ey[1:6:end]))  
   # Calc(64,64,10,4)  
end  
  
  
# Utility Function used for the second problem  
function insideEllipse(x,y)  
   return (x^2/4 + y^2/4) < 1  
end  
  
  
function Calc2(Nx=50,Ny=50,width=10)  
  
   # Create 2D matrix, set all values to 0  
   V = zeros(Nx,Ny)  
  
   # The delta between each point, assumes that we have a square, i.e Nx=Ny  
   Δ = width / Nx  
  
   # Create a matrix of zeros to represent the RHO distribution  
   rho_dist = zeros(Nx,Ny)  
  
   # Fill the rho distribution accoridngly. This makes it so it fills the center of the matrix with -1  
   # The center that is filled has the shape of an ellipse as requested.  
   for i in 1:Nx, j in 1:Ny  
  
       if insideEllipse((i - (Ny/2))/8, (j - (Nx/2))/8)  
           rho_dist[i,j] = -1  
       end  
   end  
  
  
   # Relaxation method, iterate 1000 times  
   for iter in 1:1000  
  
       # Create a copy of our voltage matrix as we will be modifying it  
       temp = copy(V)  
  
       # Run the computation  
       for i in 2:Nx-1, j in 2:Ny-1  
           temp[i,j] = (V[i+1,j] + V[i-1,j] + V[i,j+1] + V[i,j-1]) / 4 + Δ^2 / 4 * rho_dist[i,j]  
       end  
  
       # Set our current matrix to the new one  
       V = temp  
   end  
  
  
   # Create empty matrix for the Ex and Ey fields  
   Ex = zeros(Nx,Ny)  
   Ey = zeros(Nx,Ny)  
  
  
   # Caclulate Ex and Ey accordingly  
   for i in 2:Nx-1, j in 2:Ny-1  
       Ey[i,j] = -(V[i+1,j] - V[i-1,j]) / (2Δ)  
       Ex[i,j] = -(V[i,j+1] - V[i,j-1]) / (2Δ)  
   end  
  
  
   # Utility function I made, needed to plot the vector field  
   x, y = generateQuiverGrid(Nx, Ny, width)  
  
   # The matrixes need to be collapsed into 1D so that I can plot them, so we do that here  
   Ex_flat = flattenMatrix(Ex)  
   Ey_flat = flattenMatrix(Ey)  
  
   # Different x and y vectors needed for the voltage contour plot  
   Vx = range(0,width,Nx)  
   Vy = range(0,width,Ny)  
      
   # Return the values needed to make the plots  
   return (x,y,Ex_flat, Ey_flat, Vx, Vy, V);  
  
   # Good call values for a decent plot  
   # quiver(x[1:6:end], y[1:6:end], quiver=(Ex[1:6:end], Ey[1:6:end]))  
   # Calc2(50,50,10)  
end  
  
  
# Contains example code to calculate and plot problem 1  
# NOTE: Running this function should work but it wont give results you likely expect.  
# Instead what you should do to test it is, enter the Julia REPL and do the follwing  
# Once in the REPL hit the "]" key this will bring you to the pakage manager  
# Type "add Plots" to install the plot package used here.  
# Go back to the original julia REPL and do the following:  
# > include("compute.jl") # this file  
# Then copy & pase the lines in the funciton  
   
function plotProblems()  
  
   x, y, Ex, Ey, Vx, Vy, V = Calc1(64,64,10)  
  
  
   # Create the contour plot  
   contour(Vx,Vy, V)  
  
   # Create the vector field plot  
   # Note that we are taking every 6th point so the graph is not crowded  
   quiver(x[1:6:end], y[1:6:end], quiver=(Ex[1:6:end], Ey[1:6:end]))  
  
  
   # If we want them overlapping.  
   contour(Vx,Vy, V)  
   quiver!(x[1:6:end], y[1:6:end], quiver=(Ex[1:6:end], Ey[1:6:end]))  
  
   # Problem 2  
   x, y, Ex, Ey, Vx, Vy, V = Calc2(50,50,10)  
  
   contour(Vx,Vy, V)  
  
   quiver(x[1:6:end], y[1:6:end], quiver=(Ex[1:6:end], Ey[1:6:end]))  
  
   contour(Vx,Vy, V)  
   quiver!(x[1:6:end], y[1:6:end], quiver=(Ex[1:6:end], Ey[1:6:end]))  
end
```

## Problem 1 Plots

### Voltage Contour
![[Pasted image 20251019155750.png]]

### Vector Field of E
![[Pasted image 20251019155820.png]]
### Vector Field of E over Voltage Contour
![[Pasted image 20251019155848.png]]

## Problem 2 Plots

### Voltage Contour

![[Pasted image 20251019155925.png]]
### Vector Field of E
![[Pasted image 20251019155948.png]]
### Vector Field of E over Voltage Contour
![[Pasted image 20251019160023.png]]