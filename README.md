# chrome-edit-in-emacs
A ridiculously simple extension that allows you to open URLs in Emacs (using w3m) directly from your browser

If the page you're on is a link to a file on Github, such as `https://github.com/Rohan-Goyal/chrome-edit-in-emacs/edit/main/README.md`, it automatically gets the raw URL and opens it in the appropriate Emacs mode.

This can trivially be modified to call other editors or functions, etc.

## Setup
- Clone this repo or download it
- Upload it to Chrome as an unpacked extension
- In `com.rohan.emacsedit.json`, define the path option to be the full path where you want to store the native executable.
- Run `python install.py`

## Credits
- Spacemacs logo taken from https://github.com/syl20bnr/spacemacs
- Uses Python nativemessaging library: https://pypi.org/project/nativemessaging/
