# Concurrency

## Asynchronous app loop

::: warning INCOMPLETE DOCUMENTATION
Write some information here about starting background tasks in a different loop and blocking processes

:::

## Multiprocessing

When building as a standalone app, PyTauri will automatically configure the following to support the use
of [multiprocessing](https://docs.python.org/3/library/multiprocessing.html):

1. Set `sys.frozen` to `True`
2. Call [multiprocessing.set_start_method](https://docs.python.org/3/library/multiprocessing.html#multiprocessing.set_start_method) with
    - windows: `spawn`
    - unix: `fork`
3. Call [multiprocessing.set_executable](https://docs.python.org/3/library/multiprocessing.html#multiprocessing.set_executable)
with `std::env::current_exe()`



You do manually need to call [multiprocessing.freeze_support](https://docs.python.org/3/library/multiprocessing.html#multiprocessing.freeze_support)
in `__main__.py` (or in the `if __name__ == "__main__":` block) to prevent an endless spawn loop of your application process.

For more information about this, see [pyinstaller multi-processing](https://pyinstaller.org/en/v6.11.1/common-issues-and-pitfalls.html#multi-processing>).