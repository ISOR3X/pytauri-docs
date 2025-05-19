# Deploy

::: info

If you have used the [PyTauri template generator](getting-started.md), all files should already be configured correctly.

:::

When you have finished developing your PyTauri application, you can build it into a standalone executable. This can then
be easily distributed as an installer without having to install Rust or Python.

## Installing portable python

To make the executable standalone, a version of python needs to be bundled into the project.
Standalone Python versions can be
found [in this repository](https://github.com/astral-sh/python-build-standalone/releases). More
information on which version you need can be
found [on this website](https://gregoryszorc.com/docs/python-build-standalone/main/running.html#obtaining-distributions),
though usually you will need one of the versions below.

- `cpython-*-x86_64-pc-windows-msvc-install_only_stripped.tar.gz`
- `cpython-*-x86_64-unknown-linux-gnu-install_only_stripped.tar.gz`
- `cpython-*-aarch64-apple-darwin-install_only_stripped.tar.gz`

::: warning EXPERIMENTAL

If you are in Windows and have the [pytauri-cli](getting-started.md#pytauri-cli) installed, running
`pytauri-cli embed-python` from your project root should automatically install the standalone Python at the correct
place and even install your project Python package into it.

:::

Extract the installed Python to the following location. Make sure the layout is as follows:

::: code-group

``` [window]
├── src-tauri/pyembed/python
    ├── python.exe
    ├── python3.dll
    └── ...
```

``` [unix]
├── src-tauri/pyembed/python
    ├── bin/
    ├── include/
    ├── lib/
    └── share/
```

:::

Then add the following line to `.taurignore` to ignore it during development:

``` 
/pyembed/
```

## Installing your project into the standalone Python

::: warning INCOMPLETE DOCUMENTATION
The documentation is still a work in progress. Return at a later date!  
The old documentation for this section can be
found [here.](https://pytauri.github.io/pytauri/latest/usage/tutorial/build-standalone/#install-your-project-into-the-embedded-python-environment)
:::
