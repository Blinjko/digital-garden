A recount of how I setup wireguard on XimgaNAS and my Arch based Laptop.

1. Install wireguard and wireguard tools. Wireguard is built into the Linux and FreeBSD kernel as a module so there is no daemon. It uses ifconfig and ip to add routes to the interfaces it creates.
2. Create a static config file. It is not necessary but it makes loading it easier.
For the server:
```
[Interface]  
Address = 10.0.0.1/24  
PrivateKey =  <server_priv_key>
ListenPort = 51820  
  
[Peer]  
PublicKey =  <client_pub_key>
AllowedIPs = 10.0.0.2/32
```
And the Client
```
[Interface]
Address = 10.0.0.2/24
PrivateKey = <client_private_key>

[Peer]
PublicKey = <server_public_key>
AllowedIPs = 10.0.0.0/24
Endpoint = server.ip:51820
PersistentKeepalive = 25
```
The persistent keep alive is necessary if the server is behind a NAT.
Also, the name of the interface is whatever the name of the config is.

### Create Keys
Use the `wg` tool
`(umask 077; wg genkey > priv.key)` requires that umask be set as shown
`wg pubkey < priv.key > pub.key`

### Start the interface
Use the `wg-quick` tool
`sudo wg-quick up wireguard` Change `wireguard` to whatever the name of your config file is. Also, the command is the same for the client and the server.

### Verify the connection
`sudo wg show` should see something about handshakes and whatnot. Super EZ.