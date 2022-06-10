let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined,options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML =  time + "<br>" + date;
    // document.getElementsByClassName('date0').innerHTML = date;
}, 1000);


let app = document.getElementsByClassName('app');

function youtube () {
    window.location ='https://www.youtube.com';
}
function whatsapp() {
    window.location ='https://web.whatsapp.com';
}
function discord() {
    window.location ='https://discord.com/channels/@me';
}
function epicgames() {
    window.location ='https://store.epicgames.com/en-US/';
}
function gmail() {
    window.location ='https://mail.google.com/mail/u/0/#inbox';
}


let leftapps;
// document.querySelector('.apps-left').style.transform='none'   ;
// document.querySelector('.apps-left').style.opacity='5'   ;
// document.querySelector('.apps-left').style.padding='30px'   ;
leftapps = document.querySelector('.apps-left').style;
leftapps.transform='none';
leftapps.opacity='5';
leftapps.padding='30px';


console.log(leftapps);
