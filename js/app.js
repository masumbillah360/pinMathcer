const getPin =()=> {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}


document.getElementById('pin-generate').addEventListener('click',()=>{
    document.getElementById('pin-container').value = getPin();
})

document.getElementById('cal-body').addEventListener('click',(event)=>{
    const btnNumber = event.target.innerText;
    const pinHolder = document.getElementById('pin-holder');
    // pinHolder.value +=  event.target.innerText;
    if (isNaN(btnNumber)) {
        if (btnNumber == 'C') {
            pinHolder.value = '';
        }
    }
    else {
        const previousNumber = pinHolder.value;
        const newNumber = previousNumber + number;
        pinHolder.value = newNumber;
    }
});

const tryCounter = () =>{
    const leftTry = document.getElementById('left-try');
    const leftTryString = leftTry.innerText;
    let left = parseInt(leftTryString);
    const tryLeft = left -1;
    return tryLeft;
}

document.getElementById('sub-btn').addEventListener('click',()=>{
    const pinCreator = document.getElementById('pin-container').value;
    const pinTaker = document.getElementById('pin-holder').value;
    const fail = document.getElementById('pin-not-matched');
    const notifySuccess  = document.getElementById('pin-mathed');
    if (pinCreator === pinTaker) {
        notifySuccess.style.display = 'block';
        fail.style.display = 'none';
    }
    else{
        fail.style.display = 'block';
        notifySuccess.style.display = 'none';
        document.getElementById('left-try').innerText = tryCounter();
        if (tryCounter() < 0) {
            document.getElementById('sub-btn').setAttribute('disabled',true);
        }
        // console.log(fail.style.display,"fail");
    }
})