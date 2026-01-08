[Gazebo](https://gazebosim.org/home) is a simulator for robotics and can be coupled with ROS. The only linux it is officially supported on is Ubuntu, and unfortunately that is not what I use so I had to find another method to use it. Thus I figured out I could use Distrobox to essentially run an Ubuntu container ontop of my current Linux. The nice part is Distrobox also passes through the hardware so I could actually use my real GPU.

Least to say I had difficulties getting things going, but after a bit I figured out that gazebo GUI uses the network to communicate and, my firewall was blocking this traffic so it was just showing a black screen. Nonetheless, open ports 
- 10317/udp
- 10318/udp
In your firewall and it should help.

As for how to install gazebo normally, just refer to their getting started documentation. Since I used distrobox you can just follow the instructions for ubuntu :D.