//getting DOM elements
const time = document.getElementById('timeId'),
      greeting = document.getElementById('greetingId'),
      name = document.getElementById('nameId'),
      focus = document.getElementById('focusId');
      
//Show time function
function showTime() {
    let today = new Date(),
        hours = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds();
    
        // Set background
    setBackgroun(hours);
    
        //Set PM or AM
    const amOrPm = hours >= 12 ? 'PM' : "AM";
    
        //Formated hours for 12 hour formate
    hours = hours % 12 || 12;
    seconds = addZero(seconds);
    minutes = addZero(minutes);
    hours = addZero(hours);
    //console.log(hours + ":" minutes + ":" + seconds);
    
        // DOM time to output
    time.innerHTML = hours  +':' +  minutes + ':' + seconds + ' ' + amOrPm;
    
    setTimeout(showTime, 1000);
}

// Add zero if it is need

function addZero(v) {
    return v >= 10 ? v : '0'+v;
}

//Set bacground image
function setBackgroun(hours) {
    
    if(hours >= 22 && hours < 6) {
        document.body.style.backgroundImage = "url('../img/night-backdround.jpg')";
        document.body.style.color = "white";
        greeting.innerHTML = "Good Night";
    } else if(hours >= 6 && hours < 12) {
        document.body.style.backgroundImage = "url('../img/morning-background.jpg')"; 
        document.body.style.color = "black";
        greeting.innerHTML = "Good Morning";
    } else if(hours >= 12 && hours < 18) {
        document.body.style.backgroundImage = "url('../img/afternoon-background.jpg')";
        document.body.style.color = "black";
        greeting.innerHTML = "Good Afternoon";
    } else if(hours >= 18 && hours < 22) {
        document.body.style.backgroundImage = "url('../img/evening-background.jpg')";
        document.body.style.color = "#0000ff";
        greeting.innerHTML = "Good Evening";
    }
    
}

function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter your Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    } 
}


function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter your Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}


function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    } 
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//Execute

showTime();
getName();
getFocus();




