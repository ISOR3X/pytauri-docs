import {pyInvoke} from "tauri-plugin-pytauri-api";

interface User {
    name: string;
    email: string;
}

const user: User = {name: "John", email: "john@example.com"};

const output = await pyInvoke<string[]>("get_user_roles", user);