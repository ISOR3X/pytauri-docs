# Debugging PyTauri

## VS Code

For Python,
see [this link](https://code.visualstudio.com/docs/python/debugging#_debugging-by-attaching-over-a-network-connection).
JavaScript can be debugged by running `npm run tauri dev` in debug mode.

## JetBrains IDEs

### Webstorm - for frontend development

1. Add a new run configuration -> npm
2. Command: `run`, Scripts: `tauri`, Arguments: `dev`
3. Add a new environment variable named `VIRTUAL_ENV`. Its value should be an absolute path pointing to the virtual
   environment, e.g. `C:\Users\...\...\pytauri-project\.venv`.

### PyCharm - for python development

_Requires PyCharm professional_

1. Set the python interpreter (should be the `python.exe` in  `.venv\Scripts`).
2. Open a terminal, make sure the virtual environment is activated.
3. Install pydevd for PyCharm.

```
uv pip install pydevd-pycharm
```

::: info
The specific version of `pydevd-pycharm` depends on your PyCharm version. Using the latest version might result in a
warning but should generally work.

:::

4. Add the following code to the top of `__init__.py`

```python
import pydevd_pycharm

pydevd_pycharm.settrace('localhost', port=5678, stdoutToServer=True, stderrToServer=True) 
```

5. Add a new run configuration -> Python Debug Server
6. IDE host name: `localhost`, Port: `5678`
7. Run the Python Debug Server before starting the npm server.  
   You can now set breakpoints as you usually would to debug your python code.