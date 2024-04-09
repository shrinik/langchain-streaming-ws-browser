const ws = new WebSocket('ws://localhost:3000');

ws.onopen = function () {
    document.querySelector('#send').addEventListener('click', function (e) {
        e.preventDefault()
        const message = document.querySelector('#message').value;
        document.querySelector('#chatbox').value += "\n\n" + message + "\n"
        ws.send(message);
    });
};

ws.onmessage = function (msg) {
    document.querySelector('#chatbox').value += msg.data
};

document.querySelector('#clear').addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector('#chatbox').value = ""
});