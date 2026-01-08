
## Differential Forms
$$
\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}
$$
$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
$$
$$
\nabla \cdot \vec{B} = 0
$$
$$
\nabla \times \vec{B} = \mu_{o}\vec{J} + \mu_{o}\epsilon_{0} \frac{\partial \vec{E}}{\partial t}
$$
### In linear media
$$
\vec{B} = \mu \vec{H}
$$
$$
\vec{D} = \epsilon \vec{E}
$$
$$
\nabla \cdot \vec{D} = \rho_{free}
$$
$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t}
$$
$$
\nabla \cdot \vec{B} = 0
$$
$$
\nabla \times \vec{H} = \vec{J}_{free} + \frac{\partial \vec{D}}{\partial t}
$$
### Phasor Forms
$$
\nabla \cdot \vec{D} = \rho_{f} \implies \nabla \cdot \tilde{D} = \tilde{\rho}_{e}
$$
$$
\nabla \cdot \vec{H} = 0 \implies \nabla \cdot \tilde{H} = 0
$$
$$
\nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \implies \nabla \times \vec{E} = -j\omega \tilde{B} = -j\omega \mu \tilde{H}
$$
$$
\nabla \times \vec{H} = \vec{J}_{f}+ \frac{\partial \vec{D}}{\partial t} \implies \nabla \times \tilde{H} = \tilde{J}_{f}+ j\omega \tilde{D}
$$


## Integral Forms
### Gauss
$$
\oint \vec{D} \cdot d\vec{S} = Q_{\text{free enc}}
$$
### Faraday
$$
\oint \vec{E} \cdot d\vec{L} = -\frac{\partial}{\partial t} \int \vec{B} \cdot d\vec{S} = -\frac{\partial \Phi_{B}}{\partial t} =V_{ind}
$$
### Amperes
$$
\oint \vec{H} \cdot d\vec{L} = I_{\text{free enc}} + \frac{\partial}{\partial t} \int \vec{D} \cdot d\vec{S}
$$
