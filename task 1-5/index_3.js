var selectItems = {};
selectItems.url_first = 'https://api.github.com/emojis';
selectItems.url_all = 'https://api.github.com/emojis';

getFirstTend();

function getFirstTend() {
    $.ajax({
        url: selectItems.url_first,
        type: "GET",
        dataType: "json",
        success: function (data) {
            return data
        }
    });
}
function getAllTend() {
    $.ajax({
        url: selectItems.url_all,
        type: "GET",
        dataType: "json",
        success: function (data) {
           console.log('оба ответа получены')
        }
    });
}

// (function getAllPromises() {
//     getFirstTend()
//     getAllTend()
//     Promise.all([getFirstTend,getAllTend])
//         .then(() => {
//             console.log('YO')
//         })
// })()

