from pytauri import AppHandle, Commands

commands = Commands()


@commands.command()
async def fire_command(body: bytes) -> bytes:
    pass


@commands.command()
async def fire_other_command(body: bytes, app_handle: AppHandle) -> bytes:
    pass
