const myClockElement = document.getElementById('myClock');
const myNameElement = document.getElementById('myName');


function showTime() {
    const currentDate = new Date();
    const timeString = currentDate.toUTCString();

    myClockElement.textContent = timeString;
}

let username = null;

function askUserName() {
    username = prompt("Adınız nedir?");
    if (username) {
        myNameElement.textContent = username;
    }
}  
askUserName();   /*
let userName = localStorage.getItem('username');
if (!userName) {
    userName = prompt("Adınız nedir?");
if (userName) {
    localStorage.setItem('username', userName);
    }
}
myNameElement.textContent = userName;  */
showTime();

setInterval(showTime, 1000);
