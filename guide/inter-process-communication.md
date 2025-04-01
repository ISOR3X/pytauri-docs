# Calling Python from the Frontend

PyTauri implements an IPC API similar to that of Tauri. For more information on the different IPC mechanics, you can
read the Tauri documentation on calling [Rust from the Frontend](https://tauri.app/develop/calling-rust/)

## Commands
::: warning TODO
These things are currently missing compared to the existing docs:
1. Alternate Javascript import (window.\_\_TAURI__.pytauri)
2. More options for creating the app/ invoke_handler

Optionally we may have to split the IPC mechanics into different pages depending on their length. 
:::

Commands can be registered using the command handler decorator as seen below.

<<< @/snippets/commands/default.py

To handle IPC correctly, the function follows strict rules:
1. They must be asynchronous
2. There must be a typed `body` argument of type `bytes` (more on this later.)
3. An optional typed `app_handle` argument of type `AppHandle` can be used to get access to the current app handle instance.
4. The command must return type `bytes`

### Deserialization
Sending raw bytes is useful for images or files, however in most cases we want more readable information.
Under the hood PyTauri uses [Pydantic](https://docs.pydantic.dev/latest/) for deserializing the body of a command.
This means that any `RootmModel` or `BaseModel` from Pydantic can also be used for typing either the body or return variable.

<<< @/snippets/commands/pydantic.py

### Registering the commands
In order to call the commands from the frontend, an async runtime is required.
[anyio.from_thread.start_blocking_portal](https://anyio.readthedocs.io/en/stable/api.html#anyio.from_thread.start_blocking_portal) is
used as an example, but other equivalent functions can be used.

<<< @/snippets/commands/blocking_portal.py{12}

Note that `portal` should not be closed while the app is running. 

### Calling from frontend
PyTauri has two functions for calling a command: `pyInvoke` and `rawPyInvoke`.
`rawPyInvoke` allows sending and receiving of binary data.

<<< @/snippets/commands/call.ts

### Returning errors to the frontend
Any [InvokeException] raised in a command will automatically return the function with the supplied error message.

<<< @/snippets/commands/exception.py

## Channels

## Events

### Emitters

### Listeners

# Calling the Frontend from Python
