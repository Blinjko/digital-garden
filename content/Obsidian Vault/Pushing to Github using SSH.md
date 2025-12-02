Create a key using the following command
`ssh-keygen -t ed25519 -C "blinjko@gmail.com"`
Copy the public key and put that one into Github

To add the private key to the agent do:
`eval "$(ssh-agent -s)"`
`ssh-add /path/to/key`