# Channels

## Starting a channel

Channels are set up using a [Command](./commands).

## Closing a channel

Channels have no explicit `close` function. Instead, they are automatically closed when the channels go out of scope
because of Rust's ownership model. In practice this means that channels can be closed by just unassigning the variable
that owns it in both the front- and backend. Note that simply unassigning one end will not raise an exception in the other.

