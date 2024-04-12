// const ws = new WebSocket('ws://localhost:3000');
const ws = new WebSocket('wss://4ndsaoio79.execute-api.us-east-1.amazonaws.com/production/');

ws.onopen = function () {
    document.querySelector('#send').addEventListener('click', function (e) {
        e.preventDefault()
        const message = document.querySelector('#message').value;
        document.querySelector('#chatbox').value += "\n\n" + message + "\n"
        ws.send(JSON.stringify({action:"sendMessage", Query: message}));
    });
};

ws.onmessage = function (msg) {
    console.log(msg)
    let data = JSON.parse(msg.data)
    let responseMessage = data.data
    if(data.data) {
        document.querySelector('#chatbox').value += responseMessage
    }
};

document.querySelector('#clear').addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector('#chatbox').value = ""
});