chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
        sendResponse({farewell: "goodbye"});

        let bar = document.querySelector(".bar");
        let bar__content = bar.querySelector(".bar__content");
        let player = bar__content.querySelector(".deco-player-controls");

        bar__content.style.background = "red";
        player.style.background = "none";
    }
);