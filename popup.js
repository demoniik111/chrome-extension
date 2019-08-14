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
    console.log("DOM fully loaded and parsed");

    document.querySelector('.themeOn').addEventListener('click', function() {
        alert('worked');
    })
});

// window.onload = function() {
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
// };