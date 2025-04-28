# Inter-process communication

PyTauri implements an IPC API similar to that of Tauri. For more information on the different IPC mechanics, you can
read the Tauri documentation on calling [Rust from the Frontend](https://tauri.app/develop/calling-rust/)

There are three ways of communicating between the frontend and backend:

1. Commands: One-way communication (frontend to backend) with type safety.
2. Channels: Two-way communication designed for fast and delivering ordered data.
3. Events: Simple communication system that only supports JSON payloads. Works bidirectionally.

Additionally, there is `WebviewWindow.eval` which can be used to directly execute JavaScript from Python. This, however,
is unrecommended as it has no security and generally has no use case above the prior mentioned systems.

## Commands

Commands can be compared to the `fetch` API of browsers. The primary API, `pyInvoke` is used similarly to Tauri's
native [`invoke`](https://tauri.app/develop/calling-rust/#commands) API.

## Channels

Channels work similarly to websockets. They must be initialized first through a command but afterward can send data at
high speeds.

## Events

The event system uses `Emitters` and `Listeners` which are available in both the front- and backend to pass data between
the two.

