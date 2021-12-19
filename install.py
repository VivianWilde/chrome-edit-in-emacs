#!/usr/bin/env python3

from json import load
from shutil import copy, copyfile
from os.path import expanduser

path = load(open("./com.rohan.emacsedit.json"))["path"]
copy(
    "./com.rohan.emacsedit.json", expanduser("~/.config/chromium/NativeMessagingHosts")
)
copy("./com.rohan.emacsedit.json", expanduser("~/.config/vivaldi/NativeMessagingHosts"))
copyfile("./emacsedit", path)
