from pydantic import BaseModel, RootModel
from pytauri import AppHandle, Commands

commands = Commands()

class User(BaseModel):
    name: str
    email: str

Roles = RootModel[list[str]]


@commands.command()
async def get_user_roles(body: User) -> Roles:
    pass

