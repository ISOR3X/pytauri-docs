# Getting started

Currently, there are three ways of getting started with PyTauri:

1. PyTauri template generator:
2. Precompiled wheel: Develop with PyTauri without having to install Rust.
3. Tauri plugin: Use PyTauri as a plugin for Tauri.
4. Starting templates: Quickly start with an opinionated PyTauri project

Precompiled wheels are the best choice if you just want to use PyTauri for its IPC mechanisms. If you need a bit more
customizability, using PyTauri as a Tauri plugin allows using Tauri's complete API and Rust for your performance needs.
PyO3 could even be used for more interaction between Rust and Python.  
The starting templates are a great choice if you need something more opinionated.

## Template generator <Badge type="warning" text="experimental" />

The template generator is the recommended way to get started with a new PyTauri project, even if it is still in
development.
Currently, it supports Vue and React projects with PyTauri as a Tauri plugin.

To get started, use the command below. Make sure [uv](https://docs.astral.sh/uv/) and [pnpm](https://pnpm.io/) are
installed.

```bash
uvx copier copy https://github.com/pytauri/create-pytauri .
```

## PyTauri CLI <Badge type="warning" text="experimental" />

The PyTauri CLI includes several commands for controlling your PyTauri project, including creating a new project.

### Installation

The CLI tool can be installed by using the command below.

```bash
uv tool install git+https://github.com/ISOR3X/pytauri-cli
```

Installation can be confirmed by typing `pytauri-cli` in the terminal. This will show all available commands.
If installed successfully, `pytauri-cli create` will start the template generator for a new project.

## Manual installation

### Precompiled wheel

While PyTauri is build on top of Tauri, a precompiled wheel is supplied to allow using PyTauri without having to install
Rust.

::: warning INCOMPLETE DOCUMENTATION
The documentation is still a work in progress. Return at a later date!  
The old documentation for this section can be found [here.](https://pytauri.github.io/pytauri/dev/usage/pytauri-wheel/)
:::

### Tauri plugin

If you also want to use Rust during development, you can set up a Tauri project and install the PyTauri plugin to use
both Python and Rust in your application.

#### Prerequisites

- [uv](https://docs.astral.sh/uv/)
- [create-tauri-app](https://github.com/tauri-apps/create-tauri-app)
- [tauri-cli](https://v2.tauri.app/reference/cli/)

#### Setup wizard

PyTauri is a wrapper for Tauri, hence Tauri has to be installed first. Tauri can be installed with:

::: code-group

```sh [npm]
$ npm create tauri-app@latest
```

:::

::: info PACKAGE MANAGERS
While npm is used as a package manager for setting up the Tauri app, others can be used.
:::

This will guide you through installing and setting up a Tauri app:

<<< @/snippets/getting_started/init.ansi

After `create-tauri-app` has complete you can navigate into your project’s folder, install dependencies, then use the
[Tauri CLI](https://tauri.app/reference/cli/) to start the development server as seen above.

## Starting templates

- **Vue**
  If you plan on using [Vue](https://vuejs.org/) as a frontend framework, you can use
  this [pytauri-vue-starter](https://github.com/ISOR3X/pytauri-vue-starter) to get started immediately with development.
  The repository also has several branches with examples.
  Currently set up for PyTauri version `0.5.0` 


