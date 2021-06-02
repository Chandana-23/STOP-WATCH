let count = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = 0;
let timerspeed = false;

let startTime = () => {
    count++;

    minutes = Math.floor((count/100)/60);
    seconds = Math.floor((count/100)-(minutes*60));
    milliseconds = Math.floor(count-(seconds*100)-(minutes*6000));

    document.querySelector('#min').innerText = leadingzero(minutes);
    document.querySelector('#sec').innerText = leadingzero(seconds);
    document.querySelector('#m-sec').innerText = leadingzero(milliseconds);
};


let startbtn = document.querySelector('#btn-start');

startbtn.addEventListener('click',function(){
    if(!timerspeed)
    {
        interval = setInterval(startTime,10);
        timerspeed = true;
    }
});


let leadingzero = (time) => {
    if (time<=9)
    {
        return "0"+time;
    }
    else
    {
        return time;
    }
};


let stopbtn = document.querySelector('#btn-stop');

stopbtn.addEventListener('click',function(){
    clearInterval(interval);
});

let resettbtn = document.querySelector('#btn-reset');

resettbtn.addEventListener('click',function(){
    clearInterval(interval);
    count = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    interval = 0;
    timerspeed = false;
    document.querySelector('#min').innerText = '00';
    document.querySelector('#sec').innerText = '00';
    document.querySelector('#m-sec').innerText = '00';
});
