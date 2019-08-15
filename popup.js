document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector('#hidcheck').checked = (localStorage.getItem("stateTheme") === 'true');

    if ((localStorage.getItem("stateTheme") === 'true')) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: true}, function(response) {
            console.log(response.farewell);
            });
        });
    }

    document.querySelector('#hidcheck').addEventListener('click', function() {
        if (localStorage.getItem("stateTheme") === 'true' || localStorage.getItem("stateTheme") === 'false') {
            localStorage.setItem("stateTheme", !(localStorage.getItem("stateTheme") === 'true'));
        } else {
            localStorage.setItem("stateTheme", true);
        }

        if ((localStorage.getItem("stateTheme") === 'true')) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {greeting: true}, function(response) {
                console.log(response.farewell);
                });
            });
        } else {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {greeting: false}, function(response) {
                console.log(response.farewell);
                });
            });
        }
    });
});