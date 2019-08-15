// Проверяет state у инпута
// function changeState2() {
//     console.log('Зашёл2');
//     if(this.checked) {
//         bar__content.style.background = "red";
//     } else {
//         bar__content.style.background = "";
//     }
// };

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector('#hidcheck').addEventListener('click', function() {
        chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
            alert('Send' + response);
        });
        // if(this.checked) {
        //     var div = document.createElement('div');
        //     var label = document.createElement('span');
        //     label.textContent = "Hello, world";
        //     div.appendChild(label);
        //     document.body.appendChild(div);
        // } else {
        //     bar__content.style.background = "";
        // }
    });
});

// window.onload = function() {
//     let bar = document.querySelector(".bar");
//     let bar__content = bar.querySelector(".bar__content");
//     let player = bar__content.querySelector(".deco-player-controls");

//     function draw() {
//         bar__content.style.background = "red";
//         player.style.background = "none";
//     }

//     // bar__content.style.background = "red";
//     // player.style.background = "none";
// //     console.log('onload');
// //     let tablink = '';

// //     chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
// //         tablink = tabs[0].url;
// //         console.log(tablink);
// //     });

// //     if (tablink.includes("music.yandex")) {
// //         let bar = document.querySelector(".bar");
// //         let bar__content = bar.querySelector(".bar__content");

// //         document.querySelector("#hidcheck").addEventListener('click', function() {
// //             alert("Сработал");
// //         });
// //     }
// };