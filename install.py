#!/usr/bin/env python3

from json import load
from shutil import copy, copyfile
from os.path import expanduser

path = load(open("./com.vivien.emacsedit.json"))["path"]
copy(
    "./com.vivien.emacsedit.json", expanduser("~/.config/chromium/NativeMessagingHosts")
)
# copy("./com.vivien.emacsedit.json", expanduser("~/.config/vivaldi/NativeMessagingHosts"))
# copyfile("./emacsedit", path)

copy("./com.vivien.emacsedit.json", expanduser("~/.mozilla/native-messaging-hosts"))
# copyfile("./emacsedit", path)
