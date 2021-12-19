﻿chrome.runtime.onInstalled.addListener(function () {
  console.log("I have awoken.");
  return connect()
});

function connect() {
  let hostName = "com.rohan.emacsedit";
  var port = chrome.runtime.connectNative(hostName);
  return port
}

function processUrl(url) {
  if (url.includes("github") && url.includes("blob")) {
    return url
      .replace("github.com", "raw.githubusercontent.com")
      .replace("blob/", "");
  }
  if (url.includes("gitlab") && url.includes("blob")) {
    return url.replace("blob", "raw");
  }

  return url;
}

chrome.browserAction.onClicked.addListener(function (tab) {
  let url = processUrl(tab.url);
  console.log(url);
  port=connect()
  port.postMessage({target : url})
  chrome.runtime.sendNativeMessage("com.rohan.emacsedit", { target: url });
});
