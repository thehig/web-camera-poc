To test without a webcam, start chrome with the `--use-fake-device-for-media-stream` parameter

* Exit any running-instance of Chrome.
* Right click on your "Chrome" shortcut.
* Choose properties.
* At the end of your "Target:" line add the command line flags
* With that example flag, it should look like: "C:/.../chrome.exe" --disable-gpu-vsync
* Launch Chrome like normal with the shortcut.