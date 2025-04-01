from pytauri import Commands
from pytauri.ipc import InvokeException

commands = Commands()


@commands.command()
async def invalid_user() -> bytes:
    raise InvokeException("User not found")