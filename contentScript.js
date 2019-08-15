window.onload = function() {
    let bar = document.querySelector(".bar");
    let bar__content = bar.querySelector(".bar__content");
    let player = bar__content.querySelector(".deco-player-controls");
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        alert("success");
        bar__content.style.background = "red";
        player.style.background = "none";
    }
);

//let port = chrome.runtime.connect();

// window.onload = function() {
//     let bar = document.querySelector(".bar");
//     let bar__content = bar.querySelector(".bar__content");
//     let player = bar__content.querySelector(".deco-player-controls");

//     bar__content.style.background = "red";
//     player.style.background = "none";

//     window.addEventListener("message", function(event) {
//         alert("Recievved");
//       // We only accept messages from ourselves
//       if (event.source != window)
//         return;

//       if (event.data.type && (event.data.type == "FROM_PAGE")) {
//         console.log("Content script received: " + event.data.text);
//         alert(event.data.text);
//         port.postMessage(event.data.text);
//       }
//     }, false);
//     console.log('onload');
//     let tablink = '';

//     chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//         tablink = tabs[0].url;
//         console.log(tablink);
//     });

//     if (tablink.includes("music.yandex")) {
//         let bar = document.querySelector(".bar");
//         let bar__content = bar.querySelector(".bar__content");

//         document.querySelector("#hidcheck").addEventListener('click', function() {
//             alert("Сработал");
//         });
//     }
//};