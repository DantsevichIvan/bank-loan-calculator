//
addEventListener("DOMContentLoaded", function () {
    window.addEventListener('message', function (e) {
        debugger
        let message = e.data;
    });

    localStorage.setItem('1', 'Yo');
    localStorage.setItem('2', 'Hello')
    console.log(localStorage.getItem('1'));
    console.log(localStorage.getItem('2'));


    const receiver = document.getElementById('receiver').contentWindow;

    const send = document.getElementById('send');
    const remove = document.getElementById('remove');
    const read = document.getElementById('read');

    const objMessage = {};
    objMessage.color = 'Зеленый';
    objMessage.createText = "localStorage.setItem('3','YoYo')";


    function sendMessage(e) {
        e.preventDefault();
        objMessage.action = 'send';
        objMessage.key = '3';
        objMessage.val = 'TextForLocalStorage';
        objMessage.callb = "alert('it go)";
        receiver.postMessage(objMessage, '*');
    }

    function removeMessage(e) {
        e.preventDefault();
        objMessage.action = 'remove';
        objMessage.key = '3';
        objMessage.val = '';
        delete objMessage.color
        receiver.postMessage(objMessage, '*');
    }

    function readMessage(e) {
        e.preventDefault();
        objMessage.action = 'read';
        objMessage.key = '3';
        objMessage.val = '';
        receiver.postMessage(objMessage, '*');
    }

    send.addEventListener('click', sendMessage);
    remove.addEventListener('click', removeMessage);
    read.addEventListener('click', readMessage);

})