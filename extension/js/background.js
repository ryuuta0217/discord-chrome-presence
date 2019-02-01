var outFocusTimeOut = 180;

function updatePresence(tab) {
  if (tab) {
    var url = new URL(tab.url);
    var data = {
      action: "set",
      url: tab.url,
      details: url.hostname,
      state: tab.title,
      smallText: tab.url,
      largeText: tab.title
    };
  } else {
    var data = {
      action: "clear"
    };
  }
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/",
    "method": "POST",
    "headers": {
      "content-type": "application/json"
    },
    "processData": false,
    "data": JSON.stringify(data)
  }
  $.ajax(settings);
}

var lastCheckedTabId;
var lastCheckedTabName;
var isEnabled = true;
var outFocusCount = 0;

setInterval(function () {
  chrome.windows.getLastFocused({
    populate: true
  }, function (window) {
    if(!window.focused) {
      if(outFocusCount != outFocusTimeOut) {
        outFocusCount++;
      } else {
        if(isEnabled) updatePresence(null);
        isEnabled = false;
      }
    }

    if (window.tabs) {
      for (let tab of window.tabs) {
        if (tab.highlighted) {
          if (!isEnabled || (tab.id == lastCheckedTabId && tab.title != lastCheckedTabName) || tab.id != lastCheckedTabId) {
            if (isEnabled) {
              updatePresence(tab);
              lastCheckedTabName = tab.title;
              lastCheckedTabId = tab.id;
              if(outFocusCount == outFocusTimeOut) outFocusCount = 0;
            } else {
              if (window.focused) {
                isEnabled = true;
                updatePresence(tab);
                lastCheckedTabName = tab.title;
                lastCheckedTabId = tab.id;
                outFocusCount = 0;
              }
            }
          }
          break;
        }
      }
    }
  });
}, 1000);