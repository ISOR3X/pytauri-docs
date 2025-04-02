![banner.png](https://pytauri.github.io/pytauri/dev/assets/banner.png)

Documentation for PyTauri, a Python wrapper for Tauri. Made with VitePress.

NOTE: This documentation is still a work-in-progress. For the latest
documentation, [click here](https://pytauri.github.io/pytauri/latest/)

### Why a complete rewrite?

1. The current documentation, while very in-depth, is quite hard to read for new developers (especially those unfamiliar
   with Rust/ Tauri).
2. The structure of the documentation is not user-friendly: Commands are explained in two
   places [here](https://pytauri.github.io/pytauri/latest/usage/tutorial/py-js-ipc/)
   and [here](https://pytauri.github.io/pytauri/latest/usage/concepts/ipc/) while there are some differences they are
   nearly identical.
3. I always found `Material for MkDocs` unappealing to look at, and I am a big fan of `vite`/ `vue`, so this was a great
   excuse to try out `vitepress`. It also allows for easy customization if desired.

### Setting up for development

1. Clone the docs
2. Run `pnpm install`, or your package manager equivalent.
3. Run `pnpm run docs:dev` to start the development server.