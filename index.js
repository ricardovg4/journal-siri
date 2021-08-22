const messageDate = document.querySelector('#date');
const message = document.querySelector('#message');
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

let data;
let currentMessage;

function increase(){
    if(currentMessage != data.length - 1){
        currentMessage += 1;
        console.log(currentMessage);
        renderMessage();
    }
}

function decrease(){
    if(currentMessage != 0){
        currentMessage -= 1;
        console.log(currentMessage);
        renderMessage();
    }
}

leftArrow.addEventListener('click', decrease);
rightArrow.addEventListener('click',increase);

async function fetchData(){
    const response = await fetch('./messages/messages.json');
    data = await response.json();

    // Set current message to last message index of data's array
    currentMessage = data.length - 1;
}

function renderMessage(){
    message.textContent = data[currentMessage].message;
    messageDate.textContent = data[currentMessage].date;
}

async function main(){
    await fetchData();
    renderMessage();
}
main();