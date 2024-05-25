chrome.runtime.onInstalled.addListener(function () {
  console.log("I have awoken.");
  return connect()
});

function connect() {
  console.log("connecting")
  let hostName = "com.vivien.emacsedit";
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

  return url
}


chrome.browserAction.onClicked.addListener((tab) => {
  console.log("clicked")
  console.log(tab)
  var url = processUrl(tab.url)
  console.log(url)
  chrome.runtime.sendNativeMessage("com.vivien.emacsedit", { target: url })

  // chrome.tabs.query (
  //   {'active': true,
  //    'windowId': chrome.windows.WINDOW_ID_CURRENT},
  //   (tabs) => {
  //       var url = processUrl(tabs[0].url);
  //       console.log(url);
  //       chrome.runtime.sendNativeMessage("com.vivien.emacsedit", { target: url })
  //     })
})
